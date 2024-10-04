function duplicate(str) {
  let duplicate = [];
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      if (!duplicate.includes(str[i])) {
        duplicate.push(str[i]);
      }
    } else {
      seen[str[i]] = true;
    }
  }
  return duplicate;
}
let str = ["A", "C", "A", "N", "G", "I", "A", "D", "C"];
console.log(duplicate(str));
