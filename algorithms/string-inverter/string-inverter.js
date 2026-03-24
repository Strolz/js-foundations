
/*

1. You should have a function named reverseString.
2. reverseString should take a string as an argument.
3. reverseString("hello") should return a string.
4. reverseString("hello") should return the string olleh.
5. reverseString("Howdy") should return the string ydwoH.
6. reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

*/

function reverseString(string) {
  
  /* Reverse string and display */
  let strArr = string.split("");
  let arrRev = strArr.reverse(); 
  let newStr = arrRev.join(""); 

  return newStr;
}
