const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const h1Exp = /^#/;

function convertMarkdown() {
    if(h1Exp.test(markdownInput.value)) {
        rawOutput.textContent = `<h1>${markdownInput.value.slice(1)}</h1>`;
        htmlPreview.innerHTML = `<h1>${markdownInput.value.slice(1)}</h1>`
    }     
}   

markdownInput.addEventListener("input", () => {
    rawOutput.textContent = markdownInput.value;
    htmlPreview.textContent = markdownInput.value;
    convertMarkdown();
})
