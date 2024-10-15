// Find duplicates from Array

// function duplicate(arr) {
//   let duplicate = [];
//   let seen = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       if (!duplicate.includes(arr[i])) {
//         duplicate.push(arr[i]);
//       }
//     } else {
//       seen[arr[i]] = true;
//     }
//   }
//   console.log(seen);
//   return duplicate;
// }

function duplicate(arr) {
  let duplicate = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (!duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    } else {
      seen[arr[i]] = true;
    }
  }
  return duplicate;
}
let arr = [1, 2, 5, 1, 9, 7, 4, 2, 4, 1];
console.log(duplicate(arr));

/**
 
Flow goes like when i = 0 
                        ==> if(seen[arr[0]]) which is '1' and as seen is empty it considered and false.
                        ==> Flow comes at else, so seen{} become seen{'1':true}
               when i = 1
                        ==> if(seen[arr[1]]) which is '2' and as seen is empty it considered and false.
                        ==> Flow comes at else, so seen{} become seen{'2':true}
                 
               when i = 2
                        ==> if(seen[arr[2]]) which is '5' and as seen is empty it considered and false.
                        ==> Flow comes at else, so seen{} become seen{'5':true}
                 
               when i = 3
                        ==> if(seen[arr[3]]) which is '1' and now the condition will get true .
                        ==> Now flow comes inside the if statement and check for (!duplicate.include(arr[i])) which is again true.
                        ==> Now flow comes inside the if statement and the duplicate.push(arr[i]) will run and duplicate[] becomes duplicate[1]
                     
                 
 */
