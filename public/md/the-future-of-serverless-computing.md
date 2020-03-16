The idea of serverless always called my attention, one single function doing one simple thing in a short living state. In reality, serverless is more than just functions, it is a way to build software that can grow from day one with low cost (no events, no costs).

One of the main problems is one of the benefits of serverless, the state, but before get there, let's take a step back and think about how a simple software is developed these days.

Usually, you have a starting point, an API that receives some data about the request, after that, we process the request and maybe we store the output in some sort of database right?

Even with microservices, a single package doing a group of things for a specific context, sometimes, with a database to store the details of this service. Can you see the workflow of this service? A step to receive the data via an API, a new step to process the request and another step to store the processed data, with the whole infrastructure of a project and their dependencies which you need to maintain.

The serverless function could provide us you the same thing but with better scalability, resilience, performance and maybe at a lower cost, so why are we not using it everywhere?

In the beginning, everything is simple, easy to connect and simple to manage, but things can get messy once you start to grow and the fix of this problem is what I see as the future of Serverless Functions.

> "We predict that serverless computing will grow to dominate the future of cloud computing."
> —Berkeley CS dept, 'Cloud computing simplified: a Berkeley view on serverless computing'

Today I found this project, which I believe to be the first step forward to this future.

**Cloudstate** is a framework that is bringing stateful services, fast data/streaming, and the power of reactive technologies to the Cloud Native ecosystem breaks down the final impediment standing in the way of a Serverless platform for general-purpose application development — with true elastic scalability, high resilience, and global deployment, in the Kubernetes ecosystem.

**Cloudstate's** reference implementation is leveraging [Knative](https://cloud.google.com/knative/), [gRPC](https://grpc.io/), [Akka Cluster](https://doc.akka.io/docs/akka/current/index-cluster.html), and [GraalVM](https://www.graalvm.org/) running on [Kubernetes](https://kubernetes.io/), allowing applications to not only scale efficiently but to manage distributed state reliably at scale while maintaining its global or local level of data consistency, opening up for a whole range of new addressable use-cases.

![Sample](/images/d/b6ccbc7baca53204d810df5a52416a28)

Managing a distributed state isn't just about pushing data from A to B in a reliable fashion. It's about selecting a model that reflects the real-world use of the data, and its convergence on usable consistency, not artificially enforced consistency. Being able to have data span clusters, data centers, availability zones, and continents, and maintain a useful coherent state is something that the combination of Kubernetes and Akka excel at. Additionally, repetitive work that is better executed in the stateful cluster, or needs to maintain long-running state can be embedded via command channels.

You can find more about the design [here](https://github.com/cloudstateio/cloudstate#design-and-architecture).

## New use-Cases that Cloudstate enables

**Cloudstate** is designed to extend the model and make it straightforward to implement use-cases such as:

- Training and Serving of Machine Learning Models
- Low-latency Real-time Prediction/Recommendation Serving
- Low-latency Real-time Fraud Detection
- Low-latency Real-time Anomaly Detection
- User Session, Shopping Cart, and similar
- Transaction and Workflow Management
- Shared Collaborative Workspaces
- Distributed counting, voting, etc.
- Leader Election, and other distributed systems protocols for coordination
- The goal of Cloudstate is to provide a way for implementing these use-cases in a scalable and available way, working in concert with the application itself, all the while providing end-to-end correctness, consistency, and safety.

**Note:** Cloudstate content shared in this post was taken from their GitHub page, for more details check the link below.

**GitHub:** https://github.com/cloudstateio/cloudstate
