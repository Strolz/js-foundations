
/*

1. You should have a getIndexToIns function.
2. getIndexToIns should always return a number.
3. Your function should use the sort method.
4. Your function should make use of the findIndex method.
5. getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
6. getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
7. getIndexToIns([40, 60], 50) should return 1.
8. getIndexToIns([3, 10, 5], 3) should return 0.
9. getIndexToIns([5, 3, 20, 3], 5) should return 2.
10. getIndexToIns([2, 20, 10], 19) should return 2.
11. getIndexToIns([3, 10, 5], 11) should return 3
12. getIndexToIns([], 5) should return 0

*/

function getIndexToIns(arr, num) {
   
    /* Empty case */ 
    if(arr.length == 0) return 0;

    /* Insert at end */
    if(arr.sort((a, b) => a - b)
    .findIndex((x) => x >= num) == -1) return arr.length; 
   
    /* Find index to insert number */
    return arr.sort((a, b) => a - b)
    .findIndex((x) => x >= num);
}
