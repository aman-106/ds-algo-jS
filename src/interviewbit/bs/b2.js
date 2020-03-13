// https://www.interviewbit.com/problems/allocate-books/

// Given an array of integers A of size N and an integer B.

// College library has N bags,the ith book has A[i] number of pages.

// You have to allocate books to B number of students so that
// maximum number of pages alloted to a student is minimum.

// A book will be allocated to exactly one student.
// Each student has to be allocated at least one book.
// Allotment should be in contiguous order,
// for example: A student cannot be allocated book 1 and book 3, skipping book 2.
// Calculate and return that minimum possible number.

// NOTE: Return -1 if a valid assignment is not possible.

// Input Format

// The first argument given is the integer array A.
// The second argument given is the integer B.
// Output Format

// Return that minimum possible number

// Input 1:
//     A = [12, 34, 67, 90]
//     B = 2
// Output 1:
//     113
// Explanation 1:
//     There are 2 number of students. Books can be distributed in following fashion :
//         1) [12] and [34, 67, 90]
//         Max number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages
//         2) [12, 34] and [67, 90]
//         Max number of pages is allocated to student 2 with 67 + 90 = 157 pages
//         3) [12, 34, 67] and [90]
//         Max number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages

//         Of the 3 cases, Option 3 has the minimum pages = 113.

// Input 2:

const allocateBookHelper = (books, chosenStudent) => {
  console.log("ddjd23456", this.books);

  let tempBooks = [...this.selectedBooks];
  for (let index = 0; index < this.selectedBooks.length - 1; index++) {
    // const element = this.selectedBooks[index];
    tempBooks = minArray(
      possibleBooks(this.selectedBooks, chosenStudent, index),
      possibleBooks(this.selectedBooks, chosenStudent, index + 1)
    );
  }
  this.selectedBooks = tempBooks;
  chosenStudent++;
  console.log(
    this.books.length < chosenStudent,
    this.books.length,
    chosenStudent
  );
  //   return [];
  if (this.books.length > chosenStudent) {
    allocateBookHelper(this.selectedBooks, chosenStudent);
  }
};

function minArray(ar1, ar2) {
  let m1 = Math.max(...ar1);
  let m2 = Math.max(...ar2);

  return m1 <= m2 ? ar1 : ar2;
}

const possibleBooks = (selectedBooks, chosenStudent, index) => {
  console.log("dkdk", selectedBooks, chosenStudent, index);
  let selectedBookscopy = [...selectedBooks];
  if (index === selectedBookscopy.length - 1) {
    selectedBookscopy[index] =
      selectedBookscopy[index] + this.books[chosenStudent];
  } else {
    selectedBookscopy[index] =
      selectedBookscopy[index] + selectedBookscopy[index + 1];
    selectedBookscopy = selectedBookscopy.filter(function(elem) {
      return elem !== selectedBookscopy[index + 1];
    });
    //     console.log("dkdk3", selectedBookscopy, this.books[chosenStudent]);
    selectedBookscopy.push(this.books[chosenStudent]);
  }
  console.log("dkdk2", selectedBookscopy);
  return selectedBookscopy;
};

A = [5, 9, 7];
B = 2;
// Output 2:
//     100

console.log(allocateBook(A, B));

function allocateBook(books, student) {
  if (books.length < student) {
    return -1;
  }

  if (books.length === student) {
    return books;
  }

  if (student === 1) {
    let sum = books.reduce(function(a, arr) {
      return (arr = arr + a);
    }, 0);

    return [sum];
  }

  this.books = books;
  this.selectedBooks = [...books].splice(0, student);
  allocateBookHelper(this.selectedBooks, this.selectedBooks.length);
  return this.selectedBooks;
}
