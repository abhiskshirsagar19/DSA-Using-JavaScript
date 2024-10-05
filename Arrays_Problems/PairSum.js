/*Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array 
whose sum equals a specific target number. */

function findPair(nums, target) {
  const map = new Map(); // To store the value and its index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; // Find component that would sum to the target

      //Check if the complement exists in the map
      if (map.has(complement)) {
        // Return indices of the pair.
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }
  return null;
}
const nums = [2, 7, 11, 12, 7];
const target = 9;
const result = findPair(nums, target);
console.log(result);
