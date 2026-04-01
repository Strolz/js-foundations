
Build a Story telling app
---------------------------------

In this workshop, you will build a storytelling app that allows users to select a type of story and display a short story of that type.
---------------------------------

Step 1
======
Begin by creating an h1 element and give it a text Want to hear a short story?.
---------------------------------

Step 2
======
Create a main element with a class of story-container. Inside the .story-container element, create a div with a class of btn-container.
---------------------------------

Step 3
======
Inside the .btn-container, create three buttons for each type of story. Give each button a class of btn and an id of scary-btn, funny-btn, and adventure-btn. The text for each button should be Scary Story, Funny Story, and Adventure Story respectively.
---------------------------------

Step 4
======
Below the .btn-container element, you should have a p element with the id of result. This is where the story will be displayed.
---------------------------------

Step 5
======
Next, you will start working on the JavaScript. For that, begin by linking the script.js file to your HTML.
---------------------------------

Step 6
======
In your JavaScript file, select the .story-container element and store it in a variable called storyContainer.
---------------------------------

Step 7
======
Select the #scary-btn, #funny-btn, and #adventure-btn buttons and store them in variables called scaryStoryBtn, funnyStoryBtn, and adventureStoryBtn.
---------------------------------

Step 8
======
Select the #result paragraph and store it in a variable called resultParagraph. You will use this variable to display the selected story.
---------------------------------

Step 9
======
To hold the different types of stories, create an object called storyObj. The object should have three properties: scary, funny, and adventure. Each property value should be an object with a story and a borderColor property.
---------------------------------

Step 10
=======
To hold the different types of stories, create an object called storyObj. The object should have three properties: scary, funny, and adventure. Each property value should be an object with a story and a borderColor property.
---------------------------------

Step 11
=======
Add an event listener for the click event to scaryStoryBtn and pass it the displayStory function. Then, click your button and see the output in the console.
---------------------------------

Step 12
=======
Now, you know that the button works. Remove the console.log statement from the displayStory function.
---------------------------------

Step 13
=======
To differentiate between the different types of stories, you will need to pass the genre of the selected story to the displayStory function.

Add a parameter called genre to the displayStory function.
---------------------------------

Step 14
=======
Inside the displayStory function, check if the storyObj object has a property that matches the genre parameter and set the #result paragraph's text content to the story of the selected genre.

Also, set the storyContainer's border color to the borderColor property of the selected genre.

Test this by calling the displayStory function with the scary genre. The border color should be #ee4b2b and the story should be "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.".
---------------------------------

Step 15
=======
Now that the displayStory function is working correctly, it is time to add the functionality to the buttons.
---------------------------------

Step 16
=======
Modify the scaryStoryBtn event listener to call the displayStory function with the argument "scary". Also, add a click event listener to the funnyStoryBtn, and adventureStoryBtn buttons that call the displayStory function with the arguments "funny" and "adventure" respectively.

With this, you have successfully completed the workshop!!
---------------------------------
