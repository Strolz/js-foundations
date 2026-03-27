/*

1. You should create a function named titleCase.
2. titleCase should take a single argument.
3. titleCase("I'm a little tea pot") should return a string.
4. titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
5. titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
6. titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

*/

function titleCase(str) {

    /* Convert provided string to lower case */
    let lwrStr = str.toLowerCase();

    /* Holds final string */
    let newStr = "";

    /* Capitalize first letter of each word */
    for(let i = 0; i < str.length; i++) {
       
        if(i == 0) {
        newStr += lwrStr[i].toUpperCase();

        } else if(lwrStr[i] !== " ") {
        newStr += lwrStr[i];

        } else {
        let x = lwrStr[i+1].toUpperCase();
        newStr += ` ${x}`;
        i++
        }      
    }

    return newStr;
};
