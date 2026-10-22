Step 1
------------

In this workshop, you will learn how to work with the Fetch API to load data from an external source and display it on a page filled with freeCodeCamp authors.

All of the HTML and CSS for this workshop has been provided for you. You can take a look at the two files to familiarize yourself with them.

When you are ready, start by accessing the #author-container and #load-more-btn elements. Remember you can use the getElementById or querySelector methods for this.

Then assign these elements to variables called authorContainer and loadMoreBtn, respectively.

Step 2
------------

The Fetch API is a built-in JavaScript interface to make network requests to a server. It has a fetch() method you can use to make GET, POST, PUT, or PATCH requests. In this project, you'll make a GET request to a URL for a JSON file with information about authors on freeCodeCamp News.

Here is how you can make a GET request with the fetch() method:

Example Code
fetch("url-goes-here")
Make a GET request to this URL: "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json". Don't terminate your code with a semicolon yet.

Step 3
------------

The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful.

If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.

Here's how you can chain .then() to the fetch() method:

Example Code
fetch("sample-url-goes-here")
  .then((res) => res)

Chain the .then() method to your fetch call. Inside the .then() method, add a callback function with res as a parameter, then log the res to the console so you can see the Response object. Open your browser console and expand the Response object to see what it contains.

Again, don't terminate the code with a semicolon yet.

Step 4
------------

The data you get from a GET request is not usable at first. To make the data usable, you can use the .json() method on the Response object to parse it into JSON. If you expand the Prototype of the Response object in the browser console, you will see the .json() method there.

Remove console.log(res) and implicitly return res.json() instead.

Step 5
------------

In order to start working with the data, you will need to use another .then() method.

Chain another .then() to the existing .then() method. This time, pass in data as the parameter for the callback function. For the callback, use curly braces because you will have more than one expression. Within your callback function, log data to the console to see what it looks like.

Step 6
------------

The .catch() method is another asynchronous JavaScript method you can use to handle errors. This is useful in case the Promise gets rejected.

Chain .catch() to the last .then(). Pass in a callback function with err as the parameter. Inside the callback, use console.error() to log possible errors to the console with the text There was an error: ${err}. Since you're using err in the text, don't forget to use a template literal string with backticks (``) instead of single or double quotes.

Note: catch is the last call chained on to fetch, so you can terminate your code with a semicolon.

Step 7
------------

Now that you have the data you want, you can use it to populate the UI.

But the data you are fetching will have a total of 26 authors. Instead of displaying all 26 authors at once, you should display 8 authors at a time.

Start by using the let keyword to create two variables named startingIndex and endingIndex, and assign them the numbers 0 and 8, respectively. You will need to use let here because you will be reassigning these values later on.

Then, create an authorDataArr variable and assign it an empty array.

Declare and initialize each variable on a separate line.

Step 8
------------

Now, it is time to create the function that will be responsible for displaying the authors on the page.

Start by creating a function called displayAuthors that takes an authors parameter. Your function should then loop through the authors array and add a card for each author to the authorContainer element.

The card should have the following structure:

Example Code
<div id="${index}" class="user-card">
  <h2 class="author-name">${author}</h2>
</div>
Tips:

You can use any type of loop to iterate over the authors array. Ex. for, forEach, map, etc.
You should use the innerHTML property to add the card to the authorContainer inside the loop. You will also need to use template literal syntax to add the markup.

Step 9
------------

To see the authors' names on the page, you need to call the displayAuthors function inside the second .then() method. But before that, you need to assign the author data to the empty authorDataArr array.

First, remove your console.log() statement. Then, assign data to the authorDataArr variable.

Step 10
------------

Now authorDataArr is the same as the data you logged to the console a while ago. Log authorDataArr to the console to confirm this.

Inside your console.log() statement, add the text "Author Data Array:" as the first argument and authorDataArr as the second argument. Use a comma to separate the text from authorDataArr.

Step 11
------------

Now it's time to call the displayAuthors function. But again, you don't want to populate the page with all the authors at once. Instead, you can extract a portion of the authors with the startingIndex and endingIndex variables. The best method to do this is the .slice() array method.

First, remove the console log statement showing authorDataArr. Then, call the displayAuthors function with the authorDataArr array and .slice(). Use the startingIndex variable for the starting point and the endingIndex variable for the ending point.

Step 12
------------

Inside the displayAuthors function, the data of each author has been destructured for you.

Now create an image tag and give it a class attribute of "user-img". Use string interpolation to set the src attribute to the image property. Set the alt attribute to author followed by the text "avatar". Make sure there is a space between the author variable and the word "avatar", for example, "Quincy Larson avatar".

Step 13
------------

The next thing you'll show are biographical details about the author. You can do this by using the bio property.
Add a paragraph element with a class attribute of "bio", then interpolate bio inside the paragraph element.

Step 14
------------

Next, add a link to the author's page on freeCodeCamp News.

Add an anchor element with a class attribute of "author-link", interpolate url as the value for the href attribute, and set target to "_blank". For the text of the anchor element, interpolate author followed by the text "'s author page". For example, "Quincy Larson's author page".

Step 15
------------

