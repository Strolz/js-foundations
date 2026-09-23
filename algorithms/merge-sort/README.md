Step 1
=======

Merge sort is a sorting algorithm that uses the divide-and-conquer principle to sort collections of data. That is, it "divides" a collection into smaller sub-parts, and "conquers" the sub-parts by sorting them independently, then merges the sorted sub-parts.

Begin by creating a function called mergeSort that takes the parameter array.

Step 2
=======

The merge sort algorithm performs three actions:

Divide an unsorted sequence of items into sub-parts
Sort the items in the sub-parts
Merge the sorted sub-parts
The above happens recursively until the sub-parts are merged into the complete sorted sequence. Start by dividing the sequence.

First, inside the mergeSort function, declare a variable middlePoint using const and assign it Math.floor(array.length / 2) so you can split the sequence in half before recursing.

Step 3
=======

You already have a middlePoint value. Use it to split the array into two halves and keep the left portion ready for sorting.
Use the slice syntax to extract the left half of array and assign it to a variable named leftPart.

Step 4
=======

After slicing the left half, you still need the right side to complete the merge step.
Use the slice syntax to extract the right half of array and assign it to a variable named rightPart.

Step 5
=======

Now that you've divided the array list into two separate lists, you'll keep dividing each list until every element stands alone in its own list. A list with a single number is always sorted.

To do that, recursively call mergeSort inside your function and pass leftPart as the argument to the call.

Step 6
=======

At the bottom of your function body, call the mergeSort() function again. This time, pass in rightPart as the argument to the function call.

Step 7
=======

Now it's time to sort and merge the lists (leftPart and rightPart) into the original array.

You can do this by comparing elements on both lists, and merging the smaller element to the main list. You are going to do this comparison for all the indexes in leftPart and rightPart.

Create three variables: leftArrayIndex, rightArrayIndex, and sortedIndex, and set their values to 0. These variables will help you keep track of each index during the sorting process.

Step 8
=======

Next, you need to create a loop that continues as long as there are elements remaining in both leftPart and rightPart.

For that, create a while loop with two conditions: one that checks whether the leftArrayIndex is less than the length of leftPart and another condition that checks whether rightArrayIndex is less than the length of rightPart.

Step 9
=======

Inside the loop, start comparing the current elements from each half so you can merge the smaller value first.
Add an if block that checks if the current element in leftPart is less than the current element in rightPart.

Step 10
=======

When the if condition evaluates to true, it means that the element in the leftPart list is smaller than the element it is being compared to in the rightPart list.

In that case, you can put the element found at leftArrayIndex in leftPart within the sorted array.

Inside the if block, assign leftPart[leftArrayIndex] to array[sortedIndex].

Step 11
=======

After assigning the element in leftPart to the sorted array, increment leftArrayIndex by 1.

Step 12
=======

In a previous step, you assigned the element in the leftPart to the array list because it was smaller. But this will not always be the case. In some comparison cases, the element on the right could be smaller.

Create an else clause to execute when the element in leftPart is not less than the element in rightPart.

Inside the else block, assign rightPart[rightArrayIndex] to array[sortedIndex].

Step 13
=======

Still within the else block, increment rightArrayIndex by 1.

Step 14
=======

Step 15
=======

Step 16
=======

Step 17
=======

Step 18
=======

Step 19
=======

Step 20
=======

Step 21
=======

Step 22
=======

Step 23
=======

Step 24
=======

Step 25
=======
