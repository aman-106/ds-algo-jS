export default function bfs(vertices, edges, root) { // bfs easier ot transerse in bi directional graph
    const verticesArray = Object.keys(vertices);
    const toVisit = {};
    verticesArray.map((v) => (
        toVisit[v] = true
    ));
    // console.log(edges, verticesArray, [root], toVisit);
    bfsHelper(edges, verticesArray, [root], toVisit)
    console.log(`
     Depth First Traversals are typically recursive and recursive code requires function call overheads.
    The most important points is, BFS starts visiting nodes from root while DFS starts visiting nodes from leaves. So if our problem is to search something that is more likely to closer to root, we would prefer BFS. And if the target node is close to a leaf, we would prefer DFS.
`)
}

function bfsHelper(edges, verticesArray, currentVextex, toVisit) {
    if (currentVextex.length === 0) {
        return;
    }
    let nextVetexs = [];
    currentVextex.map((v) => {
        if (toVisit[v]) {
            toVisit[v] = false;
            console.log('visted ', v);
            if (edges[v].length) nextVetexs.push(...edges[v]);
        }
    });
    bfsHelper(edges, verticesArray, nextVetexs, toVisit)
}

