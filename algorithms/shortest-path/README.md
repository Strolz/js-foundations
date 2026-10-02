Step 1
=======

In this workshop, you will implement the shortest path algorithm in JavaScript. You will write a function that computes the shortest path between nodes in a weighted graph and returns both the distances and the paths taken.

For example, given a graph where cities are connected by roads with different distances, the algorithm will find the shortest route from one city to another. If you want to travel from City A to City D, the algorithm might find that going A ⇨ B ⇨ C ⇨ D (total: 15km) is shorter than going directly A ⇨ D (20km).

To get started, define a variable named INF and assign it the value Infinity. Later, you'll use it to indicate that there is no direct connection between two nodes.

Step 2
=======

You will need a 2D array to represent the adjacency matrix of the graph. Each value represents the weight (distance) of the edge between two nodes. A value of INF means there is no direct edge.

Create another variable named adjMatrix and assign it a 2D array with the following values:

Example Code
[0, 5, 3, INF, 11, INF],
[5, 0, 1, INF, INF, 2],
[3, 1, 0, 1, 5, INF],
[INF, INF, 1, 0, 9, 3],
[11, INF, 5, 9, 0, INF],
[INF, 2, INF, 3, INF, 0]

Step 3
=======

Now you will create the main function that does all the work.
Create a function named shortestPath that takes three parameters: matrix, startNode, and targetNode.

Over the next few steps, you will build out the logic for this function.

Step 4
=======

The targetNode parameter is optional. When not provided, the function will compute shortest paths from startNode to all other nodes in the graph.

Give the targetNode parameter a default value of null.

Step 5
=======

You need to store the number of nodes in the graph.
Inside the shortestPath function, create a variable named n and assign it matrix.length.

Step 6
=======

You need to keep track of the shortest known distance from the start node to every other node. To begin, you'll assume every node is infinitely far away.

In JavaScript, you can create an array pre-filled with a value using new Array(n).fill(value). For example, new Array(3).fill(0) creates [0, 0, 0].

Inside the shortestPath function, create a variable named distances and assign it new Array(n).fill(INF).

Step 7
=======

The distance from the starting node to itself is always 0. You have to update the distances array to reflect this.

After the distances array, set distances[startNode] to 0.

Step 8
=======

You also need to track the actual path taken to reach each node. You will store a list of paths where each entry is an array of node indices representing the route taken.

Initially, each node's path will just contain itself. You can create this structure using Array.from():

Example Code
Array.from({ length: n }, (_, i) => [i]);
This creates an array of n elements, where the element at index i is [i].

Still within the shortestPath function, create a variable named paths and assign it Array.from({ length: n }, (_, i) => [i]).

Step 9
=======

As the algorithm runs, you need to track which nodes have already been processed so you don't revisit them.

Create a variable named visited and assign it new Array(n).fill(false).

Step 10
=======

Now you'll add the main loop that drives the algorithm. It runs once for each node in the graph, selecting the closest unvisited node each time.

Inside the shortestPath function, add a for loop that runs n times using i as the loop variable.

At the start of the loop body, using let, declare two variables minDistance and current set to INF, and -1 respectively. These will track the closest unvisited node found in each iteration.

Step 11
=======

Inside the loop, you need to scan every node to find the one with the smallest known distance that hasn't been visited yet.

Add a for loop inside the main loop that iterates through each node. Use nodeNo as the loop variable going from 0 to n.

Leave the body empty for now.

Step 12
=======

Inside the inner for loop, you need to check whether the current node is unvisited and closer than the best you've found so far.

Add an if statement that checks if nodeNo has not been visited and distances[nodeNo] is less than minDistance.

Leave the body empty for now.

Step 13
=======

If the condition is true, the current node is the best unvisited candidate found so far. You need to update your tracking variables to reflect that.

Inside the if statement, update minDistance to distances[nodeNo] and current to nodeNo.

Step 14
=======

After scanning all nodes to find the closest unvisited one, you need to handle the case where no valid node is found. This happens when all remaining nodes are unreachable.

After the inner for loop, but still inside the outer loop, add an if statement that checks if current is strictly equal to -1. If that is true, use break inside the if block to stop the outer loop early.

Step 15
=======

Once you've confirmed a valid node was found, mark it as visited so the algorithm won't process it again.

After the if statement with the condition current === -1, set visited[current] to true.

Step 16
=======

Now that the current node is marked as visited, you need to look at all its neighbors to see if you can reach them more efficiently through the current node.

After visited[current] = true, add a neighbor for loop that iterates through each nodeNo from 0 to n. Note that this is another inner loop on the same level as the first.

Inside the loop, declare a variable named distance and assign it matrix[current][nodeNo]. This gives you the edge weight between the current node and its neighbor.

Step 17
=======

Before updating distances, you need to verify the neighbor is worth considering. There must be an actual edge to it (distance !== INF) and it must not have been visited yet.

Inside the neighbor for loop, add an if statement that checks if distance is not strictly equal to INF and if nodeNo is not visited.

Inside the if block, declare a variable newDistance assigned to distances[current] + distance. This is the total cost of reaching the neighbor through the current node.

Step 18
=======

Now you should check whether going through the current node gives a shorter route to the neighbor. If newDistance is better than what's already stored, then you should update it.

Inside the existing if block, add a nested if statement that checks if newDistance is less than distances[nodeNo]. Inside that nested if block, update distances[nodeNo] to newDistance.

Step 19
=======

When you find a shorter path to a neighbor, you also need to update the recorded path to reach it.

In JavaScript, you can create a new array combining an existing array and a new element using the spread operator:

Example Code
const newPath = [...existingArray, newElement];

Inside the nested if block, update paths[nodeNo] to be the path to the current node with nodeNo appended at the end using spread syntax like so: [...paths[current], nodeNo].

Step 20
=======

Once the main loop finishes, you need to decide which node(s) to display results for.

If a specific targetNode was provided, only show results for that node. Otherwise, show results for all nodes.

In JavaScript, you can get all indices of an array as an iterable using [...Array(n).keys()].

After the outer for loop, create a variable named targets. Using a ternary expression, if targetNode is strictly not null, assign [targetNode], otherwise assign [...Array(n).keys()].

Step 21
=======

Now loop through the target nodes to display results for each one.

Add a for...of loop that iterates over targets using nodeNo as the loop variable. Leave the body empty for now.

Step 22
=======

You only want to display results for nodes that are reachable and different from the start node.

Inside the for...of loop, add an if statement that checks if nodeNo is strictly equal to startNode or distances[nodeNo] is strictly equal to INF. If either is true, use continue inside the if block to skip to the next iteration.

Step 23
=======

Now that you know the node is reachable and not the start, format its path into a readable string.

The paths[nodeNo] array holds the sequence of node indices visited to reach nodeNo. You can turn that into a human-readable string like 0 -> 2 -> 3 using the .join() method.

Inside the for...of loop, after the if statement with continue, declare a variable named path and assign it the value paths[nodeNo].join(' -> ').

Step 24
=======

Now, you should print the result for each reachable node.

After the path variable, add a console.log() call with a template literal that outputs:

Example Code
\n{startNode}-{nodeNo} distance: {distances[nodeNo]}\nPath: {path}
For example, if startNode is 0 and nodeNo is 3, the output should look like this:

Example Code
0-3 distance: 4
Path: 0 -> 2 -> 3

Step 25
=======

Step 26
=======
