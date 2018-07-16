/**
 * Problem #1
 *
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
 *
 * @param {Number} k
 * @param {Array<Number>} list
 * @returns {boolean}
 */
const case1 = (k, list) => list.some(x => list.some(y => x + y === k));

/**
 * Problem #1
 *
 * Given an array of integers, return a new array such that each element at
 * index i of the new array is the product of all the numbers in the original
 * array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would
 * be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output
 * would be [2, 3, 6].
 *
 * @param {Number} k
 * @param {Array<Number>} list
 * @returns {boolean}
 */
const case2 = function (list) {
  return list;
};

// Module
export default {
  case1,
  case2,
};
