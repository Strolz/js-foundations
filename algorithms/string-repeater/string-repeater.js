
/*

1. You should create a function named repeatStringNumTimes.
2. repeatStringNumTimes should take two parameters.
3. The function repeatStringNumTimes should always return a string.
4. repeatStringNumTimes("*", 3) should return the string ***.
5. repeatStringNumTimes("abc", 3) should return the string abcabcabc.
6. repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
7. repeatStringNumTimes("abc", 1) should return the string abc.
8. repeatStringNumTimes("*", 8) should return the string ********.
9. repeatStringNumTimes("abc", -2) should return an empty string ("").
10. repeatStringNumTimes("abc", 0) should return "".
11. The built-in repeat() method should not be used.

*/


let test = repeatStringNumTimes("abc", 5);
console.log(test);

function repeatStringNumTimes(string, num) {
    let result = ""
    let index = 1;

    while(index <= num) {
        result += string;
        index++
    }
    return result;
}
