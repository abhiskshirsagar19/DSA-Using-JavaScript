function countOccurrence(mainString, subString) {
  //Handle edge cases
  if (subString.length === 0) {
    return 0;
  }
  if (mainString.length === 0) {
    return 0;
  }
  mainString = mainString.toLowerCase();
  let count = 0;
  let position = 0;

  while (true) {
    position = mainString.indexOf(subString, position);
    if (position === -1) break;
    count++;
    position += subString.length;
  }
  return count;
}

const mainString = "This is the substring problem which is very east. Is it?";

const subString = "is";
const count = countOccurrence(mainString, subString);
console.log(count);
