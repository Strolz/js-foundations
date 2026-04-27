// Cache DOM elements
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

// regex patterns for deny‑list checks (word variants + leetspeak)
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
const denyList = [helpRegex, dollarRegex, freeRegex];
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

// checks message against deny‑list regex patterns
const isSpam = (msg) => denyList.some(words => words.test(msg));

// validates input, checks for spam, updates UI
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value) 
  ? "Oh no! This looks like a spam message." 
  : "This message does not seem to contain any spam."
  messageInput.value = "";
});
