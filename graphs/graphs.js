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
}

