console.log("JS loaded")

function imgToggle(image) {

    image == `https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg`
    ? lightBxImg.src = `https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg`
    : console.log(lightBxImg.src)
    lightBox.classList.add("show")
}

const lightBox = document.querySelector(".lightBox");

const lightBxImg = document.getElementById("lightbox__image");

const galleryItems = document.querySelectorAll(".gallery__item");

galleryItems.forEach(check => check.addEventListener("click", () => imgToggle(check.src)));
