export default class Trie {
    constructor() {
        this.rootNode = {
            associativeNode: [],
        };
    }

    createTrieNode(item) {
        return {
            data: item,
            nodeFootPrint: 1,
            associativeNode: [],
        }
    }

    add(currentAssociativeNode, item) {
        // currentAssociativeNode = currentNode.associativeNode;
        console.log('currentAssociativeNode', currentAssociativeNode)
        if (currentAssociativeNode.length) {
            const existingNode = currentAssociativeNode.find((node) => node.data === item);
            if (existingNode) {
                existingNode.nodeFootPrint++;
                return existingNode.associativeNode;
            } else {
                const newNode = this.createTrieNode(item);
                currentAssociativeNode.push(newNode);
                return newNode.associativeNode;
            }
        } else {
            const newNode = this.createTrieNode(item)
            currentAssociativeNode.push(newNode);
            return newNode.associativeNode;
        }
    }

    addItem(item) {
        if (Array.isArray(item)) {
            let currentAssociativeNode = this.rootNode.associativeNode;
            for (const iterator of item) {
                console.log('associativeNode', currentAssociativeNode);
                console.log('iterator', iterator);
                currentAssociativeNode = this.add(currentAssociativeNode, iterator);
            }
            return true;
        }
        console.log('invalid format of input')
        return false;
    }


    toString() {
        // dfs
        function getNodeInfo(node) {
            if (!node.associativeNode.length) {
                console.log(node.data, node.nodeFootPrint);
                return true;
            }
            node.associativeNode.map((node) => getNodeInfo(node))
        }
        return getNodeInfo(this.rootNode);
    }
}
