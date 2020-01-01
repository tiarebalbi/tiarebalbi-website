# Definition

- Week 01: CircuitBreaker with Resilience4j
- Reliability
- https://images.unsplash.com/photo-1446769357257-5aa1b1bfcd65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80
- Eventually, it will happen. Instead of developing software to be bulletproof, let's build software that knows what to do in case of failure.

---

Let's start from the beginning, from the fitness function used in this post, **reliability**, **what's software reliability**?

**Software Reliability** is the probability of failure-free software operation for a specified period in a specified environment. The idea of reliability comes from Computing Networking, which explains as a way to notify whether the "sender" was able to deliver data to a recipient successfully or not. Applying this idea to fundaments of software architecture brings us a broader concept, which covers four different areas, maturity, availability, fault tolerance, and recoverability that I will be covering in this post. To exemplify and for me to learn something new, I will use a library called Resilience4j.

**Resilience4j** is a lightweight fault tolerance library inspired by Netflix Hystrix but designed for Java 8 and functional programming, which provides higher-order functions to enhance any functional interface, lambda expression, or method reference with a Circuit Breaker, Rate Limiter, Retry or Bulkhead.

## CircuitBreaker

The Circuit Breaker is an implementation via a finite state machine with three normal states: **CLOSED**, **OPEN** and **HALF_OPEN**, and two particular states, DISABLED and FORCED_OPEN.

Circuit Breaker is not that hard to understand, I pretty sure you have seemed this before, let's think about the power adapter of your house if the circuit is close your light will be ON as the energy is going to through the cables, but once we change the state, opening the circuit, we break the energy connection so that meals the will be OFF because the energy is non-longer going though.

![Circuit](https://kaiserscience.files.wordpress.com/2015/10/lit-bulb-circuit.gif)

This behavior is the same for software development ( with extra configuration ), but you may be asking yourself how you would use this during the development of software? Would you prefer to keep failing an HTTP request since you already know the server is off? But not just that, what about if you want to introduce a fallback plan? If the server is off, I would like to store the details in a database, queue mechanism, or log file to process the request later. These are the kind of things once you introduce a circuit breaker to your code you will be able to do.

To exemplify this pattern, I created a simple example that consists of an API client calling a URL multiple times, to demo the circuit breaker, I added a fake error to the API client code to fail the request after some time.

Few things to noticed in this example:

- Failure Rate Threshold: This configuration allows you to set the failure rate in percentage of when to change the state from CLOSED to OPEN (In this example, 40%).
- Minimum Number Of Calls: This configuration determines the minimum number of calls required by the algorithm to start to calculate the failure rate (In this example, one request)

```kotlin
// Config
val defaultConfig = CircuitBreakerConfig.ofDefaults()

val overwrittenConfig = CircuitBreakerConfig
    .from(defaultConfig)
    .failureRateThreshold(40F) // In Percentage
    .minimumNumberOfCalls(1)
    .build()

// Default Circuit Breaker Registry
val circuitBreakerRegistry = CircuitBreakerRegistry.of(overwrittenConfig)

// Init
val circuitBreaker = circuitBreakerRegistry.circuitBreaker("demo")

// Printing Current State of the App
circuitBreaker.eventPublisher
    .onEvent { println("[State: ${circuitBreaker.state}] - FailureRateThreshold: ${circuitBreaker.metrics.failureRate}") }

// Executing the logic multiple times (Output in the gif below)
loopUsing(circuitBreaker)


private fun loopUsing(circuitBreaker: CircuitBreaker, numberOfTimes: Int = 100) {
    try {
        for (i in 1..numberOfTimes) {
            var result = ""
            val time = measureTimeMillis {
                val decoratedSupplier = circuitBreaker.decorateSupplier { API.get("http://mock/users") }
                result = Try.ofSupplier(decoratedSupplier)
                    .recover { throwable: Throwable? -> recovery(throwable) } // trying to recover the request
                    .get()
            }

            println("Time: $time - $result \n\n")
        }
    } catch (e: Exception) {
        println("Got to a limit:")
        println("NumberOfFailedCalls: ${circuitBreaker.metrics.numberOfFailedCalls}")
        println("NumberOfSuccessfulCalls: ${circuitBreaker.metrics.numberOfSuccessfulCalls}")
    }
}

```

![Example](https://i.ibb.co/cxjz3sL/2020-01-01-08-10-35.gif)

In the output, you can see the requests one and two succeeding with no problem, but from request number three, you can see a new request going though, the retry call, which is our fallback plan, once we reach a FailureRateThreshold higher than 40% the application throw an exception as we reached the limit of retries.

The code above is just a simple example of what you can do. Resilience4j offers support for a high range of frameworks. To not keep this post too big, I will break it up, and next week I will go over Bulkhead. In the meanwhile, let me know what do you think about this post.

**Source code is available here:**

- https://github.com/tiarebalbi/resilience4j-demo

**Resources:**

- https://github.com/resilience4j/resilience4j
