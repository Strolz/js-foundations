const categoryDropdown = document.getElementById("category-dropdown");
const viewCategoryBtn = document.getElementById("view-category-button");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryName = document.querySelector(".category-name");

const formSection = document.getElementById("form-section");
const listSection = document.getElementById("bookmark-list-section");
const mainSection = document.getElementById("main-section");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");

const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const displayOrCloseForm = () => {
    formSection.classList.toggle("hidden");
    mainSection.classList.toggle("hidden");
}

viewCategoryBtn.addEventListener("click", () => {
    listSection.classList.remove("hidden");
    mainSection.classList.add("hidden");
    categoryName.textContent = categoryDropdown.value;
})

closeListBtn.addEventListener("click", () => {
    listSection.classList.add("hidden");
    mainSection.classList.remove("hidden");
})

addBookmarkBtn.addEventListener("click", () => {
    formSection.classList.remove("hidden");
    mainSection.classList.add("hidden");
})

closeFormBtn.addEventListener("click", () => {
    formSection.classList.add("hidden");
    mainSection.classList.remove("hidden");
})

formSection.addEventListener("submit", (e) => {
    e.preventDefault();
    formSection.classList.add("hidden");
    listSection.classList.remove("hidden");
})
