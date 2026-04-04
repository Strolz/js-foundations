
Build a Sentence analyzer
---------------------------------

In this workshop, you will build a sentence analyzer that will take a sentence and get the count for the number of words, vowels, consonants, and punctuation marks.
---------------------------------

Step 1
======
To begin, create a getVowelCount function with a parameter called sentence. Your function should return the total number of vowels in a sentence.
---------------------------------

Step 2
======
Now it is time to test your getVowelCount function.

Create a vowelCount variable and assign it the result of calling the getVowelCount function with the argument of "Apples are tasty fruits"

After that, log the following to the console: "Vowel Count: [vowel count goes here]". Replace [vowel count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.
---------------------------------

Step 3
======
It's time to count the consonants. Create a getConsonantCount function with a sentence parameter.

Inside the function, use a loop to count the number of consonants in the sentence that will be passed into the function when it is called. A consonant is any letter that is not one of the following characters: "aeiou".

Your getConsonantCount function must return a number.
---------------------------------

Step 4
======
Now it is time to test your getConsonantCount function.

Create a consonantCount variable and assign it the result of calling the getConsonantCount function with the argument of "Coding is fun"

After that, log the following to the console: "Consonant Count: [Consonant count goes here]". Replace [Consonant count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.
---------------------------------

Step 5
======
You should count the number of punctuations now.

Create a getPunctuationCount function with a sentence parameter.

Inside the function, create a loop to count the number of punctuation characters in the sentence that will be passed into the function when it is called. For our purposes, a punctuation character is any character that is not a space (" ") or a letter.

Your getPunctuationCount function must return a number.
---------------------------------

Step 6
======
Now it is time to test your getPunctuationCount function.

Create a punctuationCount variable and assign it the result of calling the getPunctuationCount function with the argument of "WHAT?!?!?!?!?"

After that, log the following to the console: "Punctuation Count: [Punctuation count goes here]". Replace [Punctuation count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.
---------------------------------

Step 7
======
Finally, count the number of words by creating a getWordCount function with a sentence parameter. The function should return the total number of words in the sentence passed in when it is called.
---------------------------------

Step 8
======
Test your getWordCount by creating a wordCount variable set to the calling of the getWordCount function with the sentence "I love freeCodeCamp".

After that, log the following to the console: "Word Count: [Word count goes here]". Replace [Word count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.

With that, your sentence analyzer project is done!
---------------------------------

URL Link to lab : https://www.freecodecamp.org/learn/javascript-v9/workshop-sentence-analyzer/step-1

js file name: vowel-counter.js
