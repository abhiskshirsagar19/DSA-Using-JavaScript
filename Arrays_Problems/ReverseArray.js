/*You are given a constant array A.
You are required to return another array which is the reversed form of the input array.*/

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];

const resultArray = reverseArray(arr);

console.log(resultArray);
