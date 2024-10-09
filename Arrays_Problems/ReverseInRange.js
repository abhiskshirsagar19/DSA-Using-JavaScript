/*Given an array A of N integers and also given two integers B and C. 
Reverse the elements of the array A within the given inclusive range [B, C].*/

function ReverseInRange(arr, B, C) {
  while (B < C) {
    arr[B] = arr[B] + arr[C];
    arr[C] = arr[B] - arr[C];
    arr[B] = arr[B] - arr[C];
    B++;
    C--;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const B = 3;
const C = 8;

const resultArr = ReverseInRange(arr, B, C);

//console.log(resultArr);

/*Swapping techniques*/
//Using temp variable
let a = 10;
let b = 20;
let c;

// c = a;
// a = b;
// b = c;
// console.log(a + "  " + b);

//Using destructuring
//[a, b] = [b, a];
console.log(a + "  " + b);

//Using Bitwise OR Operator
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a + "  " + b);
