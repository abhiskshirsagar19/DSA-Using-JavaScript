/*
The includes() method in JavaScript is used to determine if a string contains a specified substring. 
It returns true if the substring is found within the string, and false otherwise.*/

let str = "This is the string include method.";

console.log(str.includes("string"));
console.log(str.includes("StrinG")); // Case sensitive
console.log(str.includes("is", 3)); //true start search from index 3
