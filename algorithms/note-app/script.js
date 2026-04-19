// Cache DOM elements
const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");
const helper = document.querySelector(".helper-text");

// Text update container 
let currentContent = ``;

// Remove visible saved message when editing
noteEl.addEventListener("focus", () => {
    statusEl.textContent = "";
});

// Save text and display saved message when clicking out of note box
noteEl.addEventListener("blur", () => {
    const newContent = noteEl.innerHTML;
    if(currentContent == newContent) return;
    currentContent = newContent;
    console.log(currentContent);
    statusEl.textContent = "Note saved successfully!";
});

// Store original note text on page refresh/load
window.addEventListener("DOMContentLoaded", () => {
    currentContent = noteEl.textContent;
})
