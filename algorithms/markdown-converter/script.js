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
    const lines = markdownInput.value.split("\n");
    const converted = lines.map(line => convertSingleLine(line));
    return converted.join("");
}

function convertSingleLine(line) {
     
    if(h1Exp.test(line) && !h2Exp.test(line)) {
        return `<h1>${line
                .slice(1)
                .trim()}</h1>`;
    }
    if(h2Exp.test(line) && !h3Exp.test(line)) {
        return `<h2>${line
                .slice(2)
                .trim()}</h2>`;
    }
    if(h3Exp.test(line)) {
        return `<h3>${line
                .slice(3)
                .trim()}</h3>`;
    }
    if(bold.test(line)) {
        const text = line.match(bold)[2];
        return `<strong>${text
                        .trim()}</strong>`; 
    }
    if(italic.test(line)) {
        const text = line.match(italic)[2];
        return `<em>${text
                        .trim()}</em>`; 
    }
    if(image.test(line)) {
        const match = line.match(image);
        const alt = match[1];
        const src = match[2];
        return `<img alt="${alt}" src="${src}">`
    }
    if(linkText.test(line)) {
        const match = line.match(linkText);
        const text = match[1];
        const url = match[2];
        return `<a href="${url}">${text}</a>`
    }
    if(quote.test(line)) {
        return `<blockquote>${line
                .slice(1)
                .trim()}</blockquote>`;
    }

   return line;

}   

markdownInput.addEventListener("input", () => {
    let newOutput = convertMarkdown();
    rawOutput.textContent = newOutput;
    htmlPreview.innerHTML = newOutput;
})
