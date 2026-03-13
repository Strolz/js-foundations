/*

1. You should have a sumFibs function.
2. sumFibs(1) should return a number.
3. sumFibs(1000) should return 1785.
4. sumFibs(4000000) should return 4613732.
5. sumFibs(4) should return 5.
6. sumFibs(75024) should return 60696.
7. sumFibs(75025) should return 135721.

*/

function sumFibs(num) {

    /* set the Fibonacci counters for the sliding window */
    let prev = 0;
    let curr = 1;
    let next = prev + curr;

    /* create a sum calculator to be returned */
    let sum = 0;
    
    /* Add odd fibonacci numbers, slide window forward and return the sum when complete */
    while(curr <= num) {
        if(curr % 2 !== 0) {
            sum += curr;
        }
        
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return sum;
}

