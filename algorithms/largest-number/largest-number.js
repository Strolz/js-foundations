/*

1. You should create a function named largestOfAll.
2. largestOfAll should take a single parameter.
3. largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
4. largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
5. largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
6. largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

*/

/* Find the largest number in a provided array */
function largestOfAll(arr) {
    let lrgNums = [];
 
    /* Iterate through the array setting the first number as the baseline */
    for(let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];  

        /* Iterate through each array index, if larger than the baseline, replace the baseline with the current number */
        for(let x = 0; x < arr[i].length; x++) {
            if(arr[i][x] > largest){
            largest = arr[i][x]
            }
        }
        /* Store largest number in the global container */
        lrgNums.push(largest)
    }
    return lrgNums;
};
