
export default function stack() {
    this.stack = {};
    this.stackHeight = 0;
}

stack.prototype.push = function (item) {
    this.stack[this.stackHeight] = item;
    this.stackHeight++;
};

stack.prototype.pop = function (item) {
    this.stack[this.stackHeight - 1] = null;
    this.stackHeight--;
}

stack.prototype.find = function (item, comparator) {
    let comparartorFn = comparator;
    if (! typeof comparator === 'function') {
        comparartorFn = this.defaultComparartor;
    }
    for (const stackItem of this.stack) {
        if (comparartorFn(item, stackItem)) {
            return true
        }
        return false;
    }
}

stack.prototype.accessReference = function (item, comparator) {
    let comparartorFn = comparator;
    if (! typeof comparator === 'function') {
        comparartorFn = this.defaultComparartor;
    }
    let itemRef = 0;
    for (const stackItem of this.stack) {
        itemRef++;
        if (comparartorFn(item, stackItem)) {
            return this.stack[itemRef];
        }
        return null;
    }
}

stack.prototype.defaultComparartor = function (a, b) { return a === b };