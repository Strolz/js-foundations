/*

1. You should have a destroyer function.
2. destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
3. destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
4. destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
5. destroyer([2, 3, 2, 3], 2, 3) should return [].
6. destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
7. destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ) should return [12, 92, 65].

*/

/* Filter provided items out of the array */
function destroyer(array, ...items) {
    return array.filter(index => !items.includes(index));
}
