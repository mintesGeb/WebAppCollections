"use strict";
/* global pow assert */

/* global checkPrime assert */
describe("Check Prime", function () {
  it("20 is not a prime number", function () {
    assert.strictEqual(false, checkPrime(20));
  });
  it("11 is a prime number", function () {
    assert.strictEqual(true, checkPrime(11));
  });
});

describe("Most Frequent Number", function () {
  it("The most frequent in the list is 4", function () {
    assert.strictEqual(4, mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]));
  });

  it("The most frequent in the list is 7", function () {
    assert.strictEqual(7, mostFrequent([7, 6, 6, 4, 4, 4, 7, 5, 2, 7]));
  });
});

describe("Missing number", function () {
  it("the missing number from the given array is 2", function () {
    assert.strictEqual(2, missingNumber([3, 0, 1]));
  });

  it("the missing number from the given array is 8", function () {
    assert.strictEqual(8, missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
  });
});
