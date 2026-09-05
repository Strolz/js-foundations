Build a Countup
---------------------------------

Step 1
======
In this workshop, you will be creating a countup function, that creates an array with numbers from 1 to a given number using recursion.

Start by creating an empty function named countup that takes a single parameter.
---------------------------------

Step 2
======
Add an if statement inside your countup function.

Check if number is less than 1 and return an empty array.
This will serve as the base case for your recursion.
---------------------------------

Step 3
======
Declare an empty array named countArray inside the countup function just above your if statement.

This array will store the value of number at each function call.
---------------------------------

Step 4
======
Step 4
For all numbers greater than or equal to 1, create an else block and inside it, call the countup function with number - 1 and assign the result to countArray.

Then use .push() to add number to countArray, and finally return countArray.

This ensures the recursion eventually reaches the base case and terminates.
---------------------------------

Step 5
======

---------------------------------
