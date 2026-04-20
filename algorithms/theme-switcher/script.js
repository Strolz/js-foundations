const themes = [
  {
    name: "light",
    message: "Let there be light!",
  },
  {
    name: "dark",
    message: "Though I walk through the shadow of the valley of darkness",
  },
  {
    name: "teal",
    message: "Summer knees in the breeze",
  },
]

// Cache DOM elements
const themeButton = document.getElementById("theme-switcher-button");
const menuItems = document.querySelectorAll(`[role="menuitem"]`);
const menuPanels = document.querySelectorAll(`[role="menu-message"]`)
const body = document.querySelector("body")
const themeMessage = document.getElementById("theme-message")
const dropdown = document.getElementById("theme-dropdown");

// Toggle theme menu visibility and sync aria-expanded state
themeButton.addEventListener("click", () => {

    if(dropdown.hidden == false) {
        dropdown.hidden = true;
        themeButton.ariaExpanded = false;
        return;
    }
    
    dropdown.hidden = false;
    themeButton.ariaExpanded = true;
})

// Handle UI background color change and display corresponding text
menuItems.forEach(item => item.addEventListener("click", () => {
    body.className= "";
    let themeName = item.id.slice(6);
    const choosenObj = themes.filter(obj => obj.name == themeName);

    themeMessage.textContent = choosenObj[0]["message"];

    body.classList.add(item.id);
    dropdown.hidden = true;
}))
