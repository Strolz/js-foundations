/*

1. You should create a function named spinalCase.
2. spinalCase should take a single argument.
3. spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
4. spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
5. spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
6. spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
7. spinalCase("AllThe-small Things") should return the string all-the-small-things.

 */


// Convert a string into spinal-case (lowercase words separated by hyphens)
function spinalCase(string) {
    let firstString = string.replace(/[^a-zA-Z]+/g, `-`);
    let secondString = firstString.replace(/([a-z])([A-Z])+/g, `$1-$2`);
    let finalString = secondString.replace(/[A-Z]+/g, m => m.toLowerCase());
    return finalString;
}
