Step 1
=======

In a previous lesson, you learned about binary search and how it differs from linear search.
In this workshop, you will put that into practice by building a binary search algorithm.

To begin, create a binarySearch function with a searchList and value parameters.

searchList is the array of elements the function will search within, and value is the target the function will try to find within the searchList.

Step 2
=======

Inside your binarySearch function, create a pathToTarget variable and initialize it to an empty array, for a start.

Step 3
=======

In binary search, there is the lowest possible index and the highest possible index.

The lowest possible index represents the leftmost boundary in the current portion of the values being searched within, in this case, searchList. The highest possible index, on the other hand, represents the rightmost boundary in the values being searched.

To account for those two, you have to consider the entire array being searched. So, inside the binarySearch function, declare a low variable with a value of 0, and a high variable with a value that accounts for the last index in the array being searched.

Step 4
=======

Now that you've defined the boundaries of your search, it's time to create the loop that will perform the binary search algorithm.

Binary search works by repeatedly narrowing down the search space. This process continues as long as there is a valid range of elements to check.

You can express this with a while loop that will continue as long as your low pointer is less than or equal to your high pointer.

If low ever becomes greater than high, it means the search space has become empty, and the value is not in the array.

Inside the binarySearch function, create a while loop with a condition that checks if low is less than or equal to high.

Step 5
=======

To get started with the loop, you need to find the middle index of the current search space.

You can get the middle index by calculating the average of the low and high variables. You will have to use floor division to get the average after adding the two values, so the answer would always be an integer rounded down, as the indices must be integers.

Within your while loop, declare a mid variable set to the average of low and high.

Step 6
=======

Now that you've calculated the mid index, you need to actually retrieve the value from the searchList at that index. This value is what you will compare against your value parameter, which is the target you are searching for.

Create a valueAtMiddle variable and assign it the element from searchList that is located at the mid index.

Step 7
=======

Now, include valueAtMiddle in the pathToTarget array to track the steps taken during the search, regardless of whether it's the target. You can do this with the push() method.

Step 8
=======

The next thing to do is to create a condition that will check if the target value is in the middle.

Inside the while loop, create an if statement that checks if the target value is equal to valueAtMiddle. If it is, return the pathToTarget variable.

Step 9
=======

You need to test out things so you will understand the flow of the algorithm at this initial stage.

To do that, you need to first break out of the loop. That's because the current implementation will only allow one iteration, so if the condition is not met, there will be an infinite loop.

Just after the if statement, use the break keyword to break out of the while loop. Then, after the while loop, return an empty array to signify that the value was not found.

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

Step 15
=======

Step 16
=======
