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

Step 10
------------

Step 11
------------

Step 12
------------

Step 13
------------

Step 14
------------

Step 15
------------

Step 16
------------

Step 17
------------

Step 18
------------

Step 19
------------

Step 20
------------

Step 21
------------

Step 22
------------

Step 23
------------

Step 24
------------

Step 25
------------

Step 26
------------

Step 27
------------

Step 28
------------

Step 29
------------
