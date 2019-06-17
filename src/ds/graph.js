export default class Graph {
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }

    addVertices(vertex) {
        this.vertices[vertex] = {
            data: vertex,
        };
    }

    addEdge(startVertex, endVertex) {
        if (!this.edges[startVertex]) {
            const edges = [];
            edges.push(endVertex);
            this.edges[startVertex] = edges;
            // return this.edges[startVertex]; 
        } else {
            this.edges[startVertex].push(endVertex);
        }

        if (!this.isDirected) {
            if (!this.edges[endVertex]) {
                const edges = [];
                edges.push(startVertex);
                this.edges[endVertex] = edges;
                // return this.edges[startVertex]; 
            } else {
                this.edges[endVertex].push(startVertex);

            }
        }
    }


}