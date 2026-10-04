function adjacencyListToMatrix(obj) {
    const keys = Object.keys(obj).map(Number);
    const values = Object.values(obj).flat();
    const allNodes = new Set([...keys, ...values]);

    const numNodes = allNodes.size;

    const matrix = Array.from({ length: numNodes }, () =>
        new Array(numNodes).fill(0)
    );

    for (const fromNodeStr in obj) {
        const fromNode = Number(fromNodeStr);
        const neighbors = obj[fromNodeStr];

        for (const toNode of neighbors) {
            matrix[fromNode][toNode] = 1;
            }
    }
}
