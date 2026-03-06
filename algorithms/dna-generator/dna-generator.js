/*

1. You should create a function named pairElement.
2. pairElement should take a single argument.
3. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
4. pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
5. pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/


function pairElement(base) {
    /* Create new array to push results to */
    let newArr = [];

    /* This will loop the string one index at a time */
    for(let i = 0; i < base.length; i++) {
        
        /* Check each index for the specific letter, if it matchs push it to the new array with its required partnet */

        if(base[i] == "A") {
            newArr.push([base[i], "T"]);
        } else if(base[i] == "T") {
            newArr.push([base[i], "A"]);
        } else if(base[i] == "C") {
            newArr.push([base[i], "G"]);
        } else if(base[i] == "G") {
            newArr.push([base[i], "C"]);
        }    
    }
    /* Return the new array that was created */
    return newArr;
}

/* call the function */
pairElement("CTCTA");
