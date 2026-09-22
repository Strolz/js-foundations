const binarySearch = (searchList, value) => {
    let pathToTarget = [];
    const low = 0;
    const high = searchList.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high)/ 2);
        const valueAtMiddle = searchList[mid];
        pathToTarget.push(valueAtMiddle);  

        if(value === valueAtMiddle) {
            return pathToTarget;
        } else if (value > valueAtMiddle) {
            low = (mid + 1);
        } else {
            high = mid - 1;
        }
    }
    return [[], "Value not found"];
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));
