
/*

1. You should have a fearNotLetter function.
2. fearNotLetter("abce") should return the string d.
3. fearNotLetter("abcdefghjklmno") should return the string i.
4. fearNotLetter("stvwx") should return the string u.
5. fearNotLetter("bcdf") should return the string e.
6. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/

function fearNotLetter(string) {

    /* Initialize alphabet and convert input to lower case */
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let newStr = string.toLowerCase();

    /* Prep empty slice, string length, and loop index */
    let slicedString = "";
    let strLng = string.length;
    let index = 0;

    /* Find the input’s starting letter, slice expected range, and return the first mismatch */ 
    for(const checker of letters) {
        if(checker == newStr[0]) {
            slicedString = letters.slice(letters.indexOf(checker), letters.indexOf(checker) + strLng);
            while(index < slicedString.length) {
                if(slicedString[index] == newStr[index]) {
                   index++
                } else {
                    return slicedString[index];
                }
            }                
        }
    }
};
