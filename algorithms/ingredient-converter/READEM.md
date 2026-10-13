Step 1
------------

In this workshop, you will apply the functional programming concepts you have learned in previous lessons to build an ingredient converter app.

The HTML and CSS have already been provided for you.

Start by declaring an empty conversionTable object.

Step 2
------------

Give your conversionTable a cup property, and assign it an object with a gram property set to 240, an ounce property set to 8.0, and a teaspoon property set to 48.

Step 3
------------

Give your conversionTable a gram property, and assign it an object with a cup property set to 1/240, an ounce property set to 0.0353, and a teaspoon property set to 0.2.

Step 4
------------

Give your conversionTable an ounce property, and assign it an object with a cup property set to 0.125, a gram property set to 28.35, and a teaspoon property set to 6.

Step 5
------------

Finally, give your conversionTable a teaspoon object with a cup property set to 1/48, a gram property set to 5, and an ounce property set to 0.167.

Step 6
------------

Now you'll need to create your first curried function. Remember that a curried function is a function that returns another function.

Start by declaring a convertQuantity function. It should have a single fromUnit parameter, and should be empty.

Step 7
------------

Example Code

const tikkaMasala = (spice) => (protein) => (vegetable) => {
  return "Yum!";
}

Now, following the syntax above, update your convertQuantity function to return a second function. This inner function should accept a toUnit argument, and should be empty.

Step 8
------------

Example Code

const tikkaMasala = (spice) => (protein) => (vegetable) => {
  return "Yum!";
}

Finally, update your inner function to return a third function. This third function should also accept a single argument named quantity, and have an empty body.

Step 9
------------

Your innermost curried function will hold the logic for converting the value.

First, use the fromUnit argument to access your conversionTable object, then use the toUnit argument to access the nested object.

Return the result of multiplying that conversion value with the quantity value.

Step 10
------------

Time to see your curried function in action. Here's how you might call our example function:

Example Code

const dinner = tikkaMasala("curry powder")("tofu")("onion");
Declare a gramsResult variable, and assign it the result of using your curried function to convert 2 units of the measure cup to gram.

Log that value to the console.

Step 11
------------

You'll need to adjust for the number of servings being calculated. This is a great chance to use another curried function.

Declare an adjustForServings function, which accepts a baseQuantity argument. It should return a second function which accepts a newServings argument.

The inner function should return the result of multiplying the baseQuantity and newServings.

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
