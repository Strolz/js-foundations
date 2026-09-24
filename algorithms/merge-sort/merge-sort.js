function mergeSort(array) {
    // Base case: arrays of length 1 are already sorted
    if (array.length <= 1) {
        return;
    }

    // Split the array into two halves
    const middlePoint = Math.floor(array.length / 2);
    let leftPart = array.slice(0, middlePoint);
    let rightPart = array.slice(middlePoint);

    // Recursively sort each half
    mergeSort(leftPart);
    mergeSort(rightPart);

    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let sortedIndex = 0;

    // Merge the sorted halves back into the original array
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

    // Copy any remaining values from the left half
    while (leftArrayIndex < leftPart.length) {
        array[sortedIndex] = leftPart[leftArrayIndex];
        leftArrayIndex++;
        sortedIndex++;
    }

    // Copy any remaining values from the right half
    while (rightArrayIndex < rightPart.length) {
        array[sortedIndex] = rightPart[rightArrayIndex];
        rightArrayIndex++;
        sortedIndex++;
    }

}

let numbers = [4, 10, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
mergeSort(numbers);
console.log('Sorted array: ');
console.log(numbers);