Now you have everything you want to include in the UI. The next step is to make the Load More Authors button fetch more authors whenever it's clicked. You can do this by adding a click event to the button and carefully incrementing the startingIndex and endingIndex variables.

Use const to create a fetchMoreAuthors function with the arrow function syntax. Don't put anything in it yet. Make sure you use curly braces because you'll have more than one expression inside the function.

Step 16
------------

Inside the fetchMoreAuthors function, set the startingIndex and endingIndex variables to +=8 each.

Step 17
------------

Now call the displayAuthors function with a portion of the author data just like you did before.

If you click the Load More Authors button after calling the function, it won't work. That's because you still have to add the click event listener to the button. You'll do that next.

Step 18
------------

Remember that in step 1 you selected the Load More Authors button and assigned it to loadMoreBtn.

Use addEventListener to add a "click" event listener to loadMoreBtn. Also, pass in a reference to the fetchMoreAuthors function to run whenever the button is clicked.

After that, when you click the button you should see 8 more authors.

Step 19
------------

Your fCC Authors Page is now complete. But you could improve on a few things.

First, if you click the Load More Authors button a couple of times, you'll see that it won't add more authors to the page. That's because you've reached the end of the authors list. For a better user experience, you should make it clear when there's no more data to display by disabling the button and changing its text. An if statement is the perfect tool for this.

Inside the fetchMoreAuthors function, write an if statement and set the condition to authorDataArr.length <= endingIndex – meaning there's no more data to load.

Step 20
------------

If this condition is met, disable the button by setting its disabled property to true. Also, set the textContent of the button to "No more data to load".

Step 21
------------

Next, there's not a lot of separation between each author's name and image, and the rest of the details on the card. A divider will give the author cards a clear visual hierarchy.

Add a div element above the author's bio and give it a class attribute of "purple-divider".

Step 22
------------

Some of the author bios are much longer than others. To give the cards a uniform look, you can extract the first 50 characters of each one and replace the rest with an ellipsis "...". Otherwise, you can show the entire bio.

Within the paragraph element, replace bio with a ternary operator. For the condition, check if the length of bio is greater than 50. If it is, use the .slice() method to extract the first 50 characters of bio and add an ellipsis at the end. Otherwise, show the full bio.

Step 23
------------

Finally, what if there's an error and the author data fails to load? Then you need to show an error in the UI. That's exactly what the .catch() method is for – handling errors.

Inside the .catch(), remove the console.error() and set the innerHTML of the authorContainer to a p element with a class attribute of "error-msg" and text "There was an error loading the authors".

Step 24
------------

One more thing. If you keep clicking the Load More Authors button until there's no more data to load and the text changes to "No more data to load", the cursor value is still pointer. Why not change the cursor value to "not-allowed" instead?

Access the style property of the Load More Authors button and set cursor to "not-allowed".

Step 25
------------

Now that your fCC Authors Page is fully functional, let's refactor it to improve its readability by using async and await instead of the promise chaining method then.

Recall that in order to use the await operator to wait for a function that returns a Promise, you need to wrap the function call in an async function (if it is not in the main body of a module).

Since your fetch call is not defined in either an asynchronous function or the main body of a module, you cannot use await before fixing that.

Wrap the fetch statement and the entire sequence of chained then and catch methods as a whole in a new asynchronous arrow function called initialFetch which takes no arguments.

An example of an async function declaration is:

Example Code
const functionName = async () => {}

Step 26
------------

When calling an asynchronous function, you can either await the function's return or you can let it run asynchronously. If you had any code that depends on the initialFetch data being returned, you would want to await the function call, but since you don't have any such dependency, you can go ahead and just call the function asynchronously.

Add a function call to initialFetch in the indicated space in the editor.

Step 27
------------

At this point, the behavior of the app should not have changed. The code still fetches a file from the CDN and then processes the retrieved data into JSON. Once that's done, it saves that data into the authorDataArr variable and then calls displayAuthors.

Modify the call to fetch so that it uses the await operator. Save the result in a new const variable called res. The new variable should be locally defined within initialFetch.

Given this code:

Example Code
  fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
You would write:

Example Code
  await fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
You may see a SyntaxError. This can be ignored for now.

Step 28
------------

Next, change the line of code that calls the json method to use the await operator instead.

For example, given this code:

Example Code
  .then((res) => res.json());
You would write:

Example Code
   await res.json();
Then, store the result in your authorDataArr, and move the line of code that calls displayAuthors so it is immediately following your new await statement. Finally, delete the remaining then statement and its code block as it no longer serves any purpose.

You will notice a SyntaxError in the console at this point. The next step will deal with refactoring the catch method to resolve this error.

Step 29
------------

Finally, you need to deal with the catch method. First, nest the fetch statement, the json statement, and the displayAuthors call into a try block within initialFetch. Then, modify the chained catch method to be a catch block instead as per the example shown below.

Example Code
try {
  // code that can cause or throw an error goes in this block
} catch (error) {
  // error handling code here
}
If you've done this correctly, the try block will contain three lines of code in it and the catch block will contain just one line of code. Also, the SyntaxError will be resolved and the app should function normally.

Give yourself a pat on the back! You have learned how to make your asynchronous code more readable using the async and await operators! Now your author page is complete.
