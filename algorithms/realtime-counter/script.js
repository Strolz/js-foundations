/*

1. You should have a textarea element with the id of text-input.
2. You should have a p element with the id of char-count.
3. The #char-count element should initially contain the text Character Count: 0/50.
4. When the #text-input element contains the text hello coder the #char-count element should contain the text "Character Count: 11/50"
5. When the character count is 50, the text should be displayed in red.
6. If character count is greater than or equal to 50, the extra input should be trimmed.

*/

function updateCount() {
    
    // Reflect updated character count
    charCount.innerHTML = `Character Count: ${textInput.value.length}/50`;

    // Correct 51/50 bug 
    if(textInput.value.length >= 50) charCount.innerHTML = `Character Count: 50/50`;

    // Handle UI change
    textInput.value.length >= 50
    ? charCount.classList.add("capacity")
    : charCount.classList.remove("capacity")
    
}

// Cache DOM elements
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

// Update UI and limit user input
textInput.addEventListener("input", updateCount);
textInput.addEventListener("input", () => {
    if(textInput.value.length > 50) {
       textInput.value = textInput.value.slice(0, 50);
    }
})
