/*
1. frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
2. frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
3. frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
4. All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
5. The first array should remain the same after the function runs.
6. The second array should remain the same after the function runs.
*/


function frankenSplice(arr1, arr2, index) {
    
    /* store the first portion of the second array, at the given index, in arrSlice */
    let arrSlice = arr2.slice(0, index);
    
    /* store the last portion of the second array in arrEnd */
    let arrEnd = arr2.slice(index);

    /* return first portion combined w/ the provided first array then combined with the last portion */
    return arrSlice.concat(arr1.concat(arrEnd));

}

/* call the function */
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
