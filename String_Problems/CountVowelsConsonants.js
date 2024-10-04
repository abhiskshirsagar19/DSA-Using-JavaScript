let str = "Hello! World";

function countVowelsConsonants(str) {
  str = str.toLowerCase();
  const vowels = "aeiou";
  const countVowels = str
    .split("")
    .filter((char) => vowels.includes(char)).length;
  const consonantCount = str
    .split("")
    .filter(
      (char) => char >= "a" && char <= "z" && !vowels.includes(char)
    ).length;

  return { Vowels: countVowels, Consonants: consonantCount };
}
const result = countVowelsConsonants(str);
console.log(countVowelsConsonants(str));
console.log(`Vowels: ${result.Vowels}`);
console.log(`Consonants: ${result.Consonants}`);
