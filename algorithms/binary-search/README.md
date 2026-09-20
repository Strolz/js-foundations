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

Step 15
=======

Step 16
=======
