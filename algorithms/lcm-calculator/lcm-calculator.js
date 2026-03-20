
/*

1. You should have a smallestCommons function.
2. smallestCommons([1, 5]) should return a number.
3. smallestCommons([1, 5]) should return 60.
4. smallestCommons([5, 1]) should return 60.
5. smallestCommons([2, 10]) should return 2520.
6. smallestCommons([1, 13]) should return 360360.
7. smallestCommons([23, 18]) should return 6056820.

*/


function smallestCommons(arr) {
   
    /* Build numeric range */
    let sortedArr = arr.sort((a,b) => a - b);
    let newArr = [];

    for(let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        newArr.push(i);
    }

    /* Find greatest common divisor */
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    /* Find lowest common multiple */
    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    /* Return the lowest common multiple */
    return newArr.reduce((acc, num) => lcm(acc, num), 1);
}

