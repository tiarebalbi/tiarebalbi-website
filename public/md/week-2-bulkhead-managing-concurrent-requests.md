This week I will be covering the Bulkhead implementation of the Resilience4j. Let's start reviewing why I should use and how does it work.

A bulkhead is a fault tolerance pattern that allows you to allocate a limit volume of resources to a specific part of your code, eliminating the ability of one component failure to take down adjacent healthy components.

The bulkhead is a term borrowed from cargo ships. In a cargo ship, the bulkhead is a wall built between different cargo sections, which makes sure that a fire or flood in one part is restricted to that section, and other sections are not impacted.

To implement the bulkhead pattern, we need to make sure that all our services work independently of each other, and a failure in one will not create a failure in another service.

![Bulkhead resources](/images/d/878761a7d761a94888d4ff5810d491a5)

#### What problems are we fixing?

- Propagation of Failure, because solutions are contained and do not share resources (storage, synchronous service-to-service calls, etc.), their associated failures are contained and do not propagate.
- Noisy Neighbors: If appropriately implemented, network, storage, and compute segmentation ensure that abnormally large resource utilization by a service does not affect other services outside of the bulkhead (fault isolation zone).
- Unusual Demand: The bulkhead protects other resources from services experiencing unpredicted or unexpected demand. Other resources do not suffer from TCP port saturation, resulting in database deterioration, etc.

#### When should I use this pattern?

- Scale a service independent of other services;
- Fault isolation duo to a variety of risks or availability requirements;
- Isolate geographies for increased speed/reduced latency such that distant solutions do not share or communicate and thereby slow response times;

## Resilience4j Bulkhead

Resilience4j provides two implementations of a bulkhead pattern that is used to limit the number of concurrent execution:

### SemaphoreBulkhead (Implementation based on a semaphore)

A way to lock resources so that it is guaranteed that while a piece of code is executed, only this piece of code has access to that resource;

### FixedThreadPoolBulkhead

FixedThreadPoolBulkhead is an implementation based in a thread pool, where each request will be submitted to a service that goes to the bulkhead thread pool, which can process your request if the is thread pool is free or queue if your capacity is below the limit, but If the queue is full and the thread is busy, the request will be rejected.

## Example

To exemplify this concept, I will be using the idea of a bank where the operations to get cash, or deposit money can only happen one at a time.

**Requirements for this example:**

- If I have a balance, I subtract the amount request from the current balance
- Each operation can take up to 3 seconds to process
- The bank can process only one transaction at a time.

To implement the requirement above, I will use the Spring Boot framework, where I will have one controller and one service, the controller to receive the request, and the service to process the logic for the bank transactions.

Let's start from the configuration, Resilience4j provide us a flexible way to configure the allocation resource per "service" (our bulk name) where you can set the number of concurrent calls and max wait time (the time a thread should be blocked for when attempting to enter a saturated bulkhead).

```yaml
resilience4j.bulkhead:
  configs:
    default:
      maxConcurrentCalls: 100
  instances:
    bankService:
      maxWaitDuration: 10ms
      maxConcurrentCalls: 1
```

Since we know that we want to limit the request for all bank transactions, I'm adding the annotation **@Bulkhead** to the class instead of the method as I want the limit to be for all methods.

```kotlin
@Component
@Bulkhead(name = "bankService")
class BankService {

    private final val logger = LoggerFactory.getLogger(BankService::class.java)

    private final var currentBalance = BigDecimal(1_000) // Initial Balance

    fun cashOut(total: BigDecimal) {
        if (currentBalance < total) {
            throw RuntimeException("No balance available")
        }

        logger.info("Cash out of $total€")
        this.currentBalance = this.currentBalance - total
        sleep(3000) // fake pause
        logger.info("Done, new balance is: ${this.currentBalance}")
    }

    fun deposit(total: BigDecimal) {
        this.currentBalance = this.currentBalance + total
        sleep(5000)
        logger.info("New Balance ${this.currentBalance}€")
    }
}
```

Now with all configurations in place, I will try to process two transactions at the same time, one to get cash and another to make a deposit.

![Example](/images/d/567b765e85ab1124e650f8f42ad7bcef.gif)

As you can see in the image above, we had an exception in the attempt to process the second request because the application received the second request before we finish the first one avoid us to make a mistake in the way to calculate the current balance of the user.

This is an excellent example of how you can limit the behavior of your application per section/area without affecting the rest of your software.

So far, we reviewed the idea of CircuitBreaker, which provides us an API to describe our fallback plan, and now we are examining the concept of the bulkhead, which allows us to isolate parts of our application. In the next post, I want to learn more about retries and see how this can help us to make our application more reliable.

**Source code is available here:**

- https://github.com/tiarebalbi/resilience4j-demo

**Resources:**

- https://github.com/resilience4j/resilience4j
- https://see.stanford.edu/materials/icsppcs107/23-Concurrency-Examples.pdf
