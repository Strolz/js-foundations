/*

. You should have a dropElements function.
2. dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
3. dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
4. dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
5. dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
6. dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
7. dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

*/

function dropElements(arr, func) {
    
    /* loop through the provided array */
    for(let i = 0; i < arr.length; i++) {

        /* once the condition is met, return the remainder of the array */
        if(func(arr[i]) == true) {
            return arr.slice(i);
        }
    }

    /* if the loop passes through each array index without the function returning true return and empty array */
    return []; 
}

/* call the function */
dropElements([1, 2, 3, 4, 5], function(n) {return n > 5;});
