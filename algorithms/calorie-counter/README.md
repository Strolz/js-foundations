Build Calorie Counter
---------------------------------

In this workshop, you'll learn to create a calorie counter form that enables users to input their daily calorie budget and the calorie counts of various meals. The form will then calculate and display whether the user is in a calorie deficit or surplus.
---------------------------------

Step 1
======
You have been provided with boilerplate CSS and HTML. However, you need to build your calorie counter form.

Feel free to explore the HTML and CSS, then add a form element and give it an id set to calorie-counter.
---------------------------------

Step 2
======
In your form, users will be able to input a number which represents their daily calorie budget.

Create a label element, give it a for attribute set to budget and the text Budget, then create an input element with the id set to budget.
---------------------------------

Step 3
======
Your input element needs some additional attributes. Give it a type set to number to only allow numeric inputs, a min attribute set to 0 to only allow positive numbers, and a placeholder set to Daily calorie budget.

Finally, mark the input element as required.
---------------------------------

Step 4
======
In your form, users should have the capability to add various meal types along with their calorie counts.
Create a fieldset element with the id set to breakfast.

Within that element, create a legend with the text Breakfast, and an empty div with the class set to input-container.
---------------------------------

Step 5
======
Next, create a fieldset element with the id set to lunch.

Within that element, create a legend element with the text Lunch, and an empty div with the class set to input-container.
---------------------------------

Step 6
======
Continuing the pattern, create a fieldset for dinner with the same nested elements.
---------------------------------

Step 7
======
You need two more of these fieldset code blocks – one for snacks and one for exercise.
---------------------------------

Step 8
======
When users want to select a meal type to input their calorie counts, they should be presented with a dropdown menu and a button to add the meal type.

Start by creating a div element and assign it a class attribute with the value controls. Then, nest a span element inside this div.
---------------------------------

Step 9
======
In your span element, create a label element for an entry-dropdown and give it the text Add food or exercise:. Then create a select element with the id set to entry-dropdown and a name set to options. Below that, add a button element with the id set to add-entry and the text Add Entry.

Give your button element a type attribute set to button to prevent automatic form submission.
---------------------------------

Step 10
=======
Your select menu needs options for each of the food and exercise fieldset elements you created in the previous steps. Use the option element to create a new option for each fieldset. The value attribute of each option should be the id of the fieldset, and the text of each option should be the text of the legend.

Set the Breakfast option as the selected option.
---------------------------------

Step 11
=======
Create another div element. Within it, nest a button to submit the form. This button should have the text Calculate Remaining Calories.

Then add a button with the id set to clear to clear the form (don't forget to give it a type attribute that prevents it from submitting the form). This button needs the text Clear.
---------------------------------

Step 12
=======
Your form needs somewhere to display the results. Add an empty div element and give it an id of output and the class values of output and hide.
---------------------------------

Step 13
=======
Finally, you need to link your JavaScript file to your HTML. Create a script element to do so.
---------------------------------

Step 14
=======
It is time to start writing the script that makes your form work.

Begin by getting the form element (using the id) and storing it in a variable called calorieCounter.
---------------------------------

Step 15
=======
Get your #budget element and assign it to budgetNumberInput, and your #entry-dropdown element and assign it to entryDropdown.
---------------------------------

Step 16
=======
Step 16
Following the same pattern, assign your #add-entry element to addEntryButton, your #clear element to clearButton, and your #output element to output.
---------------------------------

Step 17
=======
Declare a variable named isError using let and initialize it with false, allowing for its reassignment later.

Later on in the project, you will update the value of isError if the user provides an invalid input.
---------------------------------

Step 18
=======
When the user inputs their daily calorie budget, the input field will only accept numerical values. However, if a number is entered with a + or - sign, you'll need to remove those characters.

Start by declaring a cleanInputString function that takes a str parameter.

NOTE: Values from an HTML input field are received as strings in JavaScript. You'll need to convert these strings into numbers before performing any calculations. Converting string values into numbers will be covered in a future step.
---------------------------------

Step 19
=======
Declare a regex variable and assign it the value from the example above. In future steps, you will update this regex pattern to match specific characters needed for the calorie counter.
---------------------------------

Step 20
=======
The current pattern will match the exact text "hello", which is not the desired behavior. Instead, you want to search for +, -, or spaces. Replace the pattern in your regex variable with \+- to match plus and minus characters.

Note that you need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions.
---------------------------------

Step 21
=======
In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (\). The character class \s will match any whitespace character. Add this to your regex pattern.
---------------------------------

Step 22
=======
Turn your +-\s pattern into a character class. Note that you no longer need to escape the + character, because you are using a character class.
---------------------------------

Step 23
=======
Add the g flag to your regex pattern.
---------------------------------

Step 24
=======
Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.
---------------------------------

Step 25
=======
Now it is time to test out your cleanInputString function.

Inside your cleanInputString function, add a console.log() statement with two arguments. The first argument should be the string "original string: " and the second argument should be the str parameter.       
---------------------------------

Step 26
=======
To see the results from the cleanInputString function, you will need to add a console.log() statement. Inside that console statement, call the cleanInputString function with the string value of "+-99" as an argument.

Open up the console and you should see the original string followed by the cleaned string value with the +- removed.
---------------------------------

Step 27
=======
Once you have finished testing your cleanInputString function, you can remove both of your console statements.
---------------------------------

Step 28
=======
In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.

Start by creating a function called isInvalidInput – it should take a single str parameter.
---------------------------------

Step 29
=======
Declare a regex variable, and assign it a regex that matches the character e.
---------------------------------

Step 30
=======
The regex above would match hello, Hello, HELLO, and even hElLo because of the i flag. This flag makes your pattern case-insensitive.

Add the i flag to your regex pattern.
---------------------------------

Step 31
=======
Number inputs only allow the e to occur between two digits. To match any number, you can use the character class [0-9]. This will match any digit between 0 and 9.

Add this character class before and after e in your pattern.
---------------------------------

Step 32
=======
The + quantifier in a regular expression allows you to match a pattern that occurs one or more times. To match your digit pattern one or more times, add a plus after each of the digit character classes. For example: [0-9]+.
---------------------------------

Step 33
=======
There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes with this shorthand.
---------------------------------

Step 34
=======
Return the result of calling the .match() method on str and passing your regex variable as the argument. You'll use this match result later on.
---------------------------------

Step 35
=======
Now it is time to test your isInvalidInput function. For this test, you want to check if the function can detect scientific notation like 1e3 or 10e2. While this is a valid way to represent numbers, it is not a valid input for your calorie counter project.

Below your isInvalidInput function, add a console statement. Inside that console statement, call the isInvalidInput function with an argument of "1e3".

Open up the console to see the result. In the next step, you will learn more about what that result means.
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
