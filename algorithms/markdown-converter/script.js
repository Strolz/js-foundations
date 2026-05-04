const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const h1Exp = /^#/;
const h2Exp = /^##/;

function convertMarkdown() {
     
    if(h1Exp.test(markdownInput.value) && !h2Exp.test(markdownInput.value)) {
        return `<h1>${markdownInput.value
                .slice(1)
                .trim()}</h1>`;
    }
    if(h2Exp.test(markdownInput.value)) {
        return `<h2>${markdownInput.value
                .slice(2)
                .trim()}</h2>`;
    }
   return markdownInput.value;      
}   

markdownInput.addEventListener("input", () => {
    let newOutput = convertMarkdown();
    rawOutput.textContent = newOutput;
    htmlPreview.innerHTML = newOutput;
})
