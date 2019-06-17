import Graph from '../ds/graph'

// non cyclic 
export default function dfs(vertexs, edges, root) {
    const toVisitVertices = {};
    const verticesArray = Object.keys(vertexs);
    verticesArray.map((v) => (toVisitVertices[v] = true));
    console.log('edges', edges, 'verticesArray', verticesArray)
    dfsHelper(edges, verticesArray, toVisitVertices, root, ''); // leaving the root
    toVisitVertices[root]=false;
    console.log('visited ',root);
}

function dfsHelper(edges, vertexs, toVisitVertices, currentNode, prevNode) {
    if (!edges[currentNode] || edges[currentNode] && !edges[currentNode].length) {
        toVisitVertices[currentNode] = false;
        console.log('visited', currentNode);
    }

    const currentNodeEdges = edges[currentNode];
    currentNodeEdges.map((v) => {
        if (toVisitVertices[v] && !(v == prevNode)) {
            // console.log(toVisitVertices, v, currentNode)
            dfsHelper(edges, vertexs, toVisitVertices, v, currentNode);
            toVisitVertices[v] = false;
            console.log('visited', v);
        }
    })
}