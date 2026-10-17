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
    
}
