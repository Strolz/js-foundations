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
