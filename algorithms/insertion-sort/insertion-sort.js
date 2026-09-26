function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        
        // insertion step 
        let key = arr[i];
        let j = i - 1;
    
    // shift larger elements right during backward scan
    while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
  return arr;
}
