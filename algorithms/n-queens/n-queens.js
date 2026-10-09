function dfsNQueens(n) {
    if (n < 1 ) {
        return [];
    }

    const solutions = [];
    const current = []; 

    function isSafe(row, col) {
        for (let r = 0; r < row; r++) {
            if (current[r] === col) {
                return false;
            }
        }
        
        for (let r = 0; r < row; r++) {
            if (Math.abs(row - r) === Math.abs(col - current[r])) {
                return false;
            }
        }

        return true;
    }

    function dfs(row) {
    
    }

    dfs(0);

    return solutions;
}
