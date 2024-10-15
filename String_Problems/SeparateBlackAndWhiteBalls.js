function minimumSteps(str) {
  let swaps = 0;
  let zeroSoFar = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "0") {
      zeroSoFar++;
    } else if (str[i] === "1") {
      swaps += zeroSoFar;
    }
  }
  return swaps;
}

const str = "0111";
const result = minimumSteps(str);
console.log(result);
