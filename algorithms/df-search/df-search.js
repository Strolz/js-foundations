function dfs(graph, root) {
    // Track which nodes we've already visited
    const visited = new Array(graph.length).fill(false);

    // Stack for DFS, start with the root node
    const stack = [root];

    // Result list of reachable nodes
    const result = [];

    // Main DFS loop
    while (stack.length > 0) {
        const node = stack.pop();

        // If we've already visited this node, skip it
        if (visited[node]) {
            continue;
        }

        // Mark as visited
        visited[node] = true;

        // Add to result
        result.push(node);

        for (let neighbor = 0; neighbor < graph.length; neighbor++) {

            // If there's an edge from node to neighbor and neighbor not visited, push it
            if (graph[node][neighbor] === 1 && !visited[neighbor]) {
                stack.push(neighbor);
            }
        }
    }

    return result;
}
