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
