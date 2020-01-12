# Definition

- Week 03: The retry pattern
- Reliability
- https://images.unsplash.com/photo-1527266237111-a4989d028b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80
- Improving the stability of the software by enabling a service consumer to handle anticipated, temporary failures of the service by retrying to invoke the same service operation.

---

Continuing with the series, in this week's post, I will talk about the Retry Pattern.

Retry pattern is primarily used is to handle the Stability aspect of the system. A retry pattern improves the stability of the software by enabling a service consumer to handle anticipated, temporary failures of the service by retrying to invoke the same service operation that has previously failed.

Here is a diagrammatic representation of the retry pattern:

![Retry Pattern](https://learning.oreilly.com/library/view/architecting-data-intensive-applications/9781786465092/assets/f51a412d-451d-4ce3-876f-39d2bc592e4f.png)

As you can see in the flow, we start by trying to connect to the service. If the service is available, we execute the relevant function, and if everything is OK, we return. If the service is not available or throws some specific exception, we put it under the retry logic. We retry for the configured number of times at a set interval, and if the execution still doesn't succeed, we abort the execution.

With this idea in mind, let's see how the Resilience4j library works. Start from the configuration, the retry implementation provides us two ways to configure our registry, a default policy that will be used by all service or a specific setting per service that will override the properties defined in the default policy.

Using the builder interface, you can configure:

- the maximum number of retry attempts
- the wait duration between successive attempts
- a custom Predicate which evaluates if a particular response should trigger a retry attempt
- a custom Predicate which evaluates if an exception should trigger a retry attempt
- a list of exceptions which should trigger a retry attempt
- a list of exceptions which should be ignored and not trigger a retry attempt

For more details [check this page](https://resilience4j.readme.io/docs/retry)

### Example

Now it's time for us to put our hands on. I want to continue from the example that [I created last week](https://tiarebalbi.com/article/week-2-bulkhead-managing-concurrent-requests) where we were handling two bank transactions, one to get cash and another one to deposit an amount into our account. What we noticed in the previous example was that if I had two transactions happening at the same time, the second one was going to fail. Today I want to fix this problem.

To fix this problem, I want to add a retry operation that will repeat the operation three times, but between each of them, I want to add a delay of 10 seconds, so let's see how the configuration is going to looks like:

```yaml
resilience4j.retry:
  configs:
    default:
      maxRetryAttempts: 2
      waitDuration: 300
  instances:
    bankService:
      maxRetryAttempts: 3
      waitDuration: 3s
      enableExponentialBackoff: true
      exponentialBackoffMultiplier: 2
      ignoreExceptions:
        - com.tiarebalbi.resilience.retry.BankTransactionException
```

In this configuration, our default policy will have attempt the retry operation only two times with a delay of 300 milliseconds between each request. However, for the bankService, I'm setting three attempts with 3 seconds between each request with an extra configuration, the ignoreExceptions, which will skip the retry operation if this exception occurs.

Now to enable this configuration in our code, we need to add the annotation **@Retry**. Notice that when adding the annotation to a method or class, you have the option to define a fallback method that will be executed in case the retry does not "fix" the problem.

```kotlin
@Component
@Bulkhead(name = "bankService")
class BankService {

    private final val logger = LoggerFactory.getLogger(BankService::class.java)

    private final var currentBalance = BigDecimal(1_000) // Initial Balance

    @Retry(name = "bankService", fallbackMethod = "recoverCashOut")
    fun cashOut(total: BigDecimal) {
        if (currentBalance < total) {
            throw BankTransactionException("No balance for this transaction")
        }

        logger.info("Cash out of $total€")
        this.currentBalance = this.currentBalance - total
        sleep(2300) // fake pause
        logger.info("Done, new balance is: ${this.currentBalance}")
    }

    @Retry(name = "bankService", fallbackMethod = "recoverDeposit")
    fun deposit(total: BigDecimal) {
        logger.info("Processing deposit")
        this.currentBalance = this.currentBalance + total
        sleep(1500)
        logger.info("Deposit completed. New balance ${this.currentBalance}€")
    }

    fun recoverCashOut(total: BigDecimal, exception: BankTransactionException) {
        logger.error("Cash out reject. Total requested $total, details: ${exception.message}")
    }

    fun recoverDeposit(total: BigDecimal, exception: Exception) {
        logger.info("Saving deposit to be processed later. Total of $total")
    }
}
```

Now let's do a test, remembering that the initial balance of the user is 1.000€. In the gif below, you will see the following operations:

- Withdraw an amount higher than my current balance. Needs to be rejected.
- In parallel:
  - Deposit of 400€
  - Withdraw of 1.400€

![Demo](https://i.imgur.com/apvyFHe.gif)

Here's the list of events that our retry service was able to collect (I won't get in details about the metrics but if you're interested in to know more about it, [check this link](https://resilience4j.readme.io/docs/micrometer):

```json
{
  "retryEvents": [
    {
      "retryName": "bankService",
      "type": "IGNORED_ERROR",
      "creationTime": "2020-01-12T08:29:11.368Z[Europe/Dublin]",
      "errorMessage": "com.tiarebalbi.resilience.retry.BankTransactionException: No balance for this transaction",
      "numberOfAttempts": 0
    },
    {
      "retryName": "bankService",
      "type": "RETRY",
      "creationTime": "2020-01-12T08:29:14.801Z[Europe/Dublin]",
      "errorMessage": "io.github.resilience4j.bulkhead.BulkheadFullException: Bulkhead 'bankService' is full and does not permit further calls",
      "numberOfAttempts": 1
    },
    {
      "retryName": "bankService",
      "type": "SUCCESS",
      "creationTime": "2020-01-12T08:29:19.313Z[Europe/Dublin]",
      "errorMessage": "io.github.resilience4j.bulkhead.BulkheadFullException: Bulkhead 'bankService' is full and does not permit further calls",
      "numberOfAttempts": 1
    }
  ]
}
```

In the list of events, you can see that the first request was automatically ignored as the exception is listed in our property "ignoredExceptions" and the following requested we had to retry the operation once as the deposit was in progress.

The retry operation won't fix all your problems, but it will provide you different ways to plan how your method should work, make your software much safer.

Next week I want to cover RateLimit. How can we limit the number of requests in a shared API?

**Source code is available here:**

- https://github.com/tiarebalbi/resilience4j-demo

**Resources:**

- https://github.com/resilience4j/resilience4j
