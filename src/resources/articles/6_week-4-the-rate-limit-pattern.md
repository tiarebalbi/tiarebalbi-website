# Definition

- The RateLimit pattern
- Reliability
- https://images.unsplash.com/photo-1516844113229-18646a422956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3449&q=80
- By implementing rate limiting, developers are able to install a spigot which can be relaxed to allow for greater flow, or tightened to reduce the flow within the system.

---

This week's post is all about rate limit, how to control the volume of requests you can handle.

Rate-limiting is a pattern for a special counter that is used to limit the rate at which an operation can be performed. The perfect materialization of this pattern involves limiting the number of requests that can be executed against a public API/Service.

By implementing rate limiting, the developer permanently installs a plug that can be relaxed to allow for higher flow or tightened to reduce the flow within the system. Another one of the reasons to implement rate limiting is to defend applications against Denial of Service (DoS) attacks.

In a safety context, the developer needs to consider the limitations of a system to prevent overflowing. Just like, packed road results in congestion and accidents.

In a business context, the rate-limiting can be used as a profit-and-cost-negation technique. By demanding high-volume of requests, users are going to be presented with premium plans to cover resources costs or increase revenue stream.

![Rate Limiting](https://dzone.com/storage/temp/6898818-rate-limiting.png)
**Source:** https://dzone.com/articles/rate-limiter-internals-in-resilience4j

Now let's review the Resilience4j. To exemplify this pattern, I am going to use an API to fetch the stock details of specific companies.

In this implementation, we have 3 configurations available:

- timeoutDuration: The time each request waits for permission;
- limitRefreshPeriod: The period used to limit the volume of requests, for example, if I want to limit 100 requests for every 2 seconds the value of this property is 2s;
- limitForPeriod: Number of requests available during one limit refresh period.

For our example, we want to restrict 100 requests per second into our API, adding a timeout duration of 50ms.

```yaml
resilience4j.ratelimiter:
  instances:
    stockAPI:
      limitForPeriod: 100
      limitRefreshPeriod: 1s
      timeoutDuration: 50
      registerHealthIndicator: true
      subscribeForEvents: true
```

Now in the code part, since we are using the Spring Boot integration, we need to do one single thing, add an annotation to the component which needs to have the limit.

```kotlin
@RestController
@RequestMapping("/api/v1/stock")
@RateLimiter(name = "stockAPI")
class StockRestController(private val stockData: List<Stock>) {

    @GetMapping
    fun getAllStocks() = stockData

    @GetMapping("/{symbol}")
    fun searchStock(@PathVariable symbol: String): Stock = stockData.findBySymbol(symbol)

    @ExceptionHandler(RequestNotPermitted::class)
    fun exceptionHandler(exception: RequestNotPermitted): ResponseEntity<ErrorDetails> =
        asResponseEntityWithMessage("You reach the maximum number of API calls")
}
```

### Demo

To test this example, I am going to use a library called [loadtest](https://www.npmjs.com/package/loadtest) that will help me to excessed the limits defined.

#### Case 1

- Summary: No delay between each request
- Number of requests: 1000
- Concurrent requests: 40
- Time duration: 0ms

```
☁  ~  loadtest -n 1000 -c 40 http://localhost:9080/api/v1/stock
INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
INFO
INFO Target URL:          http://localhost:9080/api/v1/stock
INFO Max requests:        1000
INFO Concurrency level:   40
INFO Agent:               none
INFO
INFO Completed requests:  1000
INFO Total errors:        800
INFO Total time:          1.4998821900000001 s
INFO Requests per second: 667
INFO Mean latency:        58.9 ms
INFO
INFO Percentage of the requests served within a certain time
INFO   50%      49 ms
INFO   90%      84 ms
INFO   95%      98 ms
INFO   99%      238 ms
INFO  100%      250 ms (longest request)
INFO
INFO  100%      250 ms (longest request)
INFO
INFO   429:   800 errors
```

In this case, you can see a short response time, but with a high number volume of errors, from 1000 requests, we rejected 800 as our rate was way too high, 667 requests per second.

#### Case 2

- Summary: Adding a delay between requesting the permission
- Number of requests: 1000
- Concurrent requests: 40
- Time duration: 50ms

```
☁  ~  loadtest -n 1000 -c 40 http://localhost:9080/api/v1/stock
INFO Errors: 140, accumulated errors: 140, 19.3% of total requests
INFO
INFO Target URL:          http://localhost:9080/api/v1/stock
INFO Max requests:        1000
INFO Concurrency level:   40
INFO Agent:               none
INFO
INFO Completed requests:  1000
INFO Total errors:        215
INFO Total time:          7.124977342 s
INFO Requests per second: 140
INFO Mean latency:        279.9 ms
INFO
INFO Percentage of the requests served within a certain time
INFO   50%      102 ms
INFO   90%      787 ms
INFO   95%      891 ms
INFO   99%      943 ms
INFO  100%      946 ms (longest request)
INFO
INFO  100%      946 ms (longest request)
INFO
INFO   429:   215 errors
```

In this case, we made our response time a bit higher with a lower number of rejections, from 1000 requests, 215 requests rejected with a rate of 140 requests per second (~279.9ms per request).

#### Case 3

- Summary: High delay
- Number of requests: 1000
- Concurrent requests: 40
- Time duration: 200ms

```
☁  ~  loadtest -n 1000 -c 40 http://localhost:9080/api/v1/stock
INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
INFO Requests: 628 (63%), requests per second: 126, mean latency: 302.7 ms
INFO Errors: 29, accumulated errors: 29, 4.6% of total requests
INFO
INFO Target URL:          http://localhost:9080/api/v1/stock
INFO Max requests:        1000
INFO Concurrency level:   40
INFO Agent:               none
INFO
INFO Completed requests:  1000
INFO Total errors:        57
INFO Total time:          8.700301750000001 s
INFO Requests per second: 115
INFO Mean latency:        347.3 ms
INFO
INFO Percentage of the requests served within a certain time
INFO   50%      48 ms
INFO   90%      959 ms
INFO   95%      966 ms
INFO   99%      980 ms
INFO  100%      986 ms (longest request)
INFO
INFO  100%      986 ms (longest request)
INFO
INFO   429:   57 errors
```

In this case, we have a low number of requests rejected, but with high throughput, only 57 requests rejected.

Now, It is on you to decide what you want, as you can see this provides you a long list of options for you to plan your resources.

The integration with the **RateLimit** is not complicated; the most important part here is for you to understand what your restrictions are and how do you want to handle it, which brings us back to to the idea of [Fitness Functions](https://tiarebalbi.com/article/architectural-fitness-function), which one has priority over the other, [scalability](https://en.wikipedia.org/wiki/Scalability), [resilience](<https://en.wikipedia.org/wiki/Resilience_(network)>) or [safety](https://en.wikipedia.org/wiki/Safety)?

Make your priority clear and go **build your software**!
