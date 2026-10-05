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

Step 5
=======

Step 6
=======

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
