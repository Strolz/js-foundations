
/*

1. You should have a function named diffArray.
2. The diffArray function should use the filter method to filter out items that are present in both arrays.
3. diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"].
4. diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return ["diorite", "pink wool"].
5. diffArray should return an empty array when called with two identical arrays.
6. diffArray(["pen", "book"], ["book", "pencil", "notebook"]) should return ["pen", "pencil", "notebook"].
7. diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]) should return ["car", "train", "plane"].
8. diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]) should return ["banana", "grape"].
9. diffArray([], ["apple", "banana"]) should return ["apple", "banana"].
10. diffArray(["apple", "banana"], []) should return ["apple", "banana"].
11. diffArray([], []) should return [].

*/

function diffArray(arr1, arr2) {

    /* Check if provided arrays are empty */
    if(arr1.length == 0 && arr2.length == 0) return [];

    /* Filter out any matching values appearing in both arrays */
    if(arr1.length > arr2.length) return arr1.filter(word => !arr2.includes(word));
    if(arr1.length < arr2.length) return arr1.filter(word => !arr2.includes(word))
        .concat(arr2.filter(word => !arr1.includes(word)));

    /* No matching values in both arrays */
    return [];
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
