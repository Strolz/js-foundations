const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
    let flags = "";

    if(caseInsensitiveFlag.checked == true) {
    flags += "i"
    }
    if(globalFlag.checked == true) {
    flags += "g"
    }
    return flags;
}

function buildRegex() {
    let newRegex = regexPattern.value;
    let flagString = getFlags();
    return RegExp(newRegex, flagString);
}

function testString() {
    
}

testButton.addEventListener("click", () => buildRegex())
