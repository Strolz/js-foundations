/*

1. You should have a steamrollArray function.
2. steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
3. steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
4. steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
5. steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
6. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
7. You should not use global variables.

*/
function steamrollArray(arr) {
    
    /* Copy array */
    const clonedArr = [...arr];
    
    /* Gather values */
    const result = [];

    /* Flatten the array */
    while(clonedArr.length) {
        const next = clonedArr.shift();

        if(Array.isArray(next)) {
            clonedArr.unshift(...next)
        } else {
            result.push(next);
        }
    }
    
    return result;
}

