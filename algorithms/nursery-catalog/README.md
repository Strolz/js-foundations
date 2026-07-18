Build a Plant Nursery Catalog
---------------------------------

In this workshop, you'll build a plant nursery catalog while practicing JavaScript's Map and Set objects.

To represent each plant in your catalog, you'll use objects, each with three properties:

commonName, the common name of the plant
scientificName, the scientific name (or latin name) of the plant
cultivar, the variety of the plant
---------------------------------

Step 1
======
Start by creating an object with the three properties above for the Spanish lavender (scientific name Lavandula stoechas) of a cultivar called Ballerina and assign it to a variable named ballerina.
---------------------------------

Step 2
======
Now create another object, with the same three properties, to represent another cultivar of spanish lavender called Pretty Polly, and assign it to a variable named prettyPolly.
---------------------------------

Step 3
======
Declare a catalog variable and assign it a Map object.
---------------------------------

Step 4
======
Set the "ballerina" key to the value of your ballerina object in your catalog map. Then, log your catalog to the console.

Note that to see your map object properly you'll have to open the browser console.
---------------------------------

Step 5
======
The size property of a Map object returns the number of elements in the map. Log the size of your catalog to the console.
---------------------------------

Step 6
======
Unlike regular objects, for which keys must always be strings, map objects allow you to use any datatype as keys. In your catalog, you're going to use object-object key-value pairs, associating each of your plant object with an object containing the number of available pots for different sizes.

Modify your set call to use your ballerina object as key. For the value, use an object containing three properties, small, medium, and large, each with the value of a positive integer.
---------------------------------

Step 7
======
Add another key-value pair to your catalog. Use your prettyPolly variable as the key and make the value an object with small, medium, and large properties whose values are integers again.
---------------------------------

Step 8
======
Keep adding the remaining plants to your catalog as you did in the previous steps.
---------------------------------

Step 9
======
Now that you added all your plants to the catalog, remove your console.log(catalog.size) call.
---------------------------------

Step 10
=======
When you need to retrieve an element from a map, you can use the get method. It takes a key as its argument, and returns the associated value.

Use the get method to retrieve the value of the ballerina key from your catalog assign it to a variable named getBallerina. Then, log your new variable to the console.
---------------------------------

Step 11
=======
When the value associated with a key is an object, the get method will return a reference to that object. You can use that reference to modify the object inside the map.

To test it, set the small property of getBallerina to an integer different from 20. Then, look at the browser console to check that the value has changed in your catalog.
---------------------------------

Step 12
=======
Next, remove the getBallerina declaration and each reference to it from your code.
---------------------------------

Step 13
=======
Create a function named sellPlants that takes three arguments: a plant object, the pot size and the number of pots to sell, in this order.

When the specified number of pots is greater than the available pots, make your function return Not enough <pot-size> size pots for <item-name>. Only <pot-number> left.. Replace <pot-size> with the pot size, <pot-number> with the remaining pots for that size, and <item-name> with the scientific name of the plant followed by a space and the name of the cultivar wrapped between single quotes.

To test that everything works, log the result of calling your sellPlants function with the ballerina object, "small", and 25 to the console.
---------------------------------

Step 14
=======
When there are enough pots to sell you need to update the catalog by subtracting the pots of the specified size. In that case, return Catalog successfully updated.

Modify your function to achieve that. Then, update your function call by passing 10 as third argument instead of 25.
---------------------------------

Step 15
=======
To remove an element from a map object, you can use the delete method, which takes a key as argument and removes the entry associated with that key. It returns a boolean indicating if the removal has been successful.

Create a function named removePlant that takes a plant object as its argument and removes it from the catalog. Make it return either true or false depending on if the specified plant has been deleted from the catalog.

After that, log the result of calling your new function with the string "ballerina" as its argument.
---------------------------------

Step 16
=======

---------------------------------

Step 17
=======

---------------------------------

Step 18
=======

---------------------------------

Step 19
=======

---------------------------------

Step 20
=======

---------------------------------

Step 21
=======

---------------------------------

Step 22
=======

---------------------------------

Step 23
=======

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
