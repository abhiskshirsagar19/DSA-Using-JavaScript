/*Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array */

//First Approach  Best case: O(n log n) Average case: O(n log n) Worst case: O(n log n)

function findMinMax(arr) {
  let sort = arr.sort();
  return sort[0] + sort[sort.length - 1];
}

//Second Approach
function findMinMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return max + min;
}

let arr = [4, 2, 5, 8, 1, -2, 9];
let ApproachOne = findMinMax(arr);
let ApproachTwo = findMinMaxSum(arr);
console.log(ApproachOne);
console.log(ApproachTwo);
