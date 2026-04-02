
function updateCount(btn) {

  // Get the count element 
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  
  // Stop here if button is maxed
  if (currCount === 10) return;

  currCount++;
  
  // Reflect new count
  countEl.textContent = `${currCount}/10`;
}

// Collect all emoji buttons
const btns = document.querySelectorAll(".emoji-btn");

// Enable each button to update its own count when clicked
btns.forEach(check => check.addEventListener("click", () => updateCount(check)));


/* This block was built and then consolidated, no longer needed to perform the same function 

const happyBtn = document.querySelector("#happy-btn");
const confusedBtn = document.querySelector("#confused-btn");
const sadBtn = document.querySelector("#sad-btn");
const lovingBtn = document.querySelector("#loving-btn");

happyBtn.addEventListener("click", () => updateCount(happyBtn));
confusedBtn.addEventListener("click", () => updateCount(confusedBtn));
sadBtn.addEventListener("click", () => updateCount(sadBtn));
lovingBtn.addEventListener("click", () => updateCount(lovingBtn));

*/
