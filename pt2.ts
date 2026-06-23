//reverse a string
//function reverseString(str: string): string {
//return str.split("").reverse().join("");
//}
//console.log(reverseString("typescript"));

//title case name
//function formatName(name: string): string {
//return name
//.split(" ")
//.map(
//(word: String) =>
//word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
//)
//.join(" ");
//}
//console.log(formatName("priti SarkaR"));

//count vowels
//function countVowels(str: string): number {
//let count = 0;
//let vowels = "a,e,i,o,u";
//for (let i = 0; i < str.length; i++) {
//if (vowels.includes(str[i].toLowerCase())) {
//count++;
//}
//}
//return count;
//}
//console.log(countVowels("Programming"));

//remove duplicate elements
//function removeDuplicates(arr: number[]): number[] {
//const result: number[] = [];
//for (let i = 0; i < arr.length; i++) {
//if (!result.includes(arr[i])) {
//result.push(arr[i]);
//}
//}
//return result;
//}
//console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//find longest word
//function longestWord(str: string): string {
//let result = "";
//const words = str.split(" ");
//for (let i = 0; i < words.length; i++) {
//if (words[i].length > result.length) {
//result = words[i];
//}
// }
// return result;
//}
//console.log(longestWord("TypeScript makes JavaScript more maintainable"));

//reverse word
function reverseWord(str: string): string {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWord("hello world from ts"));

//check palindrome
//function isPalindrom(str: string): boolean {
//const lowerstr = str.toLowerCase();
//const result = lowerstr.split("").reverse().join("");
//return lowerstr === result;
//}
//console.log(isPalindrom("RaceCar"));

//most frequent charracter
