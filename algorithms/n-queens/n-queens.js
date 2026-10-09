function dfsNQueens(n) {
    // Handle edge case
    if (n < 1 ) {
        return [];
    }

    // Prepare containers
    const solutions = [];
    const current = []; 

    // safety checks
    function isSafe(row, col) {
        // column check
        for (let r = 0; r < row; r++) {
            if (current[r] === col) {
                return false;
            }
        }

        // major diagonal check 
        for (let r = 0; r < row; r++) {
            if (Math.abs(row - r) === Math.abs(col - current[r])) {
                return false;
            }
        }

        // anti-diagonal check
        for (let r = 0; r < row; r++) {
            if (Math.abs(row - r) === Math.abs(col - current[r])) {
                return false;
            }
        }

        return true;
    }

    // Recursive engine
    function dfs(row) {
        
        // base case: all rows filled
        if (row === n) {
            solutions.push([...current]); // store a copy
            return;
        }

        // try each column in the current row
        for (let col = 0; col < n; col++) {

            // skip column if unsafe
            if(!isSafe(row, col)) {
                continue;
            }

            // place the queen
            current[row] = col;

            // recurse to next row
            dfs(row + 1);
            
            // then backtrack 
            current[row] = undefined;

        }
    }

    dfs(0);

    return solutions;
}
