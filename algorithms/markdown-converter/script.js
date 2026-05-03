const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");


markdownInput.addEventListener("input", () => {
    rawOutput.textContent = markdownInput.value;
    convertMarkdown();
})
