
Build an Emoji Reactor
---------------------------------

In this workshop you will create an Emoji Reactor App. The HTML boilerplate and all of the CSS has been provided for you.
---------------------------------

Step 1
======
Start by creating a main element.

Inside the main element create an h1 element with a class of title and a text of How are you feeling today?.
---------------------------------

Step 2
======
Below the h1 element, add a p element with class description.

Inside the p element write the text Click on the buttons below to rate your emotions.
---------------------------------

Step 3
======
Below the p element, create a div element with the class btn-container.

Inside the div element, create a button element.

This button should have an id of happy-btn, a class of emoji-btn and an aria-label of Happy face emoji.
---------------------------------

Step 4
======
Inside the button element, create a span element that contains 😊

Give to the span element a role attribute with a value of img and an aria-hidden attribute with a value of true.

Then, create a second span element with a class of count containing the text 0/10
---------------------------------

Step 5
======
Now it's time to link the JavaScript file.

Add a script element right before the closing tag of the body element with the right attribute and value to link the script.js file.
---------------------------------

Step 6
======
Now, in the JavaScript file, create an happyBtn variable.

Use querySelector to store a reference to the #happy-btn element in the happyBtn variable.
---------------------------------

Step 7
======
Now you need to add an event listener on the happyBtn element.

Write the event listener and its callback so that when the button is clicked the app will log to the console Button clicked!.
---------------------------------

Step 8
======
Now replace the content of the event listener callback.

Use querySelector to find the .count element within the button.
Then log the text content of the .count element when the button is clicked.
---------------------------------

Step 9
======
Now, you need to get the first number in the 0/10 text, in a way that will work even for 5/10 or 10/10.

Parse the text content of the .count element to extract the current number.

Convert the count from a string to a number.

Log the current count in this format: console.log("Current count:", currCount).

Hint: remember you can use the split method to divide a string into an array of substrings.
---------------------------------

Step 10
======
Now it's time to implement the actual counting functionality.

Instead of just logging the current count, you need to increment it and update the display.

Remove the console.log.

Check if the current first number inside the .count is already 10 (the text is 10/10), and if so, do nothing.

If the number is less than 10, increment the current count by 1 and update the text of the .count element. For example, if the current count is 2, it should be incremented to 3 and the text for the .count element should be 3/10.
---------------------------------

Step 11
======
You can make the code more reusable.

Create a function called updateCount that takes a button element as a parameter.

This function should contain all the logic for updating a button's count: finding the count element, parsing the current count, checking if it's at the maximum, incrementing, and updating the display.

Then update your event listener callback to call updateCount(happyBtn) instead of having the logic inline.
---------------------------------

Step 12
======
It's time to start working on the other buttons. The remaining button elements have been added for you in the HTML file.

For each new button (#confused-btn, #sad-btn and #loving-btn), select it using querySelector with its ID, then add a click event listener that calls updateCount with that button.

Use the variable names confusedBtn, sadBtn, lovingBtn.
---------------------------------

Step 13
======
You've probably noticed that your code is getting quite repetitive! There's a better way to handle multiple similar elements.

Instead of selecting each button individually, use querySelectorAll(".emoji-btn") to select all buttons with the class emoji-btn at once. Store the result in a variable called btns.
---------------------------------

Step 14
======
Now make some space, remove all the button variables and the eventListener you have created for each.
---------------------------------

Step 15
======
In previous lessons you learned that querySelectorAll returns a NodeList, which is an array-like structure, and one of the methods that a NodeList has is forEach(), and it works the same way as the forEach that exists on arrays.

Iterate over btns with a forEach() that adds the same event listener to each button.

Use a callback function that takes a btn parameter, and inside the callback, add a click event listener that calls updateCount(btn).

With this you have finished the workshop.
---------------------------------

URL Link to lab : https://www.freecodecamp.org/learn/javascript-v9/workshop-emoji-reactor/step-1

js file name: script.js
