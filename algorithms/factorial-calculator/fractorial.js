/*

1. You should have a num variable.
2. You should assign a value to the num variable
3. The value of num should be between 1 and 20.
4. The num value should be a number.
5. You should have a function named factorialCalculator.
6. The factorialCalculator function should take a number as an argument.
7. The factorial of 5 should return 120.
8. The factorial of 7 should return 5040.
9. You should call your factorialCalculator function with the num variable as the argument.
10. You should define a factorial variable and assign the result of the factorialCalculator function to it.
11. Your factorialCalculator should produce the correct result.
12. Your resultMsg should contain a string in a format Factorial of [num] is [factorial].
13. You should output the value of resultMsg to the console.

*/

/* declare any number between 1 and 20 for testing */
let num = 5;

function factorialCalculator(number) {

  /* result starts at 1 for multiplication */
  let result = 1;

  /* loop counter starts at 1 */
  let counter = 1;

  /* loop until the counter is less than or equal too the provided argument */
  while (counter <= number) {

    /* multiply accumulator by counter on each iteration */
    result = result * counter;

    /* increment counter for next iteration */
    counter++
  }

  return result;
}

/* call the function with the global num and store in the factorial variable */
let factorial = factorialCalculator(num);

/* build output message */
let resultMsg = `Factorial of ${num} is ${factorial}`;

/* output result */
console.log(resultMsg);

 
