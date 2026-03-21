
Step 1
In this workshop, you will create a recipe tracker using JavaScript objects.

Start by creating an empty array named recipes. This is the array you'll push the recipe objects into later.
---------------------------------

Step 2
Create an object named recipe1. Inside the recipe1 object, create a name property with the value "Spaghetti Carbonara".

Also inside the recipe1 object, create an ingredients property with an array as the value. The array should have spaghetti, Parmesan cheese, pancetta, and black pepper inside it.
---------------------------------

Step 3
Add the following properties to the recipe1 object:

Key	Value
cookingTime	22
totalIngredients	null
difficultyLevel	""
The properties with null and empty string values will be updated later after you calculate them.
---------------------------------

Step 4
Create a recipe2 object with the following properties and values:

Key	Value
name	Chicken Curry
ingredients	["chicken breast", "coconut milk", "curry powder", "onion", "garlic"]
cookingTime	42
totalIngredients	null
difficultyLevel	""
---------------------------------

Step 5
Create a recipe3 object with the following properties and values:

Key	Value
name	Vegetable Stir Fry
ingredients	["broccoli", "carrot", "bell pepper"]
cookingTime	15
totalIngredients	null
difficultyLevel	""
---------------------------------

Step 6
Access the name property of recipe1, and assign it to the variable recipe1Name.

Next, access the cookingTime property of recipe2 and assign it to the variable recipe2CookingTime.

Finally, access the ingredients property of recipe3 and assign it to the variable recipe3Ingredients.
---------------------------------

Step 7
You should now push the three objects into the recipes array. To do this, you can use the push() method.

Use the push() method to push all the recipe objects into the recipes array. Make sure to push recipe1, recipe2, and recipe3 in that order.
---------------------------------

Step 8
Create a getTotalIngredients function that takes a single argument, representing an array with ingredients, and returns the number of ingredients from the array passed to the function.
---------------------------------

Step 9
Create a getDifficultyLevel function that takes a number indicating the cooking time as a parameter.

If the cooking time is less than or equal to 30, the function should return "easy". If it is less than or equal to 60, the function should return "medium". Otherwise, the function should return "hard".
---------------------------------

Step 10
It's time to test each of the functions. You can use any of the recipes for this, but this tutorial will start with recipe1.

Create two new variables: recipe1TotalIngredients and recipe1DifficultyLevel. Assign them the values by calling the corresponding function for each variable and passing in the appropriate recipe1 property.

Finally, log each variable to the console to see the results.
---------------------------------

Step 11
You can now fill in each item of the recipes array with values for the totalIngredients and difficultyLevel properties.

For now, access the totalIngredients and difficultyLevel of recipe1 and set them to the appropriate results of function calls and arguments.
---------------------------------

Step 12
Repeat the process for the totalIngredients and difficultyLevel properties of recipe2 and recipe3.
---------------------------------

Step 13
Now, log the recipes array to the console to see all its items filled with the updated values.

With that, your recipes tracker project is complete.
---------------------------------

URL Link to lab : https://www.freecodecamp.org/learn/javascript-v9/workshop-recipe-tracker/step-1

js file name: recipe-function.js
