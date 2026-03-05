/*

1. mutation(["hello", "hey"]) should return false.
2. mutation(["hello", "Hello"]) should return true.
3. mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
4. mutation(["Mary", "Army"]) should return true.
5. mutation(["Mary", "Aarmy"]) should return true.
6. mutation(["Alien", "line"]) should return true.
7. mutation(["floor", "for"]) should return true.
8. mutation(["hello", "neo"]) should return false.
9. mutation(["voodoo", "no"]) should return false.
10. mutation(["ate", "date"]) should return false.
11. mutation(["Tiger", "Zebra"]) should return false.
12. mutation(["Noel", "Ole"]) should return true.

*/

function mutation(array) {

    /* convert both strings in the array to lowercase */
    let newStr1 = array[0].toLowerCase();
    let newStr2 = array[1].toLowerCase();

    /* loop through each index of newStr2, if newStr1 doesn't contain the character return false */
    for(const char of newStr2) {
        if(newStr1.includes(char) !== true) {
            return false;
        }
    } 
    /* if the loop completes and all characters are present in newStr1 return true */
    return true;
};

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
