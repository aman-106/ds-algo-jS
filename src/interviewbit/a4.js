// https://www.interviewbit.com/problems/hotel-bookings-possible/

// A hotel manager has to process N advance bookings of rooms for the next season.
// His hotel has K rooms. Bookings contain an arrival date and a departure date.
// He wants to find out whether there are enough rooms in the hotel to satisfy the demand.
//  Write a program that solves this problem in time O(N log N) .

// Input:

// First list for arrival time of booking.
// Second list for departure time of booking.
// Third is K which denotes count of rooms.

// Output:

// A boolean which tells whether its possible to make a booking.
// Return 0/1 for C programs.
// O -> No there are not enough rooms for N booking.
// 1 -> Yes there are enough rooms for N booking.
// Example :

// Input :
//         Arrivals :   [1 3 5]
//         Departures : [2 6 8]
//         K : 1

// Return : False / 0

// At day = 5, there are 2 guests in the hotel. But I have only one room.

// loop over arrivals  and deprature
//             if  non overlapping seq means allocated one room
//             else allocated index for room
//             if index > total-rooms return 0
// return 1

// nonOverlappingSeq {
//   check overalap of set  (bound.start <= interval.start && interval.start <= bound.end) ||
// (bound.start <= interval.end && interval.end <= bound.end)

// store non overlapping date indexes
// }

function runner(Arrivals, Departures, day) {
  const roomsInfo = [];
  for (let index = 0; index < Arrivals.length; index++) {
    const arr = Arrivals[index];
    const dep = Departures[index];

    let addedGuest = false;
    for (let i = 0; i < roomsInfo.length; i++) {
      const stayInfo = roomsInfo[i];
      for (let ind = 0; ind < stayInfo.length; ind++) {
        const guestIndex = stayInfo[ind];
        const overlap = overlappingInterval(
          { start: arr, end: dep },
          { start: Arrivals[guestIndex], end: Departures[guestIndex] }
        );
        console.log("overlap", overlap);
        if (!overlap) {
          if (stayInfo[ind]) {
            stayInfo[ind].push(guestIndex);
            if (ind + 1 > day) {
              return 0;
            }
          } else {
            stayInfo[ind] = [guestIndex];
          }

          roomsInfo[i] = stayInfo;
          addedGuest = true;
        }
      }
    }

    if (!addedGuest) {
      roomsInfo.push([index]);
      if (roomsInfo.length > day) {
        console.log(roomsInfo);

        return 0;
      }
    }
  }

  console.log(roomsInfo);

  return 1;
}

function overlappingInterval(interval, bound) {
  console.log(interval, bound);
  return (
    (bound.start <= interval.start && interval.start <= bound.end) ||
    (bound.start <= interval.end && interval.end <= bound.end)
  );
}

var Arrivals = [1, 3, 5];
var Departures = [2, 6, 8];
var K = 1;

console.log(runner(Arrivals, Departures, K));
