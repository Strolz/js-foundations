function selectionSort(arr) {
    // store the current value before overwriting it
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i;

        // place the smallest found value into the current position
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
            min = j;
            }
        }

    // move the original value into the minIndex position
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

    }

    return arr;

}
