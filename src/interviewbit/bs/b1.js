// Given an integar A.

// Compute and return the square root of A.

// If A is not a perfect square, return floor(sqrt(A)).
let lastSqt = -1;
count = 0;
function getSqrt(num) {
  if (num == 1) {
    return 1;
  } else if (num <= 0) {
    return 0;
  }
  return sqrtHelper(num, 1, num, -1);
}

function sqrtHelper(num, ll, hl) {
  count++;
  if (count > 20) {
    return 0;
  }
  if (ll * ll === num) {
    return ll;
  } else if (hl * hl == num) {
    return hl;
  } else if (hl === ll) {
    //     console.log("ll", "hl", ll, hl);
    if (hl * hl <= num && hl > lastSqt) {
      return hl;
    }
    return 0;
  } else if (num < hl * hl && num > ll * ll) {
    const middle = Math.floor((ll + hl) / 2);
    let m1 = 0;
    let m2 = 0;
    if (middle !== hl) {
      m1 = sqrtHelper(num, ll, middle);
    }
    if (middle !== ll) {
      m2 = sqrtHelper(num, middle, hl);
    }
    lastSqt = m1 || m2;
    return m1 || m2;
  }

  return 0;
}

console.log("sddd", getSqrt(101));
