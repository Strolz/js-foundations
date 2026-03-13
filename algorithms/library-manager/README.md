
Library Manager - Full Workshop
---------------------------------

In this workshop, you will build a library manager app that will give you an opportunity to practice working with different higher order functions.
-------------------------------------------------------------------------------------------

To get started, create a variable called library and assign it an empty array.

Inside the library array, create an object with the following properties and values:
-------------------------------------------------------------------------------------------

Property	Value
title	"Your Next Five Moves: Master the Art of Business Strategy"
author	"Patrick Bet-David and Greg Dinkin"
about	"A book on how to plan ahead"
pages	320
-------------------------------------------------------------------------------------------

Now would be a good time to start working on displaying the book information in the console. Over the next few steps, you will learn how to work with the map() method to achieve this goal.

Begin by logging the message "Books in the Library:\n" to the console. The newline character is added here to create a line break between this message and the list of books.
Next, create a function called getBookInformation with one parameter. This parameter will represent the array of books when the function is called. You could name the parameter catalog.

Inside the getBookInformation function, use the map() method on the catalog parameter to return a new array of just book titles. Refer to the example if you need help.
Below your getBookInformation function, add a console.log() and pass in a getBookInformation() function call with library for the argument.

Update your use of the map() method to instead return an array of strings in this format: TITLE by AUTHOR.
You will need to use either template literals or string concatenation with the + operator to achieve this result.
Update your use of the map() method to instead return an array of strings in this format: TITLE by AUTHOR.

You will need to use either template literals or string concatenation with the + operator to achieve this result.

Chain the join() method with a \n for the separator to the map(). Now you should see a string in the console instead of the array of results.
Continue by logging the message "\nList of book summaries:\n" to the console.

Create a getBookSummaries function with a single parameter, accepting an array with book objects. The getBookSummaries function should return an array of strings representing the summary for each book.

Chain the join() method to your existing map() method and pass in "\n" for the separator to the join().

Then, below your getBookSummaries function, add a console.log(). The console statement should call the getBookSummaries function with library for the argument.

Next, log the message "\nList of books by Arvid Kahl:\n" to the console.
Create a getBooksByAuthor function with two parameters - an array with book objects and a string with the author.

The function must return an array that contains the books by a particular author.

Now, it is time to test out your function.

Add a console.log() below your getBooksByAuthor() function.

Inside the console.log(), call the getBooksByAuthor() function with library and "Arvid Kahl" for arguments.

It would be nice to test our your getBooksByAuthor function with another author.

Begin by logging the message "\nList of books by James Clear:\n" to the console.

Below that console.log(), add another console.log(). Inside that console.log(), call the getBooksByAuthor() function with library and "James Clear" for arguments.

Now, log the message "\nTotal number of pages for all library books:\n" to the console.

Create a getTotalPages function with a single parameter, accepting an array with book objects. The function should return the total number of pages in the books from the array passed to the function.

Lastly, add a console.log(getTotalPages(library)) below your getTotalPages function to see the result.

With that, your library manager workshop is complete!
-------------------------------------------------------------------------------------------

URL Link to lab :https://www.freecodecamp.org/learn/javascript-v9/workshop-library-manager/step-1

js file name: library-manager.js
