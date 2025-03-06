/**
 * Can only be applied to directed acyclic graph (DAG)
 */

//DFS + stack
function topologicalSort(vertices, edges) {
    // Step 1: Initialize adjacency list and in-degree
    const adjList = new Map();
    for (let i = 0; i < vertices; i++) {
        adjList.set(i, []);
    }
    edges.forEach(([u, v]) => {
        adjList.get(u).push(v);
    });

    const visited = new Set()
    const stack = []
    let hasCycle = false

    function dfs(vode, visiting) {
        if(!visiting.has(node)){}
    }
}