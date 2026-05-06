const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const h1Exp = /^#\s+.+/;
const h2Exp = /^##\s+.+/;
const h3Exp = /^###\s+.+/;
const bold = /(\*\*|__)(.+?)\1/;
const italic = /(\*|_)(.+?)\1/;
const image = /^!\[(.+?)\]\((.+?)\)$/;
const linkText = /^\[(.+?)\]\((.+?)\)$/;
const quote = /^>\s?.+/;

// Handle multiline input
function convertMarkdown() {
    const lines = markdownInput.value.split("\n");
    const converted = lines.map(line => convertSingleLine(line));
    return converted.join("");
}

// Convert a single markdown line into the appropriate HTML
function convertSingleLine(line) {
    
    if(h1Exp.test(line) && !h2Exp.test(line)) {
        const inner = line.slice(1).trim();    
        return `<h1>${convertSingleLine(inner)}</h1>`;
    }
    if(h2Exp.test(line) && !h3Exp.test(line)) {
        const inner = line.slice(2).trim();    
        return `<h2>${convertSingleLine(inner)}</h2>`;
    }
    if(h3Exp.test(line)) {
        const inner = line.slice(3).trim();    
        return `<h3>${convertSingleLine(inner)}</h3>`;
    }
    if(bold.test(line)) {
        const text = line.match(bold)[2];
        return convertSingleLine(
            line.replace(bold, (_, __, text) => `<strong>${text}</strong>`)
        ); 
    }
    if(italic.test(line)) {
        const text = line.match(italic)[2];
        return convertSingleLine(
        line.replace(italic, (_, __, text) => `<em>${text}</em>`)
        ); 
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
        const inner = line.slice(1).trim();
        return `<blockquote>${convertSingleLine(inner)}</blockquote>`;
    }

   return line;

}   

// Enable UI updating
markdownInput.addEventListener("input", () => {
    let newOutput = convertMarkdown();
    rawOutput.textContent = newOutput;
    htmlPreview.innerHTML = newOutput;
})
