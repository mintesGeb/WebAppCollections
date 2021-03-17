"use strict";
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  /* function code is to be written, empty now */
  //return 8;  //:) we cheat!!

  debugger;
  let result = 1;
  //let result = 10;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function checkPrime(num) {
  debugger;
  let i = 2;
  let isPrime = true;
  while (i < num) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  return isPrime;
}
