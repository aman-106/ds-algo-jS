export default function linkedList() {
    this.head = null;
    this.currentNode = null;
}

linkedList.prototype.createNode = function () {
    return {
        data: null,
        next: null,
    };
}

linkedList.prototype.add = function (item) {
    const newNode = this.createNode();
    newNode.data = item;
    if (!this.head) {
        this.head = newNode; // first node 
    } else {
        this.currentNode.next = newNode; // link new node to prev node 
    }
    this.currentNode = newNode; // change new node to current node
}

linkedList.prototype.prepend = function (item) {
    const newNode = this.createNode();
    newNode.data = item;
    newNode.next = Object.assign({}, this.head);
    this.head = newNode;
}

linkedList.prototype.toString = function () {
    let node = this.head;
    let i = 0;
    const strdata = [];
    while (node) {
        strdata[i] = JSON.stringify(node.data);
        i++;
        node = node.next
    }
    return strdata;
}

linkedList.prototype.delete = function (item, comparator) {
    let node = this.head;
    let compare = comparator ? comparator : this.defaultComparartor;
    while (node) {
        if (compare(item, node.data)) {
            node.data = node.next.data;
            node.next = node.next.next;
            return true
        } else {
            node = node.next;
        }
    }
    return false;
}

linkedList.prototype.defaultComparartor = function (a, b) { return a === b };
