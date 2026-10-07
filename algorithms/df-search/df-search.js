function dfs(graph, root) {
    const visited = new Array(graph.length).fill(false);
    const stack = [root];
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop();
    
        if (visited[node]) {
            continue;
        }

        visited[node] = true;

        result.push(node);
    }
}
