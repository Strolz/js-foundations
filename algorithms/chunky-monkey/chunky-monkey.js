/*

1. chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
2. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
3. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
4. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
5. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
6. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
7. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

*/


function chunkArrayInGroups(arr, num) {

    /* create and index and set to zero */
    let index = 0;

    /* container for each chunk we build */
    let newArr = [];

        /* loop while the index remains less than the length of the array */
        while(index < arr.length) {
            
            /* slice the array at value index provides and index + 1 */
            let x = arr.slice(index, index + num);

            /* push the stored value of x to the new array */
            newArr.push(x);

            /* increase the index by the num argument each pass */
            index += num
        }
    /* return all the chunky chunks! */    
    return newArr;
}

/* call the function */
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
