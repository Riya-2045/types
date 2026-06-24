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
//const num = [1, 2, 2, 3, 3, 4];
//const result: number[] = [...new Set(num)];
//console.log(result);

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
//function reverseWord(str: string): string {
//return str.split(" ").reverse().join(" ");
//}
//console.log(reverseWord("hello world from ts"));

//check palindrome
//function isPalindrom(str: string): boolean {
//const lowerstr = str.toLowerCase();
//const result = lowerstr.split("").reverse().join("");
//return lowerstr === result;
//}
//console.log(isPalindrom("RaceCar"));

// charracter frequency
//function countChars(str: string): Record<string, number> {
//const count: Record<string, number> = {};
//for (let char of str) {
//if (count[char]) {
//count[char]++;
//} else {
//count[char] = 1;
//}
//}
//return count;
//}
//console.log(countChars("programming"));

//most frequent character
// function maxWord(str: string): string {
// const count: Record<string, number> = {};
// let maxChar = "";
// let maxCount = 0;
// for (let char of str) {
// if (count[char]) {
// count[char]++;
// } else {
// count[char] = 1;
// }
// if (count[char] > maxCount) {
// maxCount = count[char];
// maxChar = char;
// }
// }

// return maxChar;
// }
//console.log(maxWord("pritiii"));

//find missing number
// function missNumber(arr: number[]): number {
//   const num = arr.at(-1)!;
//   let full = (num * (num + 1)) / 2;
//   const missing = arr.reduce((acc, curr) => acc + curr, 0);
//   return full - missing;
// }
// console.log(missNumber([1, 2, 3, 4, 5, 6, 8]));

//first non frequent character
// function nonfrqChar(str: string): string {
//   const count: Record<string, number> = {};
//   let Char = "";
//   for (let char of str) {
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//     if (count[char] === 1) {
//       return char;
//     }
//   }

//   return "";
// }
//console.log(nonfrqChar("pritiii"));

// function maxWord(str: string): string {
// const count: Record<string, number> = {};
// let nonfrqChar = "";
// let nonfrqCount = Infinity;
// for (let char of str) {
// if (count[char]) {
// count[char]++;
// } else {
// count[char] = 1;
// }
// if (count[char] < nonfrqCount) {
// nonfrqCount = count[char];
// nonfrqChar = char;
// }
// }

// return nonfrqChar;
// }
//console.log(maxWord("abbcddee"));

//most frequent element
function maxNum(arr: number[]): number {
  const count: Record<number, number> = {};
  let maxNum = arr[0];
  let maxCount = 0;
  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
    if (count[num] > maxCount) {
      maxCount = count[num];
      maxNum = num;
    }
  }

  return maxNum;
}
//console.log(maxNum([1, 2, 3, 2, 4, 1]));

//valid anagram
function validAnagram(str1: string, str2: string): boolean {
  const count: Record<string, number> = {};
  const s1 = str1.toLowerCase().replaceAll(" ", "");
  const s2 = str2.toLowerCase().replaceAll(" ", "");
  for (let char of str1) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
    for (let char of str2) {
      if (count[char]) {
        count[char]--;
      } else {
        count[char] = 1;
      }
    }
    if (s1.length === s2.length) {
      return true;
    }
  }
  return false;
}
//console.log(validAnagram("Dormitory", "dirty Room"));

//max frequent tech2
function maxFrequent(arr: number[]): number | null {
  const count: Record<number, number> = {};
  let max = -Infinity;
  let maxNum = null;
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] ?? 0) + 1;
    if (count[arr[i]] > max) {
      max = count[arr[i]];
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(maxFrequent([1, 2, 3, 2, 4, 1]));
