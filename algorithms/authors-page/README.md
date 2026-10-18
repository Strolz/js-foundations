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

Step 5
------------

Step 6
------------

Step 7
------------

Step 8
------------

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
