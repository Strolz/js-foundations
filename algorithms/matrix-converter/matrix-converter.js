function adjacencyListToMatrix(obj) {
    const keys = Object.keys(obj).map(Number);
    const values = Object.values(obj).flat();
    const allNodes = new Set([...keys, ...values]);
}
