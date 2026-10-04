function adjacencyListToMatrix(obj) {
    
    // 1. Collect all distinct nodes from keys and values
    const keys = Object.keys(obj).map(Number);
    const values = Object.values(obj).flat();
    const allNodes = new Set([...keys, ...values]);

    // 2. Total number of nodes
    const numNodes = allNodes.size;

    // 3. Initialize numNodes × numNodes matrix with 0s
    const matrix = Array.from({ length: numNodes }, () =>
        new Array(numNodes).fill(0)
    );

    // 4. Fill matrix: for each edge from node → neighbor, set matrix[node][neighbor] = 1 
    for (const fromNodeStr in obj) {
        const fromNode = Number(fromNodeStr);
        const neighbors = obj[fromNodeStr];

        for (const toNode of neighbors) {
            matrix[fromNode][toNode] = 1;
            }
    }

    for (const row of matrix) {
        console.log(row);
    }

    return matrix;
}
