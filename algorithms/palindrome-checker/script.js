// Cache DOM elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultMsg = document.getElementById("result");

// Validate & standardize input, update UI
checkBtn.addEventListener("click", () => {
    if(textInput.value == "") return alert("Please input a value");
    const cleaned = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");

    resultMsg.textContent = cleaned == cleaned.split("").reverse().join("")
    ? `${textInput.value} is a palindrome`
    : `${textInput.value} is not a palindrome`

})
