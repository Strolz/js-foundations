Step 1
=======

In this workshop, you'll implement a function that generates all valid combinations of parentheses using a breadth-first search (BFS) approach. For example, the valid combinations of two pairs of parentheses are (()) and ()().

Start by creating a function named genParentheses with a single parameter pairs. For now, return an empty array from the function.

Step 2
=======

Before implementing the core algorithm, you need to validate the input. The pairs parameter should be an integer, as it represents the number of parentheses pairs to generate.

Add an if statement at the beginning of your function to check if pairs is not an integer. Use the Number.isInteger() method for that.

If the condition is true, return the string The number of pairs should be an integer.

Step 3
=======

Next, you need to validate that the number of pairs is at least one, since you can't generate parentheses combinations with zero or negative pairs.

Add another if statement to check if pairs is less than 1. If this condition is true, return the string The number of pairs should be at least 1.

Step 4
=======

Now you'll set up the data structure to store your results. Create a variable named result and initialize it to an empty array. This array will store all the valid parentheses combinations you generate.

Update your return statement to return result instead of an empty array.

Step 5
=======

For the breadth-first search approach, you'll use a queue to track different states as you build the parentheses combinations. Each state will be represented as an array containing three elements:

The current string being built
The number of opening parentheses used so far
The number of closing parentheses used so far
Create a variable named queue and initialize it to an array containing one array: ['', 0, 0]. This represents the starting state with an empty string and zero parentheses used.

Step 6
=======

Now you'll implement the main BFS loop. Create a while loop that continues as long as the queue is not empty, that is, queue.length is greater than 0.

Inside the loop, log queue to the console.

Step 7
=======

Step 8
=======

Step 9
=======

Step 10
=======

Step 11
=======

Step 12
=======

Step 13
=======

Step 14
=======
