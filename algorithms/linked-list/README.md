Build a Decimal to Binary Converter
======
In this workshop, you'll implement a linked list.

Step 1
======
To begin, create a function named initList. Inside it, return an object with a head property set to null, and a length property of 0.

This is the function you will call to initialize a linked list. The head represents the first element in the list, initially, it is null because there's no element in the list. The length tracks the number of nodes (elements) in the list, which you will increment or decrement when adding or removing a node from the list.

Step 2
======
The next thing you will work on is a function that lets you check if the list is empty.

To do that, create a function named isEmpty that takes a list parameter. Inside the function, return a check to see if the length property of list is strictly equal to 0.

Step 3
======
Now you will work on the function that will add a node to the list.
Create an add function with list and element parameters.

Step 4
======
This node would need two properties, the element to add, and a pointer to the next node.

Inside the add function, create an object named node, it should have a property named element, and a next property set to null, which is the pointer to the next element of the list.

Step 5
======
At this point, you should test the linked list for better understanding.

Create a myList variable and set it to initList(). Under it, log a call of isEmpty() using myList as the parameter to the console. Then, after that, call add with myList and a number of your choice, then log myList to the console. Under that, log another call of isEmpty() to the console using myList as the parameter again.le

Step 6
======
Notice the true, { head: null, length: 0 }, and true results in the console? This happens because you've not assigned anything to the list myList, and you've not incremented the length property.

Go ahead and assign node to list.head, and under that, increment the length property of list.

Step 7
======
Now, the log should show something like { head: { element: 42, next: null }, length: 1 } in the console.

However, this is not how you would handle a case where the added node is the first element in the list, that is, the head.

To do that properly, use an if statement to check if the list is empty by calling the isEmpty function with the list. If that's true, then move your list.head = node line into the body of the if statement.

Step 8
======
If the list is not empty, then you want to find its end, add the new element there, and make it point to null. This means you have to loop through the list from the head.

To start that, open up an else clause. Inside it, use let to create a current variable and set it to list.head.

Step 9
======


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
