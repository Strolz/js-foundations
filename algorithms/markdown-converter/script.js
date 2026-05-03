const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

function convertMarkdown() {
    htmlPreview.innerHTML = `<h1>${markdownInput.value}</h1>`
}

markdownInput.addEventListener("input", () => {
    rawOutput.textContent = markdownInput.value;
    convertMarkdown();
})
