Build a shopping cart
---------------------------------

You will be building a shopping cart application. The HTML and CSS are already provided, but you will need to build the JavaScript to make the page interactive.
---------------------------------

Step 1
======
To start, you will need to get some of your elements from the DOM. Start by using document.getElementById() to get the #cart-container, #products-container, and #dessert-card-container elements. Store them in variables named cartContainer, productsContainer, and dessertCards, respectively.

Since these will not change, remember to use const to declare them.
---------------------------------

Step 2
======
Now you need to get your two buttons. Continuing the pattern, get the #cart-btn and #clear-cart-btn elements. Store them in variables named cartBtn and clearCartBtn, respectively.
---------------------------------

Step 3
======
Next is to get your totals. Get the #total-items, #subtotal, #taxes, and #total elements. Store them in variables named totalNumberOfItems, cartSubTotal, cartTaxes, and cartTotal, respectively.
---------------------------------

Step 4
======
The last element to get is the #show-hide-cart element. Store it in a variable named showHideCartSpan.

Then, use let to declare a variable named isCartShowing and set it to false.
---------------------------------

Step 5
======
A shopping cart does not serve much purpose without products. Declare a products variable and set it to an empty array. Using an array will allow you to store multiple products.
---------------------------------

Step 6
======
Before you start adding products, create a class named Dessert. Give it a constructor that takes four parameters in this order: id, name, price, and category. Inside the constructor, assign each parameter to a property of the same name on this.
---------------------------------

Step 7
======
Add a single value to your products array by calling new Dessert() with these arguments, in order: the number 1, the string "Vanilla Cupcakes (6 Pack)", the number 12.99, and the string "Cupcake".
---------------------------------

Step 8
======
Add the remaining products from this table (in order) to your products array using new Dessert(...). Increment the id for each product, counting up.

        name	price	category
French Macaron	3.99	Macaron
Pumpkin Cupcake	3.99	Cupcake
Chocolate Cupcake	5.99	Cupcake
Chocolate Pretzels (4 Pack)	10.99	Pretzel
Strawberry Ice Cream	2.99	Ice Cream
Chocolate Macarons (4 Pack)	9.99	Macaron
Strawberry Pretzel	4.99	Pretzel
Butter Pecan Ice Cream	2.99	Ice Cream
Rocky Road Ice Cream	2.99	Ice Cream
Vanilla Macarons (5 Pack)	11.99	Macaron
Lemon Cupcakes (4 Pack)	12.99	Cupcake
---------------------------------

Step 9
======
Now that you have your list of products, you can use JavaScript to insert them into the HTML. With this approach, if you decide to add more products, the HTML will automatically reflect that.

Start by calling the .forEach method of your products array. Use arrow syntax to create an empty callback function.
---------------------------------

Step 10
=======
For the first parameter of your callback function, destructure the name, id, price, and category properties from the Dessert instance passed in.
---------------------------------

Step 11
=======
You need to display the available products in your HTML. Start by using the addition assignment operator to add an empty template literal string to the innerHTML property of the dessertCards variable
---------------------------------

Step 12
=======
In your template literal, create a div element with a class of dessert-card. In that div, create an h2 element and give it the text of the name variable.
---------------------------------

Step 13
=======
After your h2 element, create two p elements. Give the first a class of dessert-price, and set the text to a dollar sign "$" followed by the value of the price variable. Give the second a class of product-category, and the text "Category: " followed by the value of the category variable.
---------------------------------

Step 14
=======
Finally, after your p elements, create a button element. Give it an id set to the value of the id variable, a class of btn add-to-cart-btn, and use "Add to cart" for the text.
---------------------------------

Step 15
=======
Now that you have created a Dessert class, create a ShoppingCart class.
---------------------------------

Step 16
=======
Add an empty constructor method to the ShoppingCart class.
---------------------------------

Step 17
=======
In your constructor, use the this keyword to set the items property to an empty array. Also, set the total property to 0, and the taxRate property to 8.25.
---------------------------------

Step 18
=======
The first parameter, id, is the id of the product the user has added to their cart. The second parameter, products, is an array of Dessert instances. By using a parameter instead of directly referencing your existing products array, this method will be more flexible if you wanted to add additional product lists in the future.
---------------------------------

Step 19
=======
You need to find the product that the user is adding to the cart. Remember that arrays have a .find() method. In your addItem function, declare a product variable, and assign it the value of calling the .find() method on the products array.

For the callback to .find(), pass a function that takes a single parameter item, and returns whether the id property of item is strictly equal to the id parameter passed to addItem.
---------------------------------

Step 20
=======
Use const and destructuring to extract name and price variables from product.
---------------------------------

Step 21
=======
Now you need to push the product into the cart's items array. Remember to use the this keyword.
---------------------------------

Step 22
=======
Declare a totalCountPerProduct variable, and assign it an empty object.
---------------------------------

Step 23
=======
Use the .forEach() method to loop through the items array. Pass an empty callback function that takes a single parameter dessert.
---------------------------------

Step 24
=======

---------------------------------

Step 25
=======

---------------------------------

Step 26
=======

---------------------------------

Step 27
=======

---------------------------------

Step 28
=======

---------------------------------

Step 29
=======

---------------------------------

Step 30
=======

---------------------------------

Step 31
=======

---------------------------------

Step 32
=======

---------------------------------

Step 33
=======

---------------------------------

Step 34
=======

---------------------------------

Step 35
=======

---------------------------------

Step 36
=======

---------------------------------

Step 37
=======

---------------------------------

Step 38
=======

---------------------------------

Step 39
=======

---------------------------------

Step 40
=======

---------------------------------

Step 41
=======

---------------------------------

Step 42
=======

---------------------------------

Step 43
=======

---------------------------------

Step 44
=======

---------------------------------

Step 45
=======

---------------------------------

Step 46
=======

---------------------------------

Step 47
=======

---------------------------------

Step 48
=======

---------------------------------

Step 49
=======

---------------------------------

Step 50
=======

---------------------------------

Step 51
=======

---------------------------------

Step 52
=======

---------------------------------

Step 53
=======

---------------------------------

Step 54
=======

---------------------------------

Step 55
=======

---------------------------------

Step 56
=======

---------------------------------

Step 57
=======

---------------------------------

Step 58
=======

---------------------------------

Step 59
=======

---------------------------------

Step 60
=======

---------------------------------

Step 61
=======

---------------------------------
