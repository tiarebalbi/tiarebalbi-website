# Definition

- Architectural Fitness Function
- Weekly Update
- https://images.unsplash.com/photo-1526634027863-aacf61c59cae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80
- The beginning, in this post, I will describe the idea of fitness functions and how this I will use it to categorize the content of this site.

---

This year I am re-structuring the way I am guiding my studies instead of focusing my time in different areas. I will group them in Fitness Functions, but before I get there, let's take a step back and review what fitness functions are.

Fitness Functions are used in a Genetic algorithm to assess how close a design solution is to meet a set of aims, but the intention to use those functions here didn't come precisely from this definition. It came from the book ["Building Evolutionary Architectures by Rebecca Parsons, Neal Ford, Patrick Kua"](https://www.thoughtworks.com/books/building-evolutionary-architectures) and their description is the one that I genuinely believe to be the most relevant to describe areas of Software Architecture.

> An architectural fitness function provides an objective integrity assessment of some architectural characteristic(s), by Rebecca Parsons, Neal Ford, Patrick Kua

One of the main aspects of the fitness function is to protect the architectural characteristics required by a system. The specific architectural requirements diverge significantly across systems and organizations, based on business drivers, technical capabilities, and a host of other factors. Some software requires heightened security; others require significant throughput or low latency, whereas some might need to be more resilient to failure. These considerations form the "-ilities" (or system qualities) that architects care about. Conceptually, an architectural fitness function embodies a protection mechanism for the "-ilities" of a given system.

![Building Evolutionary Architectures](https://i.ibb.co/0GnkSQ5/Screen-Shot-2019-12-30-at-8-04-38-PM.png)

| Some of the **"-ilities"**: |
| --------------------------- |
| accessibility               | credibility | modifiability |
| accountability              | dependability | modularity |
| accuracy                    | deployability | portability |
| adaptability                | discoverability | recoverability |
| administrability            | distributability | relevance |
| affordability               | durability | resilience |
| auditability                | effectiveness | robustness |
| availability                | efficiency | scalability |
| compatibility               | failure transparency | testability |
| configurability             | flexibility | usability |

See more [here](https://en.wikipedia.org/wiki/List_of_system_quality_attributes)

I strongly recommend everyone to read this book. The fitness function is just the point of the iceberg.

From next week I will start with **resilience**, where I will dig in on techniques to increase the resilience of your software and how to monitor it.

**Resources:**

- https://en.wikipedia.org/wiki/Evolutionary_computation
- https://www.thoughtworks.com/books/building-evolutionary-architectures
- https://martinfowler.com/articles/evo-arch-forward.html
