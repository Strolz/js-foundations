/*

1. You should have a function named sumAll.
2. sumAll([1, 4]) should return a number.
3. sumAll([1, 4]) should return 10.
4. sumAll([4, 1]) should return 10.
5. sumAll([5, 10]) should return 45.
6. sumAll([10, 5]) should return 45.

*/

function sumAll([num1,num2]) {

    /* Create new array to reverse if necessary*/
    let newArr = [];

    /* Create a counter to add sums */
    let newTotal = 0;

    /* this flips the argument so the lowest number is always index 0 in the array*/
    if(num1 > num2) {
        newArr = [num2, num1];
    } else {
        newArr = [num1,num2];
    }

    /* this takes the first number adds it to newTotal and then adds every number there after with the greates number being inclusive. */
    for(let i = newArr[0]; i <= newArr[1]; i++) {
       newTotal += i;
    }
    
    return newTotal;
}
