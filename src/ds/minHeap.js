import { exec } from "child_process";

// example of prototype inheritance 

function MinHeap() {
    Heap.call(this); // invoke Heap contrcutor
}
// no use of constructor unless if need to override contsructor
// inherit the prototype object 
MinHeap.prototype = Object.create(Heap.prototype);
// MinHeap.prototype =Heap.prototype override heap object
// prototype ={ contructor , .... otherUserPops , __proto__ function object}
// overrding the 
MinHeap.prototype.isHeapSorted = function (index, parentIndex) {
    return this.heap[index] > this.heap[parentIndex];
}
MinHeap.prototype.getMinElem = function () {
    return this.heap[0];
}

function MaxHeap() {
    Heap.call(this);
}
MaxHeap.prototype = Object.create(Heap.prototype); // inherit the prototype object 
// prototype ={ contructor , .... otherUserPops , __proto__ function object}
// overrding the isHeapSorted
MaxHeap.prototype.isHeapSorted = function (index, parentIndex) {
    return this.heap[index] < this.heap[parentIndex];
}


MaxHeap.prototype.getMinElem = function () {
    return this.heap[0];
}



// base function ;
function Heap() {
    this.heap = [];//empty array
    this.currentIndex = 0;

}

Heap.prototype.insert = function (data) {
    if (this.currentIndex === 0) {
        this.heap[this.currentIndex] = data;
        this.currentIndex++;
    } else {
        const parentIndex = this.getParentIndex(this.currentIndex);
        this.heap[this.currentIndex] = data;
        this.sortHeap(this.currentIndex);
        this.currentIndex++;
    }
}

Heap.prototype.getParentIndex = function (index) {
    if (index === 0 || index === 1 || index === 2) {
        return 0;
    }
    return Math.floor((index - 1) / 2);
}

Heap.prototype.sortHeap = function (index) {
    const parentIndex = this.getParentIndex(index);
    if (index === parentIndex) return true;

    if (!this.isHeapSorted(index, parentIndex)) {
        this.swap(index, parentIndex);
        this.sortHeap(parentIndex);
    }
    return true;
}

Heap.prototype.isHeapSorted = function (index, parentIndex) {
    return this.heap[index] > this.heap[parentIndex]
}

Heap.prototype.swap = function (index, parentIndex) {
    const currentElem = this.heap[index];
    this.heap[index] = this.heap[parentIndex];
    this.heap[parentIndex] = currentElem;
    console.log(this.heap);
}

export { MaxHeap };
export default MinHeap;


// using object create  object inheritnace 

// base function ;
// function Heap() {
//     return {
//         heap: [],//empty array
//         currentIndex: 0,
//         insert(data) {
//             if (this.currentIndex === 0) {
//                 this.heap[this.currentIndex] = data;
//                 this.currentIndex++;
//             } else {
//                 const parentIndex = this.getParentIndex(this.currentIndex);
//                 this.heap[this.currentIndex] = data;
//                 this.sortHeap(this.currentIndex);
//             }
//         },
//         getParentIndex(index) {
//             if (index === 0 || index === 1 || index === 2) {
//                 return 0;
//             }
//             return Math.floor((index - 2) / 2);
//         },
//         sortHeap(index) {
//             const parentIndex = this.getParentIndex(index);
//             if (!this.isHeapSorted(index, parentIndex)) {
//                 this.swap(index, parentIndex);
//                 this.sortHeap(parentIndex);
//             }
//             return true;
//         },
//         // isHeapSorted(index, parentIndex) {
//         //     return this.heap[index] > this.heap[parentIndex]
//         // }
//     }


// }



// function MinHeap() {
//     let minheap = Object.create(MinHeap());
//     minheap.isHeapSorted = function (index, parentIndex) {
//         return this.heap[index] > this.heap[parentIndex]
//     }

//     return minheap;
// }


// using class es6 

// class Heap {

//     constructor() {
//         this.heap = [];//empty array
//         this.currentIndex = 0;
//     }

//     insert(data) {
//         if (this.currentIndex === 0) {
//             this.heap[this.currentIndex] = data;
//             this.currentIndex++;
//         } else {
//             const parentIndex = this.getParentIndex(this.currentIndex);
//             this.heap[this.currentIndex] = data;
//             this.sortHeap(this.currentIndex);
//         }
//     }

//     getParentIndex(index) {
//         if (index === 0 || index === 1 || index === 2) {
//             return 0;
//         }
//         return Math.floor((index - 2) / 2);
//     }

//     sortHeap(index) {
//         const parentIndex = this.getParentIndex(index);
//         if (!this.isHeapSorted(index, parentIndex)) {
//             this.swap(index, parentIndex);
//             this.sortHeap(parentIndex);
//         }
//         return true;
//     }

//     isHeapSorted(index, parentIndex) {
//         return this.heap[index] > this.heap[parentIndex]
//     }

// }

// class MinHeap extends Heap {
//     constructor() {
//         super();
//     }
//     isHeapSorted(index, parentIndex) {
//         return this.heap[index] > this.heap[parentIndex]
//     }

//     getMinElem() {
//         return this.heap[0];
//     }

// }

// class MaxHeap extends Heap {
//     constructor() {
//         super();
//     }
//     isHeapSorted(index, parentIndex) {
//         return this.heap[index] < this.heap[parentIndex]
//     }

//     getMaxElem() {
//         return this.heap[0];
//     }

// }

/**Polymorphism */
// *** Polymorphism using method overriding , method overloading (number of params , params type), dynamic binding (bond , call , apply)
// eg isHeapSorted method

//** Inheritance*/ 
// IS-A relationship --- **** Inheritance iss a mechanism in which one object acquires all the properties and behaviors of a parent object.
// sortHeap method among minheap , max heap 
// If a class have an entity reference, it is known as Aggregation. *** Aggregation represents *** HAS-A relationship.
// Heap has array 
// final method , variable to avoid overiding -- Object.freeze() , Object.defineProperty()
// eg const object1 = {};

// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false
//   });

//   object1.property1 = 77;
//   // throws an error in strict mode

//   console.log(object1.property1);

//*** Abstraction */
// Abstraction is a process of hiding the implementation details and showing only functionality to the user // or structure of class 
// There are two ways to achieve abstraction 
// Abstract class (0 to 100%)
// Interface (100%)

//**Encapsulation */
// Encapsulation in Java is a process of wrapping code and data together into a single unit, eg module ,class 
// access modifiers  private , public 

// **** for javascript
// no method overloading in javascript
// The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance.

