import linkesList from './ds/linkedList';
import Trie from './ds/trie.js';
import BinarySearchTree from './ds/binarySearchTree';
import MinHeap from './ds/minHeap';
import Graph from './ds/graph';
import { convertToBaseN, gcd, lcm, findPirmeUptoN, computerPower, } from './algo/math';
import intergerPartation from './algo/integerPartition';
import { bitwiseSubset, recurionSubset } from './algo/subSet';
import { PerformanceObserver, performance } from 'perf_hooks';
import { getPermutateWithReps, getPermuatateWithOutReps } from './algo/permutations';
import { Lcs, getLcs } from './algo/LCS';
import { shortestCommonSupersequence } from './algo/ShortestCommonSupersequence';
import maxSubArrayArray from './algo/maxiumSubarray';
import combinationSum from './algo/combinationSum';
import dfs from './algo/dfs';
import bfs from './algo/bfs';

(function run() {
    console.log('running test file');

    // 
    let ll = new linkesList();
    ll.add('3030');
    ll.add('3031');
    ll.add('3032');

    console.log(ll.toString())

    ll.prepend('3939');
    console.log(ll.delete('3030'));

    console.log(ll.toString())

    console.log('trie')
    let trie = new Trie();
    // trie.addItem(['i']);
    // trie.addItem(['i', 'n']);
    trie.addItem(['i', 'n', 'n']);
    // trie.addItem(['a']);
    trie.toString();


    //
    var x = new BinarySearchTree();
    x.addData(2);
    x.addData(223);
    x.addData(1);
    x.addData(13);
    x.addData(1334);
    x.addData(0);
    console.log(x.rootNode);
    console.log(x.getMaxValue());
    x.removeData(223);
    console.log(x.rootNode);
    x.printInOderTree();

    let mh = new MinHeap();
    mh.insert(10);
    mh.insert(3);
    mh.insert(14);
    mh.insert(2);
    console.log(mh.heap);

    let graph = new Graph();
    graph.addVertices('a');
    graph.addVertices('b');
    graph.addVertices('c');
    graph.addVertices('e');
    graph.addVertices('f');
    graph.addVertices('m');
    graph.addVertices('n');
    graph.addVertices('2');
    graph.addVertices('1');
    graph.addVertices('3');
    graph.addVertices('5');
    graph.addEdge('a', 'b');
    graph.addEdge('a', 'm');
    graph.addEdge('m', 'n');
    graph.addEdge('b', 'c');
    graph.addEdge('c', 'e');
    graph.addEdge('e', 'f');
    graph.addEdge('m', '1');
    graph.addEdge('m', '2');
    graph.addEdge('a', '5');
    console.log(graph);


    console.log(convertToBaseN(9, 2));

    const binaryNum = convertToBaseN(9, 2);

    console.log(gcd(1071, 462))
    console.log(gcd(24, 60))

    console.log(lcm(4, 6));
    findPirmeUptoN(15);

    console.log(computerPower(43, 43));

    let sum = 10;
    let largestNumber = 9;

    // console.log(partition(sum, largestNumber));

    console.log('intergerPartation ' + intergerPartation(100));

    console.log('subset ', bitwiseSubset([1, 2]));
    console.log('subset2 ', recurionSubset([1, 2, 3]));

    getPermutateWithReps(['a', '4', 'n']);
    console.log('*******');

    getPermuatateWithOutReps(['a', '2'])

    console.log('lcs', Lcs('AGGTAB', 'GXTXAYB'));
    console.log('lcs recusive', getLcs('AGGTAB', 'GXTXAYB'))

    console.log('sllds:: ' + shortestCommonSupersequence('geek', 'eke'));
    console.log('sllds:: ' + shortestCommonSupersequence('AGGTAB', 'GXTXAYB'));

    console.log('max sum array > ', maxSubArrayArray([-2, 1, -3, 4, -1, 2, 1, -5]));

    console.log('sldsld ', combinationSum([1, 2], 4))

    console.log('dfs ', dfs(graph.vertices, graph.edges,'a'));

    console.log('bfs ',bfs(graph.vertices, graph.edges,'a'));
})();


