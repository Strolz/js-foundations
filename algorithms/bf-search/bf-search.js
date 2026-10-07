function genParentheses(pairs) {
   
     // Validate: input must be an integer
    if(!Number.isInteger(pairs)) {
        return "The number of pairs should be an integer"
    }

    // Validate: must generate at least one pair
    if (pairs < 1) {
        return 'The number of pairs should be at least 1'
    }
  
    // BFS queue: each state = [currentString, opensUsed, closesUsed]
    let queue = [['', 0, 0]];  
    let result = [];

    // Process states until queue is empty 
    while (queue.length > 0) {

        // Destructure the next state from the queue
        let [current, opensUsed, closesUsed] = queue.shift();
        
        // If the current string is complete, store it
        if (current.length === 2 * pairs) {
            result.push(current);
        } else {
            
            // Add '(' if we still have opens left to use
            if (opensUsed < pairs) {
                queue.push([current + '(', opensUsed + 1, closesUsed])
            }

            // Add ')' only if it won't break validity
            // (can't close more than we've opened)
            if (closesUsed < opensUsed) {
                queue.push([current + ')', opensUsed, closesUsed + 1]);
            }
        }
    }

    return result;

}

console.log(genParentheses(2));
console.log(genParentheses(3));
