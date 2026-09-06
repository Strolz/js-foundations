Build a Countdown
---------------------------------

In this lab, you will build a countdown function that takes a starting number and generates a countdown list.

To complete the lab, you must build the result using recursion and you must not use loops (for, while), Array.from(), or array-iteration methods (forEach, map, filter, reduce). Each call should produce its own result array (don't use globals to store the countdown).
---------------------------------

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
---------------------------------

User Stories:

You should create a function named countdown.

The countdown function should take a single argument n (a number).

If n is less than 1, countdown should return an empty array.

Otherwise, countdown should return an array containing the integers from n down to 1 in descending order.

You must use recursion (the function should call itself) and must not use loops of any kind (for, while, Array.from(), or higher-order methods like forEach, map, filter, reduce).

Each recursive call should use a smaller value than the previous call (for example, n - 1) so the function reaches its base case.

The solution should not use global variables to store or cache the result array.

Calling countdown multiple times with different inputs should always return the correct, independent result.
---------------------------------
