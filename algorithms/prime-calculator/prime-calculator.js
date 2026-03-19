/*

1. You should have a sumPrimes function.
2. sumPrimes(10) should return 17.
3. sumPrimes(5) should return 10.
4. sumPrimes(2) should return 2.
5. sumPrimes(0) should return 0.
6. sumPrimes(977) should return 73156.

*/


function sumPrimes(num) {
    
    /* Stage range */
    let newArr = [];

    /* Nothing to sum below 2 */
    if(num <= 1) return 0;

    /* Fill array with number range */
    for(let i = 2; i <= num; i++) {
        newArr.push(i)
    }

    /* Check if number is prime */
    const isPrime = (num) => { 
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            } 
        }
        return true;
    }

    /* Filter prime numbers */
    let primeFilter = newArr.filter(isPrime)

    /* Return sum of all primes */
    return primeFilter.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}
