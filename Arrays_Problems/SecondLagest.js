/*You are given an integer array A. 
You have to find the second largest element/value in the array or report that no such element exists.*/

//First approach
function secondLargest(arr) {
  // let refArr = arr.sort();// Twist
  let refArr = arr.sort((a, b) => a - b);
  /*1 - 2 = -1, so 1 comes before 2.
4 - (-3) = 7, so -3 comes before 4.
8 - 6 = 2, so 6 comes before 8.*/
  console.log(refArr); // Twist
  /* The reason is that sort() converts each element 
  to a string and then compares their UTF-16 code units, so "10" is considered smaller than "2".
  The reason is that sort() converts each element to a string 
  and then compares their UTF-16 code units, so "10" is considered smaller than "2".*/
  return refArr[refArr.length - 2];
}
function secondLargestSecondsApproach(arr) {
  if (arr.length === 1) {
    return -1;
  }
  let max = arr[0];
  let smax = -1;

  for (let i = 0; i < arr.length; i++) {
    if (max > arr[i]) {
      if (smax < arr[i]) {
        smax = arr[i];
      }
    } else {
      if (arr[i] != max) {
        smax = max;
        max = arr[i];
      }
    }
  }
  return smax;
}
let arr = [1, 2, 4, -3, 8, 6, 7, 9, 1, 10];

let FirstApproach = secondLargest(arr);
console.log(FirstApproach);
let SecondApproach = secondLargestSecondsApproach(arr);
console.log(SecondApproach);
