/*

1. You should have a convertHTML function.
2. convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
3. convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
4. convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
5. convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
6. convertHTML("Schindler's List") should return the string Schindler&apos;s List.
7. convertHTML("<>") should return the string &lt;&gt;.
8. convertHTML("abc") should return the string abc.

*/

function convertHTML(string) {
    /* create an array for our new string */
    let newStr = [];

    /* loop through the provided argument string */
    for(let i = 0; i < string.length; i++) {

        /* rule out if the characters are present, if not push to the new string array */
        if(string[i] !== '&' && string[i] !== '<' && string[i] !== '>' && string[i] !== '"' && string[i] !== "'") {
            newStr.push(string[i]);

        /* if the character is one outlined perform the following */    
        } else if(string[i] == "&") {
            newStr.push("&amp;"); 
        } else if(string[i] == "<") {
            newStr.push("&lt;"); 
        } else if(string[i] == ">") {
            newStr.push("&gt;"); 
        } else if(string[i] == '"') {
            newStr.push("&quot;");    
        } else if(string[i] == "'") {
            newStr.push("&apos;"); 
        }
    }

    /* return new string by joning the aray at each index */
    return newStr.join("");
}

/* call, store & log function results */
const test = convertHTML("<>");
console.log(test);
