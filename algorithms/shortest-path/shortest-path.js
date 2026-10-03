const INF = Infinity; // Represents “no direct connection” between nodes

// Adjacency matrix: matrix[row][col] = cost from row → col
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];

function shortestPath(matrix, startNode, targetNode = null) {
  const n = matrix.length;
  
  // Distance array: shortest known distance from startNode → each node
  const distances = new Array(n).fill(INF);
  distances[startNode] = 0;

  // Paths array: stores the actual path taken to reach each node
  const paths = Array.from({ length: n }, (_, i) => [i]);

  // Track which nodes have been permanently selected (visited)
  const visited = new Array(n).fill(false);

  // Main loop: runs n times to find shortest paths to all nodes
  for (let i = 0; i < n; i++) {
    let minDistance = INF;
    let current = -1;

    // Find the unvisited node with the smallest known distance
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      if(!visited[nodeNo] && distances[nodeNo] < minDistance) {
        minDistance = distances[nodeNo];
        current = nodeNo;
      }
    }

    // If no reachable node is found, stop early
    if (current === -1) {
      break;
    }

    // Mark this node as permanently visited
    visited[current] = true;

    // Relax edges: try to improve distances to neighbors of current node
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      const distance = matrix[current][nodeNo];

      // Only consider valid edges and unvisited nodes
      if (distance !== INF && !visited[nodeNo]) {
        const newDistance = distances[current] + distance;

        // If new path is cheaper, update distance and path
        if (newDistance < distances[nodeNo]) {
          distances[nodeNo] = newDistance;
          paths[nodeNo] = [...paths[current], nodeNo];
        }
      }
    }
  }

  // If targetNode is provided, only output that one
  const targets = targetNode !== null ? [targetNode] : [...Array(n).keys()];

  // Print results for each target
  for(const nodeNo of targets) {

    // Skip startNode and unreachable nodes
    if(nodeNo === startNode || distances[nodeNo] === INF) {
      continue;
    }

    const path = paths[nodeNo].join(' -> ');
    console.log(`\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`);
  }

  
  return [distances, paths];
}

shortestPath(adjMatrix, 0, 5);
