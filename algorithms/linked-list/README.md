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
Now, create a while loop with current.next !== null as the condition. This means the loop should keep running as long as the current node has another node after it.

Step 10
=======
Inside the while loop, update current to current.next so the loop moves forward through the list one node at a time, and stops when it reaches the node with a next property of null, that is, the end of the list.

Step 11
=======
After finding the last node, you need to attach the new node to it. To do that, set current.next to node under the while loop but still within the else clause.

Step 12
=======
That's all you need to add an element to the list. To see what things look like, add two more numbers of your choice to the myList list.

Step 13
=======
Now, you will work on a function to remove a node from the list.

Create a remove function with list and element parameters.

Step 14
=======
Inside the remove function, use let to create a previous variable set to null, and let again to create a current variable set to list.head. These are the variables you will use in the loop that will traverse the list.

current tracks the node currently being checked in the list, starting at the head and moving forward one node at a time. previous, on the other hand, keeps track of the node right before the current one.

This is important when removing a node because you must update the next value of the previous node so it points to the node after the one being removed, in order to keep the list connected.

Step 15
=======
Now, create a while loop that checks if current is not strictly null and current.element is not strictly equal to element.

This means the loop should continue traversing the list until the end of the list is reached or the element to remove is found.

Step 16
=======
Inside the loop, reassign previous to current, and current to current.next. This means current checks the next node, and previous always stays one node behind.

Step 17
=======
Create an if statement that checks if current is strictly equal to null. Inside the if statement, use return to exit the function.

Step 18
=======
If previous is not null, this means the element to be removed is not at the head but somewhere within the list, so the current node should be bypassed by linking the previous node directly to the next node.

To do that, create another if statement that checks if previous is strictly not null. If that's the case, set previous.next to current.next.

Step 19
=======


Step 20
=======


Step 21
=======
