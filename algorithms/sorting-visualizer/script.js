// Returns a random integer between 1 and 100 (inclusive)
function generateElement() {
    return Math.floor(Math.random() * 100) + 1;
}

// Builds an array of five random integers using generateElement
function generateArray() {
    return Array.from({length: 5}, generateElement)
}

// Creates and returns an empty <div> used to represent a sorting step
function generateContainer() {
    return document.createElement("div");
}

// Populates a container with five <span> elements representing array values
function fillArrContainer(el, arr) {
    el.innerHTML = "";

    arr.forEach(num => {
        const span = document.createElement("span");
        span.textContent = num;
        el.appendChild(span);
    })
}

// Returns true if the first integer is <= the second
function isOrdered(intOne, intTwo) {
    return intOne <= intTwo;
}

// Swaps arr[index] and arr[index + 1] if they are out of order
function swapElements(arr, index) {
  if (arr[index] > arr[index + 1]) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

// Highlights the two adjacent elements being compared in a given container
function highlightCurrentEls(el, index) {
    const children = el.children;

    children[index].style.borderStyle = "dashed";
    children[index].style.borderColor = "red";
    children[index].style.borderWidth = "2px";

    children[index + 1].style.borderStyle = "dashed";
    children[index + 1].style.borderColor = "red";
    children[index + 1].style.borderWidth = "2px";
}

// Button + container references
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArrayEl = document.getElementById("starting-array");
const arrayContainerEl = document.getElementById("array-container");

// Generates a new random array and resets the visualization
generateBtn.addEventListener("click", () => {
  const arr = generateArray();
  fillArrContainer(startingArrayEl, arr);

  // Remove all previously generated steps but keep the starting array
  Array.from(arrayContainerEl.children).forEach(child => {
    if (child !== startingArrayEl) child.remove();
  });
});

// Runs the Bubble Sort visualization
sortBtn.addEventListener("click", () => {
  // Read the current numbers from the DOM
  const spans = startingArrayEl.children;
  const arr = Array.from(spans).map(span => Number(span.textContent));

  // Clear old steps but keep the starting array
  Array.from(arrayContainerEl.children).forEach(child => {
    if (child !== startingArrayEl) child.remove();
  });

  // Step 0: highlight the first comparison in the starting array
  highlightCurrentEls(startingArrayEl, 0);

  // Work on a mutable copy of the array
  let currentArr = [...arr];
  const n = currentArr.length;

  // Perform Bubble Sort and visualize each comparison step
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {

      // Swap values if needed
      swapElements(currentArr, j);

      // Create a new step container showing the current array state
      const stepContainer = generateContainer();
      fillArrContainer(stepContainer, currentArr);

      // Highlight the pair that was just compared
      highlightCurrentEls(stepContainer, j);

      // Add this step to the visualization
      arrayContainerEl.appendChild(stepContainer);
    }
  }
});
