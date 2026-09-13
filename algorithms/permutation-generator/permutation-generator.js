const permuteString = (str, prefix = "", results = [] ) => {
    if(str.length === 0) {
        results.push(prefix)
        return results;
    };

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const newPrefix = prefix + currentChar;
        const newRemaining = str.slice(0, i) + str.slice(i + 1);

        permuteString(newRemaining, newPrefix, results);
    }

    return results;

}
