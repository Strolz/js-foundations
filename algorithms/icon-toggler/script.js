/*

1. You should have an unordered list.
2. Your unordered list should have 3 items.
3. Your unordered list should have the class item-list.
4. Your individual list items should contain the item name.
5. Your individual list item should contain a button element with the class favorite-icon.
6. Initially, the button elements should contain the code &#9825; to represent an empty heart.
7. You should have a .filled selector that sets some CSS properties.
8. When the button element is clicked, and it contains the class filled, you should remove the class filled from the button element and change the innerHTML of the button element to &#9825;.
9. When the button element is clicked, and it doesn't contain the class filled, you should add the class filled to the button element and change the innerHTML of the button element to &#10084;.

*/
function iconToggle(icon) {

    // Cache DOM element
    const favFruitEl = document.getElementById(icon);

    // Handle state change
    favFruitEl.classList.toggle("filled");

    // Update heart symbol to reflect current state
    if (!favFruitEl.classList.contains('filled')) {
        favFruitEl.innerHTML = `&#9825;`;
    } else if(favFruitEl.classList.contains('filled')) {
        favFruitEl.innerHTML = `&#10084`;
    }
    
} 

// Collect DOM elements
const heartIcons = document.querySelectorAll(".favorite-icon")

// Attach event listeners
heartIcons.forEach(check => check.addEventListener("click", () => iconToggle(check.id)));
