class BasicPriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}    
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight})
        this.adjacencyList[v2].push({node: v1, weight})
    }

    Dijkstra(start, end) {
        const nodes = new PriorityQueue()
        let distance = {}
        let previous = {}
        let smallest;
        let path = []
        //build the initial state - start is 0 and rest of the distance is infinity
        //set the previous for all the edges as null
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distance[vertex] = 0
                nodes.enqueue(vertex, 0)
            }
            else {
                distance[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        // as long as there is something to visit 
        while(nodes.values.length) {
            smallest = nodes.dequeue().val
            if(smallest === end) {
                // We are done
                //build the path 
                while(previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }

            if(smallest || distance[smallest] !== Infinity) {
                for(let neighbour in this.adjacencyList[smallest]) {
                    //find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    //calculate new distance to neighbouring node
                    let candidate = distance[smallest] + nextNode.weight
                    let nextNeighbour = nextNode.node
                    if(candidate < distance[nextNeighbour]) {
                        //updating new smallest distance to neighbour
                        distance[nextNeighbour] = candidate
                        // updating previous - how we got to neighbour
                        previous[nextNeighbour] = smallest
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

