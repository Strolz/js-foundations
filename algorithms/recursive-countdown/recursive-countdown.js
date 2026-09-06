function countdown(number) {
    let countArray = [];
    if(number < 1) {
        return [];
    } else {
        countArray.push(number)
        return countArray.concat(countdown(number - 1))
    }
}
