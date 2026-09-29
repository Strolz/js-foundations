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

Step 5
=======

Step 6
=======

Step 7
=======

Step 8
=======

Step 9
=======

Step 10
=======

Step 11
=======

Step 12
=======

Step 13
=======

Step 14
=======

Step 15
=======

Step 16
=======

Step 17
=======

Step 18
=======

Step 19
=======

Step 20
=======

Step 21
=======

Step 22
=======

Step 23
=======

Step 24
=======

Step 25
=======

Step 26
=======
