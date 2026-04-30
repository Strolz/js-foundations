// Cache DOM elements
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// Verify selected regex flags by user
function getFlags() {
    let flags = "";

    if (caseInsensitiveFlag.checked == true) {
        flags += "i"
    }
    if (globalFlag.checked == true) {
        flags += "g"
    }
    return flags;
}

// Compile RegExp object from user pattern and selected flags
function buildRegex() {
    let newRegex = regexPattern.value;
    let flagString = getFlags();
    return RegExp(newRegex, flagString);
}

// Run the regex against the input, show matches or "no match", then highlight them
function testString() {
    const regexTest = buildRegex();
    if(!regexTest.test(stringToTest.innerText)) return testResult.innerText = `no match`
    testResult.innerText = stringToTest.textContent.match(regexTest);
    highLightMatches();
}

function highLightMatches() {
    const regex = buildRegex();
    stringToTest.innerHTML = stringToTest.textContent.replace(regex, match => {
    return `<span class="highlight">${match}</span>`
});
}

// Trigger regex test when the user clicks the button
testButton.addEventListener("click", () => testString())
