function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum) return [];
    const arr = rangeOfNumbers(start, end - 1);
    arr.push(end);
    return arr;
}
