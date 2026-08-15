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

viewCategoryBtn.addEventListener("click", () => {
    listSection.classList.remove("hidden");
    mainSection.classList.add("hidden");
    categoryName.textContent = categoryDropdown.value;
})
