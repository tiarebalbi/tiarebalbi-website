# Definition

- Customize your Java-JSON serialization using Jackson Annotations 1
- Kotlin
- https://miro.medium.com/max/12000/1*XjcmK3XjHJP3LLqWnoqRtg.jpeg
- This article is part of a series. Check out the full series: Part 1, Part 2, Part 3, Part 4, Part 5, Part 6, Part 7 and Part 8! You can also read this article in 日本語, Português, Português (alternate), Türkçe, Français, 한국어 , العَرَبِيَّة‎‎, Español (México), Español (España), Polski, Italiano, 普通话, Русский, 한국어 , Tiếng Việt or فارسی.

---

# Customize your Java-JSON serialization using Jackson Annotations

Giant update: I’ve written a new book based on these articles! It not only expands and updates all my articles, but it has tons of brand new content and lots of hands-on coding projects. Check it out now!
Have you heard people talking about machine learning but only have a fuzzy idea of what that means? Are you tired of nodding your way through conversations with co-workers? Let’s change that!
This guide is for anyone who is curious about machine learning but has no idea where to start. I imagine there are a lot of people who tried reading the wikipedia article, got frustrated and gave up wishing someone would just give them a high-level explanation. That’s what this is.
The goal is be accessible to anyone — which means that there’s a lot of generalizations. But who cares? If this gets anyone more interested in ML, then mission accomplished.
What is machine learning?
Machine learning is the idea that there are generic algorithms that can tell you something interesting about a set of data without you having to write any custom code specific to the problem. Instead of writing code, you feed data to the generic algorithm and it builds its own logic based on the data.
For example, one kind of algorithm is a classification algorithm. It can put data into different groups. The same classification algorithm used to recognize handwritten numbers could also be used to classify emails into spam and not-spam without changing a line of code. It’s the same algorithm but it’s fed different training data so it comes up with different classification logic.

This machine learning algorithm is a black box that can be re-used for lots of different classification problems.
“Machine learning” is an umbrella term covering lots of these kinds of generic algorithms.
Two kinds of Machine Learning Algorithms
You can think of machine learning algorithms as falling into one of two main categories — supervised learning and unsupervised learning. The difference is simple, but really important.
Supervised Learning
Let’s say you are a real estate agent. Your business is growing, so you hire a bunch of new trainee agents to help you out. But there’s a problem — you can glance at a house and have a pretty good idea of what a house is worth, but your trainees don’t have your experience so they don’t know how to price their houses.
To help your trainees (and maybe free yourself up for a vacation), you decide to write a little app that can estimate the value of a house in your area based on it’s size, neighborhood, etc, and what similar houses have sold for.
So you write down every time someone sells a house in your city for 3 months. For each house, you write down a bunch of details — number of bedrooms, size in square feet, neighborhood, etc. But most importantly, you write down the final sale price:

This is our “training data.”
Using that training data, we want to create a program that can estimate how much any other house in your area is worth:

We want to use the training data to predict the prices of other houses.
This is called supervised learning. You knew how much each house sold for, so in other words, you knew the answer to the problem and could work backwards from there to figure out the logic.
To build your app, you feed your training data about each house into your machine learning algorithm. The algorithm is trying to figure out what kind of math needs to be done to make the numbers work out.
This kind of like having the answer key to a math test with all the arithmetic symbols erased:

Oh no! A devious student erased the arithmetic symbols from the teacher’s answer key!
From this, can you figure out what kind of math problems were on the test? You know you are supposed to “do something” with the numbers on the left to get each answer on the right.
In supervised learning, you are letting the computer work out that relationship for you. And once you know what math was required to solve this specific set of problems, you could answer to any other problem of the same type!
Unsupervised Learning
Let’s go back to our original example with the real estate agent. What if you didn’t know the sale price for each house? Even if all you know is the size, location, etc of each house, it turns out you can still do some really cool stuff. This is called unsupervised learning.

Even if you aren’t trying to predict an unknown number (like price), you can still do interesting things with machine learning.
This is kind of like someone giving you a list of numbers on a sheet of paper and saying “I don’t really know what these numbers mean but maybe you can figure out if there is a pattern or grouping or something — good luck!”
So what could do with this data? For starters, you could have an algorithm that automatically identified different market segments in your data. Maybe you’d find out that home buyers in the neighborhood near the local college really like small houses with lots of bedrooms, but home buyers in the suburbs prefer 3-bedroom houses with lots of square footage. Knowing about these different kinds of customers could help direct your marketing efforts.
Another cool thing you could do is automatically identify any outlier houses that were way different than everything else. Maybe those outlier houses are giant mansions and you can focus your best sales people on those areas because they have bigger commissions.
Supervised learning is what we’ll focus on for the rest of this post, but that’s not because unsupervised learning is any less useful or interesting. In fact, unsupervised learning is becoming increasingly important as the algorithms get better because it can be used without having to label the data with the correct answer.
Side note: There are lots of other types of machine learning algorithms. But this is a pretty good place to start.
That’s cool, but does being able to estimate the price of a house really count as “learning”?
As a human, your brain can approach most any situation and learn how to deal with that situation without any explicit instructions. If you sell houses for a long time, you will instinctively have a “feel” for the right price for a house, the best way to market that house, the kind of client who would be interested, etc. The goal of Strong AI research is to be able to replicate this ability with computers.
But current machine learning algorithms aren’t that good yet — they only work when focused a very specific, limited problem. Maybe a better definition for “learning” in this case is “figuring out an equation to solve a specific problem based on some example data”.
Unfortunately “Machine Figuring out an equation to solve a specific problem based on some example data” isn’t really a great name. So we ended up with “Machine Learning” instead.
Of course if you are reading this 50 years in the future and we’ve figured out the algorithm for Strong AI, then this whole post will all seem a little quaint. Maybe stop reading and go tell your robot servant to go make you a sandwich, future human.
Let’s write that program!
So, how would you write the program to estimate the value of a house like in our example above? Think about it for a second before you read further.
If you didn’t know anything about machine learning, you’d probably try to write out some basic rules for estimating the price of a house like this:
def estimate_house_sales_price(num_of_bedrooms, sqft, neighborhood):
price = 0

# In my area, the average house costs \$200 per sqft

price_per_sqft = 200
if neighborhood == "hipsterton": # but some areas cost a bit more
price_per_sqft = 400
elif neighborhood == "skid row": # and some areas cost less
price_per_sqft = 100

# start with a base price estimate based on how big the place is

price = price_per_sqft \* sqft

# now adjust our estimate based on the number of bedrooms

if num_of_bedrooms == 0: # Studio apartments are cheap
price = price — 20000
else: # places with more bedrooms are usually # more valuable
price = price + (num_of_bedrooms \* 1000)
return price
If you fiddle with this for hours and hours, you might end up with something that sort of works. But your program will never be perfect and it will be hard to maintain as prices change.
Wouldn’t it be better if the computer could just figure out how to implement this function for you? Who cares what exactly the function does as long is it returns the correct number:
def estimate_house_sales_price(nu
