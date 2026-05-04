const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const h1Exp = /^#/;
const h2Exp = /^##/;
const h3Exp = /^###/;
const bold = /^(\*\*|__)(.+?)\1$/;
const italic = /^(\*|_)(.+?)\1$/;
const image = /^!\[(.+?)\]\((.+?)\)$/;
const linkText = /^\[(.+?)\]\((.+?)\)$/;
const quote = /^>/;

function convertMarkdown() {
     
    if(h1Exp.test(markdownInput.value) && !h2Exp.test(markdownInput.value)) {
        return `<h1>${markdownInput.value
                .slice(1)
                .trim()}</h1>`;
    }
    if(h2Exp.test(markdownInput.value) && !h3Exp.test(markdownInput.value)) {
        return `<h2>${markdownInput.value
                .slice(2)
                .trim()}</h2>`;
    }
    if(h3Exp.test(markdownInput.value)) {
        return `<h3>${markdownInput.value
                .slice(3)
                .trim()}</h3>`;
    }
    if(bold.test(markdownInput.value)) {
        const text = markdownInput.value.match(bold)[2];
        return `<strong>${text
                        .trim()}</strong>`; 
    }
    if(italic.test(markdownInput.value)) {
        const text = markdownInput.value.match(italic)[2];
        return `<em>${text
                        .trim()}</em>`; 
    }
    if(image.test(markdownInput.value)) {
        const match = markdownInput.value.match(image);
        const alt = match[1];
        const src = match[2];
        return `<img alt="${alt}" src="${src}">`
    }
    if(linkText.test(markdownInput.value)) {
        const match = markdownInput.value.match(linkText);
        const text = match[1];
        const url = match[2];
        return `<a href="${url}">${text}</a>`
    }
    if(quote.test(markdownInput.value)) {
        return `<blockquote>${markdownInput.value
                .slice(1)
                .trim()}</blockquote>`;
    }

   return markdownInput.value;

}   

markdownInput.addEventListener("input", () => {
    let newOutput = convertMarkdown();
    rawOutput.textContent = newOutput;
    htmlPreview.innerHTML = newOutput;
})
