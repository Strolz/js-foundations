function imgToggle(image) {
    
    // Swap in larger image when thumbnail clicked
    if(image == `https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg`) lightBxImg.src = `https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg`;

    if(image == `https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg`) lightBxImg.src = `https://cdn.freecodecamp.org/curriculum/labs/storm.jpg`;

    if(image == `https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg`) lightBxImg.src = `https://cdn.freecodecamp.org/curriculum/labs/trees.jpg`;

    // Handle UI change  
    overlay.classList.add("shows")
    lightbox.classList.add("show")
}

// Cache DOM elements
const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".overlay")

const lightBxImg = document.getElementById("lightbox-image");

const galleryItems = document.querySelectorAll(".gallery-item");

// Enable thumbnails to open the corresponding lightbox
galleryItems.forEach(check => check.addEventListener("click", () => imgToggle(check.src)));

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
    overlay.classList.remove("shows");
});
