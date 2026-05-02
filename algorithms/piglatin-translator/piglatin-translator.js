function translatePigLatin(word) {

    // Store user input for processing
    let baseWord = word;

    // Store regEx expressions for vowel detection & first vowel position
    const vowels = /^[aeiou]/i;
    const allVowels = /[aeiou]/i;
    const firstVowel = baseWord.match(allVowels);

    // Handle words where the first vowel appears after index 0 (consonant cluster case)
    if(allVowels.test(word) && firstVowel.index !== 0) {
        let addToEnd = baseWord.slice(0, firstVowel.index);
        baseWord = baseWord.slice(firstVowel.index);
        baseWord += addToEnd;
        baseWord += "ay";
        return baseWord;
    }

    // Handle words with no vowels
    if(!allVowels.test(word)) return baseWord += "ay";

    // Handle words with vowels
    if(vowels.test(word)) {
        baseWord += "way";
        return baseWord;
    }
}
