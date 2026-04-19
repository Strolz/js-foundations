Build a Note taking App
---------------------------------

In this workshop, you will practice working with the aria-live and aria-label attributes by building an accessible note taking app.

Most of the HTML and all of the CSS has been provided for you. The first few steps will involve adding the remaining markup.
---------------------------------

Step 1
======
If you look at the preview, there is text to tell you to click on the card to edit it. But if you try to do that, it will not work. To make that div element editable, you can use the contenteditable attribute like this:

<div contenteditable="true"></div>

In the opening div tag, add the contenteditable attribute and set its value to "true". Now you should be able to click on the element and edit the text.
---------------------------------

Step 2
======
Since a div element is being used for the note, screen readers will not understand its purpose. You can fix that by adding an aria-label attribute. This will help with accessibility and provide meaning for this div element.

In your opening div tag, add an aria-label attribute and set its value to "Note editor".
---------------------------------

Step 3
======
When a user edits a note and either tabs or clicks outside of the card, then a status message should display notifying users that the note was saved successfully.

To begin, create a div element with an id attribute set to "status".
---------------------------------

Step 4
======
Since you are using another div element, you will need to make this more accessible for screen readers.

In a prior lesson, you learned about the aria-live attribute which is used to create a live region on a page. This will allow screen reader users to be automatically notified when the content of the live region changes, without needing to manually focus on or interact with it.

In your #status element, add an aria-live attribute and set its value to "polite".

The polite value will tell screen readers to wait until any current announcement is finished or until the user stops typing before announcing the update.
---------------------------------

Step 5
======
The remaining steps for the workshop will involve adding the code for dynamically showing the notes saved message and logging the current notes to the console.

Start by creating a variable called noteEl and assigning it the result of querying the document for the element with the id of note.

Then create another variable called statusEl and assign it the result of querying the document for the element with the id of status.
---------------------------------

Step 6
======
When a user edits the note, you want to keep track of the edited version.

Use let to create a variable called currentContent and assign it an empty string.

NOTE: In a real world application you would normally save your notes in a database. Or you could even save them in local storage. However, working with databases and local storage is beyond the scope of this workshop and those concepts will be taught later on.
---------------------------------

Step 7
======
Right now, currentContent is initialized with the value of an empty string. But the desired result would be to have currentContent hold the value of the current note text.

When everything in the HTML document has been loaded and parsed, you will be able to access the noteEl safely.

Start by attaching an addEventListener method to the window object. The first argument for the addEventListener method should be the "DOMContentLoaded" event. The second argument should be an arrow function. Inside the body of the arrow function, assign the value of noteEl.textContent to currentContent.
---------------------------------

Step 8
======
When the user clicks on the note, makes edits and then clicks outside of the note, you will need a way to get that newly edited version. You can accomplish this by using the blur event. This event fires when an element loses focus.

Attach an addEventListener method to the noteEl variable. The first argument should be the "blur" event and the second argument should an arrow function. Inside of the body of that arrow function, use const to create a new variable called newContent and assign it the value of noteEl.innerHTML.

innerHTML is used here to help preserve spacing and formatting for the note.
---------------------------------

Step 9
======
Once you get the edited content, that will now be the current content.

Inside of the event listener, assign newContent to currentContent.
---------------------------------

Step 10
=======
It would be nice to see the edited changes in the console.

Add a console.log(currentContent);.

To test out your changes, trying editing the note and then clicking out of the note. You should now see the edited note in the console.
---------------------------------

Step 11
=======
As mentioned earlier, when the user edits the note and then clicks outside of the note, there should be a message to display that the note was saved.

To accomplish this, set the statusEl.textContent to the string "Note saved successfully!".

Now when you test it out, you should see that message display on the screen.
---------------------------------

Step 12
=======
Right now, anytime the user edits a note and clicks outside of the note, the currentContent variable is being updated. But what about situations where the user focuses on the note and decides to leave without making any edits?

Well, in this situation, you can add a condition to handle that use case.

Above your currentContent = newContent; line, add an if statement to check if currentContent is equal to newContent. If so, return.
---------------------------------

Step 13
=======
Things seem to be working except for one small issue. If you edit a note and then leave that note, you should see the "Note saved successfully!" message. But if you try to edit the note again, the message is still displaying.

The desired behavior is for the message to disappear when the user focuses on the element. You can use the focus event for this.

Example Code
element.addEventListener("focus", () => {
  // do something here 
});
Attach an addEventListener to the noteEl variable. The first argument should be the "focus" event and the second argument should be a callback function. Inside of that callback function, set the statusEl.textContent to an empty string. This will reset the live region when the note is focused.

And with that last change, your workshop is complete!
---------------------------------

URL Link to lab : https://www.freecodecamp.org/learn/javascript-v9/workshop-note-taking-app/step-1
