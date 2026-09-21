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
    }
    break
    }
    return [];
}
