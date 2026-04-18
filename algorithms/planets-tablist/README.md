Build a Planets Tablist
---------------------------------

In this workshop, you will build an accessible planets tablist using HTML, CSS and JavaScript. The HTML boilerplate and CSS have been provided for you.

In these first few steps, you will build out the remaining HTML for the tablist.
---------------------------------

Step 1
======
Start by creating a div element with a class set to "tabs". Inside of that div element, add an h2 element with an id attribute set to "tabs-title" and the text content Planets.
---------------------------------

Step 2
======
Inside of your .tabs element, add a div element with a role attribute set to "tablist" and an aria-labelledby attribute set to "tabs-title".

The aria-labelledby attribute is needed here to associate the tablist with a visible label, helping assistive technologies like screen readers announce the purpose of the tablist to users.
---------------------------------

Step 3
======
The next step is to add the buttons that will be responsible for switching between the different planets and their facts.

Inside of the tablist element, add three button elements each with a role attribute set to "tab". The first button element should have the text 🌍 Earth. The second button should have the text 🪐 Saturn. The third button element should have the text 🔴 Mars.
---------------------------------

Step 4
======
There needs to be a way to connect the buttons to the content they represent. This is done by using the aria-controls attribute on each button. Later on, you will add the content and the corresponding id attributes to the content elements.

Start by adding the aria-controls attribute to each of the button elements. The value for the first button's aria-controls attribute should be set to "panel-earth". The second button's aria-controls attribute should be set to "panel-saturn". The third button's aria-controls attribute should be set to "panel-mars".
---------------------------------

Step 5
======
When a user selects a tab, the aria-selected attribute should be updated to "true" for that tab and "false" for all others. This indicates which tab is currently active and ensures accessibility for assistive technologies.

By default, the first tab should be selected. You can do this by adding the aria-selected attribute to the first button element and setting its value to "true".
---------------------------------

Step 6
======
By default, the other tabs should not be selected. You can do this by adding the aria-selected attribute to the second and third button elements and setting their values to "false".
---------------------------------

Step 7
======
The last item to add to each of the button elements are the id attributes. These will be used to link the button elements to their corresponding content panels.

The first button element should have an id of "tab-earth", the second should have an id of "tab-saturn", and the third should have an id of "tab-mars".
---------------------------------

Step 8
======
Now it is time to create the markup for each of the panels which will display the facts about each planet.

Start by adding three div elements each with a role attribute set to "tabpanel". Inside each div element, there should be a p element.
---------------------------------

Step 9
======
Now it is time to add the facts for each planet. Inside the first p element, add the following text: Earth is our home planet, known for its abundant water, diverse ecosystems, and life-supporting atmosphere. It's the only planet in the solar system known to harbor life.

Inside the second p element, add the following text: Saturn is famous for its beautiful and extensive ring system made of ice and rock particles. It's a gas giant with dozens of moons orbiting it.

Inside the third p element, add the following text: Mars, the red planet, is a rocky world with the tallest volcano and deepest canyon in the solar system. It's a key focus for exploration in the search for past or present life.
---------------------------------

Step 10
=======
Now it is time to associate the tab panels with their respective tabs.

For the first tabpanel element, add the id attribute with the value "panel-earth" and an aria-labelledby attribute with the value "tab-earth".
---------------------------------

Step 11
=======
For the second tabpanel element, add the id attribute with the value "panel-saturn" and an aria-labelledby attribute with the value "tab-saturn".

For the third tabpanel element, add the id attribute with the value "panel-mars" and an aria-labelledby attribute with the value "tab-mars".
---------------------------------

Step 12
=======
Right now, all three facts are visible at the same time. But only one fact should be visible at a time.

To achieve this, you need to set the hidden attribute on the second and third tabpanel elements.
---------------------------------

Step 13
=======
Now it is time to start adding the functionality to the tablist. The first step is to access all of the tab and panel elements in the tablist.

Create a variable called tabs and assign it the result of querying for all elements with the role attribute set to tab.

Then, create a variable called panels and assign it the result of querying for all elements with the role attribute set to tabpanel.

Remember that you can use the querySelectorAll method to select multiple elements at once.
---------------------------------

Step 14
=======
Use the forEach method to iterate through the tabs. For the callback function, use an arrow function that takes a single parameter, tab.
---------------------------------

Step 15
=======
Each tab represents one of the buttons in the tab list. The user should be able to click on a tab to display the corresponding panel and hide the others.

Use the addEventListener method to attach a "click" event listener to each tab button. The second argument of the addEventListener method should be an empty arrow function () => {} for now.
---------------------------------

Step 16
=======
If you look at your HTML, the first tab is already selected by default and has an aria-selected attribute set to "true". When a user clicks on a different tab, all tabs should first be set to aria-selected="false".

To accomplish this, you can use the setAttribute method to change the aria-selected attribute of each tab.

Use a forEach on the tabs collection to loop through each tab and set its aria-selected attribute to "false". For the callback function, you can use any parameter name you like but it is best not to use tab since that is already being used in the outer forEach loop.
---------------------------------

Step 17
=======
If you look at the HTML, you will see that the second and third panels are hidden. This is done using the hidden attribute. The first panel is visible by default. When a user clicks on a tab, all panels should be hidden.

Use the forEach method to loop through the panels and set the hidden attribute on each panel to true.
---------------------------------

Step 18
=======
Now it is time to set the clicked tab to be selected.

Use the setAttribute method on the tab to set the aria-selected attribute to "true".
---------------------------------

Step 19
=======
Now it is time to work on displaying the correct panel when a tab is clicked. Each of the panels has an id that matches the aria-controls attribute of the corresponding tab. For example, the first panel has an id of panel-earth, which matches the aria-controls attribute value for the first tab, which is panel-earth.

Create a variable called associatedPanel and assign it the value tab.getAttribute("aria-controls"). This will give you the id of the panel that corresponds to the clicked tab.
---------------------------------

Step 20
=======
Since associatedPanel is an id, that will allow you to query the document and find the corresponding panel element.

Create a new variable called panel and assign it the value of document.getElementById(associatedPanel).
---------------------------------

Step 21
=======
For the last step, you need to make the panel visible when its associated tab is clicked. You can do this by setting the hidden property of the panel to false.

Click on any of the tabs, and you should see the corresponding panel content displayed.

And with that last change, your workshop is complete!
---------------------------------

URL Link to lab : https://www.freecodecamp.org/learn/javascript-v9/workshop-planets-tablist/step-1
