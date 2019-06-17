import MinHeap from "./minHeap";

class PriorityQueue extends MinHeap {

    constructor() {
        super();
    }

    isHeapSorted(index, parentIndex) {
        return this.heap[index].priority > this.heap[parentIndex].priority;
    }

    add(item, priority) {
        // item = {priority,data}
        super.insert({ priority, item });
    }
}