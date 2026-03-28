/* 

1. You should have a uniteUnique function.
2. uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
3. uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
4. uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
5. uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
6. uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

*/

function uniteUnique(...arrs) {
    
    /* Holds final array */
    let newArr = [];
    
     /* Iterate through each array passed into the function */
    for(let i = 0; i < arrs.length; i++) {

        /* Walk each value inside the current array */   
        for(let x = 0; x < arrs[i].length; x++) { 
            
            /* Remove values not already seen */
            if(newArr.includes(arrs[i][x]) !== true) {  
                newArr.push(arrs[i][x]);
            } else {
                arrs[i].slice(x,x)
            }
        }
    }
    return newArr; 
}
