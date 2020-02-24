// https://www.interviewbit.com/problems/merge-overlapping-intervals/

// Given a collection of intervals, merge all overlapping intervals.

// For example:

// Given [1,3],[2,6],[8,10],[15,18],

// return [1,6],[8,10],[15,18].

// Make sure the returned intervals are sorted.

// pick a elem check other lie in that , if lies upper or lower bound n * n

[4, 10][(1, 2)][(9, 16)];

// create bounds with ist elem
// loop for elems , for a elem check it is bounds map change bound for matching obj otherwise new bound
// sort the elems

function overlaps(bounds, interval) {
  let overlapped = false;
  for (let bound of bounds) {
    //     console.log(bound ,interval, bound.start <= interval.start && interval.start <= bound.end)

    // min(a,b) > min(d,e) it overlaps
    if (
      (bound.start <= interval.start && interval.start <= bound.end) ||
      (bound.start <= interval.end && interval.end <= bound.end)
    ) {
      overlapped = true;
      bound.start =
        bound.start <= interval.start ? bound.start : interval.start; // lower
      bound.end = bound.end <= interval.end ? interval.end : bound.end; // upper
    }
  }

  if (!overlapped) {
    bounds.push(Object.assign({}, interval));
  }

  return bounds;
}

function mergeOverlapping(intervals) {
  let bounds = [];
  bounds.push(intervals[0]);

  intervals.map(function(elem) {
    bounds = overlaps(bounds, elem);
  });

  bounds = bounds.sort(function(a, b) {
    return a.start - b.start;
  });
  //   console.log(bounds);

  return bounds;
}

// let a = [
//   {
//     start: 4,
//     end: 10
//   },
//   {
//     start: 1,
//     end: 1
//   },
//   {
//     start: 1,
//     end: 1
//   }
// ];
mergeOverlapping(a);

// got complected using linked list for sort
// todo , check interval overlap and edit that overlap in linked list

// function overlaps(bounds, interval) {
//   let overlapped = false;
//     console.log(bounds)

//   for (const bound of bounds) {
//     if (
//       (bound.start <= interval.start && interval.start <= bound.end) ||
//       (bound.start <= interval.end && interval.end <= bound.end)
//     ) {
//       overlapped = true;
//       bound.start =
//         bound.start <= interval.start ? bound.start : interval.start;
//       bound.end = bound.end <= interval.end ? bound.end : interval.end;
//     }
//   }

//   if (!overlapped) {
//     // bounds.push();
//     bounds.add(Object.assign({}, interval));
//   }

//   return bounds;
// }

// class Bounds {
//   constructor(item) {
//     this.head = null;
//     if (item) {
//       const newNode = this.createNode();
//       newNode.data = item;
//       this.head = newNode;
//     }
//   }

//   add(item) {
//     const newNode = this.createNode();
//     newNode.data = item;
//     this.prevNode = this.head;
//     this.prevAppedNode = this.head;;
//     this.addHelper(newNode, this.head);
//   }

//   addHelper(newNode, currentNode) {
//     console.log(newNode, currentNode)
//     if (!currentNode) {
//       this.prevNode.next = newNode;
//       return;
//     }

//     if (newNode.data.start < currentNode.data.start) {
//       if(currentNode===this.head){
//                  const prevNode = currentNode;
//       currentNode = newNode;
//       newNode.next = prevNode;
//       this.head = newNode;
//       this.prevAppedNode = newNode;
//       }else{
//          const prevNode = currentNode;
//         currentNode = newNode;
//         newNode.next = prevNode;
//         this.prevAppedNode.next = newNode;
//       }

//       return;

//     } else {
//       this.prevNode = currentNode;
//       this.addHelper(newNode, currentNode.next);
//     }
//   }

//   [Symbol.iterator]() {
//     // return this.getList();
//         let currentNode = this.head;
//     const list = [];
//     while (currentNode) {
//       list.push(currentNode.data);
//       currentNode = currentNode.next;
//     }
//     return list.values();
//   }

//   getList() {
//     let currentNode = this.head;
//     const list = [];
//     while (currentNode) {
//       list.push(currentNode.data);
//       currentNode = currentNode.next;
//     }
//     return list;
//   }

//   createNode() {
//     return {
//       data: null,
//       next: null
//     };
//   }
// }

// function mergeOverlapping(intervals) {
//   // let bounds = [];
//   let bounds = new Bounds(intervals[0]);
//   // bounds.push();

//   intervals.map(function(elem) {
//     bounds = overlaps(bounds, elem);
//   });

// //   console.log(bounds.getList());
// }

// let a = [
//   {
//     start: 4,
//     end: 6
//   },

//   {
//     start: 14,
//     end: 16
//   },
//     {
//     start: 10,
//     end: 12
//   },
// ];
mergeOverlapping(a);
