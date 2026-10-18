function generateElement() {
    return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
    return Array.from({length: 5}, generateElement)
}

function gernerateContainer() {
    return document.createElement("div");
}

function fillArrContainer(el, arr) {
    el.innerHTML = "";

    arr.forEach(num => {
        const span = document.createElement("span");
        span.textContent = num;
        el.appendChild(span);
    })
}

function isOrdered(intOne, intTwo) {
    return intOne <= intTwo;
}

function highlightCurrentEls(el, index) {
    const children = el.children;

    children[index].style.borderStyle = "dashed";
    children[index].style.borderColor = "red";
    children[index].style.borderWidth = "2px";

    children[index + 1].style.borderStyle = "dashed";
    children[index + 1].style.borderColor = "red";
    children[index + 1].style.borderWidth = "2px";
}

const generateBtn = document.getElementById("generate-btn");
const startingArrayEl = document.getElementById("starting-array");
const arrayContainerEl = document.getElementById("array-container");

generateBtn.addEventListener("click", () => {
    const arr = generateArray();

    fillArrContainer(startingArrayEl, arr);

    Array.from(arrayContainerEl.children).forEach(child => {
        if (child !== startingArrayEl) {
            child.remove();
        }
    });
});

highlightCurrentEls(startingArrayEl, 0);

arrayContainerEl.appendChild(startingArrayEl);
