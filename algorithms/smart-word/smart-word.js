/*

1. You should create a function named myReplace.
2. myReplace should take three arguments.
3. myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
4. myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
5. myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
6. myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
7. myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
8. myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

 */

function myReplace(string, replace, word) {
    
    // Store input for processing 
    let baseString = string;

    // Create regex for provided word detection
    const regex = new RegExp(replace, "i");
   
    // Identify the index of the matched word
    const wordPlace = string.match(regex);
    const swapIndex = wordPlace.index

    // Retain case sensitivity when replacing word
    if(string[swapIndex] === string[swapIndex].toUpperCase()) { 
        return baseString.replace(regex, word[0].toUpperCase() + word.slice(1));
    } else if(string[swapIndex] === string[swapIndex].toLowerCase()) {
        return baseString.replace(regex, word[0].toLowerCase() + word.slice(1));
    }

    return baseString.replace(regex, word);

}
