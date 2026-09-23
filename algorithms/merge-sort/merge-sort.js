function mergeSort(array) {
    const middlePoint = Math.floor(array.length / 2);
    let leftPart = array.slice(0, middlePoint);
    let rightPart = array.slice(middlePoint);

    mergeSort(leftPart);
    mergeSort(rightPart);

    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let sortedIndex = 0;

    while (leftArrayIndex < leftPart.length && rightArrayIndex < rightPart.length) {
        if(leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
            array[sortedIndex] = leftPart[leftArrayIndex];
            leftArrayIndex++
        } else {
            array[sortedIndex] = rightPart[rightArrayIndex];
            rightArrayIndex++
        }

        sortedIndex++;
    }

    while (leftArrayIndex < leftPart.length) {
        array[sortedIndex] = leftPart[leftArrayIndex];
        leftArrayIndex++;
    }

}
