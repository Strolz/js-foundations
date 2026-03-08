/*

1. You should have a findElement function.
2. findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
3. findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
4. findElement([1, 2, 3, 4], function(num) { return num > 2; }) should return 3.
5. findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }) should return "javascript".
6. findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; }) should return undefined.
7. findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; }) should return 2.
8. findElement([], function(num) { return num > 0; }) should return undefined.

*/

function findElement(arr, func) {
    
    /* scan until we find the first element that passes the test  */
    for(let i = 0; i < arr.length; i++) {

        /* if the element passes return it immediately */
        if(func(arr[i]) === true) {
            return arr[i];
        }
    }
};

/* call the function */
findElement([1, 2, 3, 4], function(num) { return num > 2; });
