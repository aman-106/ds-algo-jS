// https://www.dream.com/problems/prime-sum/

// Given an even number ( greater than 2 ),
//  return two prime numbers whose sum will be equal to given number.

// NOTE A solution will always exist. read Goldbach’s conjecture

// Example:

// Input : 4
// Output: 2 + 2 = 4

// generate prime less   of given number
// loop over primes , elem , num-elem is prime , store the group
// if store mulitple , sort it

function isPrime(n) {
  // Corner cases
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6)
    if (n % i == 0 || n % (i + 2) == 0) return false;

  return true;
}

// Function to print primes
function getPrimes(n) {
  let primes = {};
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes[i] = 1;
    }
  }

  return primes;
}

function getPrimeNumPair(num) {
  const pairs = [];
  const primes = getPrimes(num);
  // for (const prime of primes) {
  //   if (primes[num - prime]) {
  //     pairs.push([prime, num - prime]);
  //   }
  // }

  for (let prime in primes) {
    if (primes.hasOwnProperty(prime)) {
      // const element = primes[prime];
      prime = parseInt(prime, 10);
      if (primes[prime] && primes[num - prime]) {
        primes[num - prime] = 0; // remove used prime
        // console.log(primes);
        pairs.push([prime, num - prime]);
      }
    }
  }

  return pairs;
}

console.log(getPrimeNumPair(10));
