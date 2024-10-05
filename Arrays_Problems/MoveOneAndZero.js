function moveOneZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < arr.length && arr[left] === 1) {
      left++;
    }
    while (right >= 0 && arr[right] === 0) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  return arr;
}

const arr = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1];
const result = moveOneZero(arr);
console.log(result);
