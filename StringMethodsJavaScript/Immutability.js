let str = "string";

str[0] = "S"; // Doesn't change the string

console.log(str);

str = "S" + str.slice(1);
console.log(str);
