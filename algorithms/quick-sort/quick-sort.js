function quicksort(arr) {
    
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choosing the last element as the pivot
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Partition elements into left and right arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort sub-arrays and combine them with the pivot
    return [...quicksort(left), pivot, ...quicksort(right)];

}
