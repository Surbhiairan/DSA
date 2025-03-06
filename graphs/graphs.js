class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!== v1)

    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacenctVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacenctVertex)
        }
        delete this.adjacencyList[vertex]
    }

    DFSRecursive(vertex) {
        let result = []
        let visitedVertex = {}
        let adjacencyList = this.adjacencyList
        (function DFS(v) {
            if(!v) return null
            visitedVertex[v] = true
            result.push(v)
            adjacencyList[v].forEach(element => {
                if(!visitedVertex[element]) {
                    return DFS(element)
                }
            });
        })(vertex)
        return result
    }

    DFSIterative(vertex) {
        let stack = []
        let result = []
        let visitedVertex = {}
        stack.push(vertex)
        visitedVertex[vertex] = true
        while(stack.length) {
            let v = stack.pop()
            result.push(v)
            this.adjacencyList[v].forEach(element => {
                if(!visitedVertex[element]) {
                    visitedVertex[element] = true
                    stack.push(element)
                }
            })

        }
        return result;
    }

    BFS(vertex) {
        let queue = [vertex]
        let result = []
        let visitedVertex = {}
        visitedVertex[vertex] = true
        while(queue.length) {
            let v = queue.shift()
            result.push(v)
            this.adjacencyList[v].forEach(element => {
                if(!visitedVertex[element]) {
                    visitedVertex[element] = true
                    queue.push(element)
                }
            })

        }
        return result;
    }

    dfs(adjacencyList, vertex, visited) {
        console.log(vertex)
        visited[vertex] = true
        for(let i = 0; i < adjacencyList[vertex].length; i++) {
            if(!visited[adjacencyList[vertex][i]]) {
                this.dfs(adjacencyList, adjacencyList[vertex][i], visited)
            }
        }
    }

    checkCycleInUndirectedGraph(vertex) {
        let visited = {}
        let adjacencyList = this.adjacencyList
        function isCyclic(vertex, parent) {
            visited[vertex] = true
            for(let i=0; i< adjacencyList[vertex].length; i++) {
                let v= adjacencyList[vertex][i]
                if(!visited[v]) {
                    if(isCyclic(v, vertex)) {
                        return true
                    }
                } else {
                    if(visited[v] && v !== parent) {
                        return true
                    }
                }
            }
            return false
        }
        return isCyclic(vertex, -1)
        
    }

    checkCycleInDirectedGraph(n) {
        let visited = {}
        let path = {}
        let adjacencyList = this.adjacencyList
        for(let node =0; node< n; node++) {
            if(!visited[node]) {
                if(isCyclic(node, path)) {
                    return true
                }
            }
        }
        function isCyclic(node, path) {
            visited[node] = true
            path[node] = true
            for(let neighbour of node) {
                if(!visited[neighbour]) {
                    if(isCyclic(neighbour, path)) {
                        return true
                    }
                } else if(path[neighbour]) {
                    return true
                }
            }
            path[node] = false
            return false
        }
    }
}

