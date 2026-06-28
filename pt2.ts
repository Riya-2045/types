//reverse a string
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
//console.log(reverseString("typescript"));

//title case name
function formatName(name: string): string {
  return name
    .split(" ")
    .map(
      (word: String) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ");
}
//console.log(formatName("priti SarkaR"));

//count vowels
function countVowels(str: string): number {
  let count = 0;
  let vowels = "a,e,i,o,u";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//console.log(countVowels("Programming"));

//remove duplicate elements
const num = [1, 2, 2, 3, 3, 4];
const result: number[] = [...new Set(num)];
//console.log(result);

//find longest word
function longestWord(str: string): string {
  let result = "";
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > result.length) {
      result = words[i];
    }
  }
  return result;
}
//console.log(longestWord("TypeScript makes JavaScript more maintainable"));

//reverse word
function reverseWord(str: string): string {
  return str.split(" ").reverse().join(" ");
}
//console.log(reverseWord("hello world from ts"));

//check palindrome
function isPalindrom(str: string): boolean {
  const lowerstr = str.toLowerCase();
  const result = lowerstr.split("").reverse().join("");
  return lowerstr === result;
}
//console.log(isPalindrom("RaceCar"));

// charracter frequency
function countChars(str: string): Record<string, number> {
  const count: Record<string, number> = {};
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}
//console.log(countChars("programming"));

//most frequent character
function maxWor(str: string): string {
  const count: Record<string, number> = {};
  let maxChar = "";
  let maxCount = 0;
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }

  return maxChar;
}
//console.log(maxWor("pritiii"));

//find missing number
function missNumber(arr: number[]): number {
  const num = arr.at(-1)!;
  let full = (num * (num + 1)) / 2;
  const missing = arr.reduce((acc, curr) => acc + curr, 0);
  return full - missing;
}
// console.log(missNumber([1, 2, 3, 4, 5, 6, 8]));

//first non frequent character
// function nonfrqChar(str: string): string {
//   const count: Record<string, number> = {};
//   //let Char = "";
//   for (let char of str) {
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//     for (let char of str)
//       if (count[char] === 1) {
//         return char;
//       }
//   }

//   return "";
// }
// console.log(nonfrqChar("aabc"));

function maxWord(str: string): string {
  const count: Record<string, number> = {};
  let nonfrqChar = "";
  let nonfrqCount = Infinity;
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
    if (count[char] < nonfrqCount) {
      nonfrqCount = count[char];
      nonfrqChar = char;
    }
  }

  return nonfrqChar;
}
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
//console.log(maxFrequent([1, 2, 3, 2, 4, 1]));

//string Compression
function strCompress(str: string): string {
  let result = " ";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result = result + str[i] + count;
      count = 1;
    }
  }
  return result;
}
//console.log(strCompress("aaabbcccc"));

//group users by role
function groupUser() {
  const count: Record<string, string[]> = {};
  let users = [
    { name: "john", role: "admin" },
    { name: "jane", role: "user" },
  ];
  for (let user of users) {
    if (!count[user.role]) {
      count[user.role] = [];
    }
    count[user.role].push(user.name);
  }

  return count;
}
//console.log(groupUser());

//fine duplicate value

function findDuplicates(arr: number[]) {
  const count: Record<number, number> = {};
  const result: number[] = [];
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  for (let value in count) {
    if (count[value] > 1) {
      result.push(Number(value));
    }
  }
  return result;
}
//console.log(findDuplicates([1, 2, 3, 2, 4, 5, 4]));

//array intersection
function arrIntersection(arr1: number[], arr2: number[]): number[] {
  const set = new Set(arr1);
  const result: number[] = [];
  for (let num of arr2) {
    if (set.has(num)) {
      result.push(num);
    }
  }
  return result;
}
//console.log(arrIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// array difference
function arrDifference(arr1: number[], arr2: number[]): number[] {
  const set = new Set(arr2);
  const result: number[] = [];
  for (let num of arr1) {
    if (!set.has(num)) {
      result.push(num);
    }
  }
  return result;
}
//console.log(arrDifference([1, 2, 3, 4, 5], [3, 4, 5]));
//longest common prefix
function loncomPrefix(str: string[]): string {
  if (str.length === 0) return " ";
  let prefix = str[0];
  for (let i = 1; i < str.length; i++) {
    while (!str[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
//console.log(loncomPrefix(["flower", "flow", "flight"]));
//moves zeros to end
function moveZeros(arr: number[]): number[] {
  let zeroCount = 0;
  const result: number[] = [];
  //let zeroCount = 0;
  for (const num of arr) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }
  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }
  return result;
}
//console.log(moveZeros([0, 1, 0, 3, 12]));
//valid parentheses
function validParenth(str: string): boolean {
  const stack: string[] = [];

  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
//console.log(validParenth("({[]})"));
function nonfrqChar(str: string): string {
  let count = 0;
  let ch = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    } else {
      if (count === 1) {
        return ch;
      }
      ch = str[i];
      count = 1;
    }
  }

  if (count === 1) return ch;

  return "";
}

//console.log(nonfrqChar("bcca"));
//longest unique substring
function lonunisub(str: string) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
}
console.log(lonunisub("abcabcbb"));
//group anagrams
function groupAnagrams(words: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const word of words) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(word);
  }
  return Array.from(map.values());
}
//console.log(groupAnagrams(["eat", "tea", "ate", "bat"]));
//merge overlapping intervals
function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}
// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [9, 12],
//   ]),
// );

//rotate array
function rotateArray(arr: number[], k: number): number[] {
  const n = arr.length;
  k = k % n;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = arr[i];
  }
  return result;
}
//console.log(rotateArray([1, 2, 3, 4, 5], 2));
//mini groupby utility
function groupBy(arr: any[], key: string) {
  const result: any = {};
  for (const item of arr) {
    const value = item[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);
  }
  return result;
}
const users = [
  { name: "rosei", role: "admin" },
  { name: "riya", role: "user" },
  { name: "reha", role: "admin" },
];

//console.log(groupBy(users, "role"));
//flatten nested arrays
function flatArray(arr: any[]): any[] {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
//console.log(flatArray([1, [2, 3], [4, [5, 6]]]));
//log analyzer
function longAnalyzer(logs: any[]) {
  const users = new Set();
  const actionCount: any = {};
  const userCount: any = {};
  for (const log of logs) {
    users.add(log.user);
    actionCount[log.action] = (actionCount[log.action] || 0) + 1;
    userCount[log.user] = (userCount[log.user] || 0) + 1;
  }
  let mostActiveUser = "";
  let max = 0;
  for (const user in userCount) {
    if (userCount[user] > max) {
      max = userCount[user];
      mostActiveUser = user;
    }
  }
  return {
    uniqueUsers: [...users],
    actionCounts: actionCount,
    mostActiveUser: mostActiveUser,
  };
}
const logs = [
  { user: "riya", action: "login" },
  { user: "rosei", action: "login" },
  { user: "riya", action: "logout" },
  { user: "reha", action: "login" },
  { user: "riya", action: "login" },
];
//console.log(longAnalyzer(logs));
//search query normalizer
function normaLize(text: string): string {
  const words = text.trim().toLowerCase().split(" ");
  let result: string[] = [];
  for (const word of words) {
    if (!result.includes(word)) {
      result.push(word);
    }
  }
  return result.join(" ");
}
//console.log(normaLize(" Learn TypeScript TYPEscript "));
