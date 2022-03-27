class Graph {
    constructor () {
        this.graphNodes = new Set();
        this.graph = new Map();
        this.edges = [];
    }

    addEdge (nodeA, nodeB) {
        this.edges.push([nodeA, nodeB]);
    }

    convertEdgesToGraph () {}
    iterateEdges () {
        console.log(`I am here in edges ${this.edges}`);
        const edges = this.edges;
        let graph = {};
        for (let edge in edges) {
            let [node1, node2] = edges[edge];
            if (!graph[node1]) graph[node1] = [];
            if (!graph[node2]) graph[node2] = [];
            graph[node1].push(node2);
            graph[node2].push(node1);
        }
        return graph;
    }
    adjacencyList () {
        const edges = this.edges;

        for (let edge in edges) {
            let [node1, node2] = edges[edge];
            if (!this.graph.has(node1)) this.graph.set(node1, []);
            if (!this.graph.has(node2)) this.graph.set(node2, []);

            this.graph.set(node1, [...this.graph.get(node1), node2]);
            this.graph.set(node2, [...this.graph.get(node2), node1]);
        }
        return this.graph;
    }

    removeVertex (node) {
        let updateNei = this.graph.get(node);
        console.log("Need to update..", updateNei);
        updateNei.forEach(element => {
            let ajl = this.graph.get(element);
            console.log("___", element, "has", ajl);
            let filtered = ajl.filter(val => {
                if (val == node) {
                    return false;
                } else {
                    return true;
                }
            });
            this.graph.set(element, filtered);
        });
        this.graph.delete(node);
        console.log(this.graph);
    }
}

const graph = new Graph();
graph.graphNodes = ["A", "B", "C", "D"];
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
console.log(graph.adjacencyList());
graph.removeVertex("B");
