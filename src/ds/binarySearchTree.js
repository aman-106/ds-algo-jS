
const addDataMethod = Symbol('addDataMethod'); // using private method using symbols 
const findMax = Symbol('findMax');

// or create fn , use bind , call for scope of this
export default class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    createNode(item) {
        return {
            data: item,
            rightNode: null,
            leftNode: null
        };
    }

    compare(root, item) {
        if (item < root.data) {
            return -1; // left
        } else if (root.data === item) {
            return 0; // equal
        }
        return 1; // right node
    }

    addData(item) {
        if (!this.rootNode) {
            this.rootNode = this.createNode(item);
            this.currentNode = this.rootNode;
            return true;
        }
        this.currentNode = this.rootNode;
        const direction = this.compare(this.rootNode, item);
        if (direction === 1) {
            this[addDataMethod](item, "rightNode");
        } else if (direction === -1) {
            this[addDataMethod](item, "leftNode");
        }
    }

    [addDataMethod](item, directedNodePost) {
        if (!this.currentNode[directedNodePost]) {
            this.currentNode[directedNodePost] = this.createNode(item);
            return true;
        }
        this.currentNode = this.currentNode[directedNodePost];
        const direction = this.compare(this.currentNode, item);
        if (direction === 1) {
            this[addDataMethod](item, "rightNode");
        } else if (direction === -1) {
            this[addDataMethod](item, "leftNode");
        }
    }

    [findMax](node) {
        if (node) {
            this.max = node;
            this[findMax](node.rightNode)
        }
        return this.max.data || null;
    }

    getMaxValue() {
        return this[findMax](this.rootNode);
    }


    removeData(item) {
        this.parentNode = null;
        this.delNode = this.rootNode;
        this.delNodeFN(item);
    }

    delNodeFN(item, parentNodeRel) {
        const direction = this.compare(this.delNode, item);

        if (direction === 0 && !this.parentNode) {
            const leftTree = this.rootNode.leftNode;
            this.rootNode = this.delNode.rightNode;
            this.insertNode(this.delNode.rightNode, leftTree);
            return true;
        }
        if (direction === 0 && this.parentNode) {
            const leftTree = this.delNode.leftNode;
            this.parentNode[parentNodeRel] = this.delNode.rightNode;
            this.insertNode(this.delNode.rightNode, leftTree);
            return true;
        }
        this.parentNode = this.delNode;
        if (direction === 1) {
            this.delNode = this.delNode.rightNode;
            this.delNodeFN(item, 'rightNode')
        }
        if (direction === -1) {
            this.delNode = this.delNode.leftNode;
            this.delNodeFN(item, 'leftNode')
        }
    }

    insertNode(rootNode, tree) {

        const cv = (item, directedNodePost) => {
            if (directedNodePost && !this.currentNode[directedNodePost]) {
                this.currentNode[directedNodePost] = tree;
                return true;
            }
            this.currentNode = directedNodePost ? this.currentNode[directedNodePost] : this.currentNode;
            const direction = this.compare(this.currentNode, item);
            if (direction === 1) {
                cv(item, "rightNode");
            } else if (direction === -1) {
                cv(item, "leftNode");
            }
        }

        if (tree) {
            const data = tree.data;
            this.currentNode = rootNode;
            cv(data);
        }


    }

//     inorder(root)
//   Pre: root is the root node of the BST
//   Post: the nodes in the BST have been visited in inorder
//   if root = ø
//     inorder(root.left)
//     yield root.value
//     inorder(root.right)
//   end if
// end inorder

    inOrder(rootNode){
        if(!rootNode) return false;
        this.inOrder(rootNode.leftNode)
        console.log(rootNode.data);
        this.inOrder(rootNode.rightNode);
    }

    printInOderTree(){
        this.inOrder(this.rootNode);
    }


}

  // find max -- righest node

// // x.addData(2);
// p = {}
// function name(p) {
//     p.a = 10;
// }

// name(p)

// console.log(p)

