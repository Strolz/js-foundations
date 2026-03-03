/*
1. You should create a function named findLongestWordLength.
2. findLongestWordLength should have a single parameter.
3. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
4. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
5. findLongestWordLength("May the force be with you") should return 5.
6. findLongestWordLength("Google do a barrel roll") should return 6.
7. findLongestWordLength("Googling do a barrel roll") should return 8.
8. findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
9. findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

function findLongestWordLength(sentence) {

  /* declares if the argument passed has no length then return 0 */
  if(sentence.trim() === "") {
    return 0;
  }
  
  /* trim whitespace and then split at space into new array stored in trimmed */
  let trimmed = sentence.trim().split(" ");

  /* set first index as baseline word and store in longestWord */
  let longestWord = trimmed[0];

  /* loop through trimmed array, if the compared word is longer than baseline it becomes longestWord */
  for(const word of trimmed) {
    if(word.length > longestWord.length)
        longestWord = word;
  }

  /* return the length of the longest word */
  return longestWord.length;

};

/* call the function */
console.log(findLongestWordLength("I want to win player"));
