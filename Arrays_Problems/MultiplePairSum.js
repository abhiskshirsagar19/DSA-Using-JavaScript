/*Write a JavaScript program to find a pairs of elements (indices of the two numbers) in a given array 
whose sum equals a specific target number. */

function findPairs(nums, target) {
  const map = new Map();
  const pairs = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      pairs.push([map.get(complement), i]);
    }
    map.set(nums[i], i);
  }
  return pairs.length > 0 ? pairs : "No pairs found.";
}

const nums = [2, 11, 7, 8, 9, , 3, 7];
const target = 9;
const result = findPairs(nums, target);

console.log(result);
