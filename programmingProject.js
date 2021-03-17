"use strict";
/* eslint-disable; */
exports.findPorcupineNumber = findPorcupineNumber;
exports.addToTarget = addToTarget;
exports.mostFrequent = mostFrequent;
exports.closestToZero = closestToZero;
exports.addTwoNumbers = addTwoNumbers;
exports.addBinary = binaryAddition;
exports.columnTitle = columnTitle;
exports.columnNumber = columnNumber;
exports.strobogrammaticNumber = strobogrammaticNumber;
exports.missingNumber = missingNumber;
exports.searchInsertPosition = searchInsertPosition;
exports.maxSubarray = maxSubarray;
exports.containsDuplicates = containsDuplicates;
exports.shortestWordDistance = shortestWordDistance;
exports.moveZeros = moveZeros;
exports.reverseVowels = reverseVowels;
exports.summaryRanges = summaryRanges;
exports.gcfStrings = gcfStrings;

// ?---------- 1 ---  done
/**
 *
 * @param {number} num check if a number is prime
 * @returns {boolean} isPrime true if prime and false if not
 */
function checkPrime(num) {
  let i = 2;
  let isPrime = true;
  while (i < num) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  return isPrime;
}
console.log(checkPrime(20));

function nextPrime(num) {
  let i = num + 1;
  while (i > num) {
    if (checkPrime(i)) return i;
    i++;
  }
}
// console.log(nextPrime(3));
/**
 *
 * @param {number} num number to check if the last digit is
 * @returns {boolean} endsInNine check result
 */
function endsIn9(num) {
  let endsInNine = true;
  let lastDigit = num % 10;
  if (lastDigit !== 9) endsInNine = false;
  return endsInNine;
}
// console.log(endsIn9(139));

/**
 *
 * @param {number} num number to start from while finding the next porcupine
 * @returns {number} firstCheck the next porcupine number
 */
function findPorcupineNumber(number) {
  let n = number;
  let porcupineNumber;

  function helper(num) {
    if (endsIn9(num) && checkPrime(num) && endsIn9(nextPrime(num))) {
      porcupineNumber = num;
    } else {
      porcupineNumber = helper(nextPrime(num));
    }
    return porcupineNumber;
  }
  let firstCheck = helper(n);
  if (firstCheck === number) return helper(n + 1);

  return firstCheck;
}
// console.log("------");
// console.log(findPorcupineNumber(138));
// console.log("------");

// ?---------- 2 ---- done

function addToTarget(arr, num) {
  let array = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        array.push(i);
        array.push(j);
      }
      if (array.length === 2) return array;
    }
  }
  return array;
}
// console.log(addToTarget([2, 7, 11, 15], 9));
// console.log(addToTarget([2, 3, 4], 6));

// ?---------- 3 ----  done

function mostFrequent(arr) {
  let maxChar;
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let each of arr) {
      if (arr[i] === each) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxChar = arr[i];
    }
  }
  return maxChar;
}
// console.log(mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]));

// ?---------- 4 ----  done

function closestToZero(arr) {
  let array = [];
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        array[0] = arr[i];
        array[1] = arr[j];
        return array;
      } else if (sum > 0) {
        if (sum < min) {
          min = sum;
          array[0] = arr[i];
          array[1] = arr[j];
        }
      } else {
        if (Math.abs(sum) < min) {
          min = sum;
          array[0] = arr[i];
          array[1] = arr[j];
        }
      }
    }
  }
  return array;
}
// console.log(closestToZero([1, 4, -1, -2, -5]));
// console.log(closestToZero([4, 2, -1, 3, -2, -3]));

// ?---------- 5 ----   done

function addTwoNumbers(arr1, arr2) {
  let arrNew = [];
  let arr1Joined = Number(arr1.join(""));
  let arr2Joined = Number(arr2.join(""));
  let sum = arr1Joined + arr2Joined;
  for (let each of String(sum)) {
    arrNew.push(Number(each));
  }
  return arrNew;
}

// console.log(addTwoNumbers([3, 4, 2], [4, 6, 5]));
// console.log(addTwoNumbers([1, 1], [9, 9]));
// console.log(addTwoNumbers([1, 1], [1, 2, 3]));

// ?---------- 6 ----   done
function reverse(str) {
  let splitted = str.split("");
  let reversed = splitted.reverse();
  return reversed.join("");
}
// console.log(reverse("thy"));

function binaryAddition(str1, str2) {
  let sum = "";
  let rem = "0";

  for (let i = Math.max(str1.length - 1, str2.length - 1); i >= 0; i--) {
    let toSum;
    let j = i - (str1.length - str2.length);

    if (j >= 0) {
      toSum = str1[i] + str2[j];

      if (toSum === "11") {
        sum += rem;
        rem = "1";
      } else if (toSum === "00") {
        sum += rem;
        rem = "0";
      } else if (toSum === "10" || toSum === "01") {
        if ((rem = "0")) sum += "1";
        else {
          sum += "0";
          rem = "1";
        }
      }
      // console.log(toSum, sum);
    } else {
      toSum = str1[i] + rem;
      if (toSum === "11") {
        sum += 0;
        rem = "1";
      } else if (toSum === "10" || toSum === "01") {
        sum += "1";
        rem = "0";
      } else sum += "0";
    }
  }
  console.log(str1, str2);
  if (rem !== "0") return reverse(sum + rem);
  return reverse(sum);
}
// console.log(binaryAddition("11", "1"));
// console.log(binaryAddition("1010", "1011"));

// ?---------- 7 ----   done

function columnTitle(n) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let title = "";
  let rem = n % 26;
  let quo = Math.floor(n / 26);

  if (n <= 26) {
    title += letters[n - 1];
  }
  if (n > 26) {
    title = "" + letters[quo - 1] + letters[rem - 1];
  }

  return title;
}
// console.log(columnTitle(701));

// ?---------- 8 ----   done

function columnNumber(title) {
  title = title.toUpperCase();
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let num;
  if (title.length === 1) {
    num = letters.indexOf(title) + 1;
  } else {
    let rem = letters.indexOf(title[1]) + 1;
    let quo = letters.indexOf(title[0]) + 1;
    num = quo * 26 + rem;
  }

  return num;
}
// console.log(columnNumber("ad"));

// ?---------- 9 ----   done

function strobogrammaticNumber(str) {
  if (
    str.includes("2") ||
    str.includes("3") ||
    str.includes("4") ||
    str.includes("5") ||
    str.includes("7")
  ) {
    return false;
  } else {
    if (str.length % 2 !== 0) {
      //odd case
      let middleIndex = Math.floor(str.length / 2);
      if (str[middleIndex] === "9" || str[middleIndex] === "6") return false;
    }

    //even case plus odd
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
      if (
        str[i] === "9" ||
        (str[i] === "6" && str[j] === "9") ||
        str[j] === "6"
      ) {
        if (str[i] === "9" && str[j] === "9") return false;
        else if (str[i] === "6" && str[j] === "6") return false;
      } else {
        if (str[i] !== str[j]) return false;
      }

      j--;
    }
  }

  return true;
}

// console.log(strobogrammaticNumber("068619890"));

// ?---------- 10 ----   done

function missingNumber(arr) {
  let missing;
  arr.sort((a, b) => (a > b ? 1 : -1));
  let i = 1;
  while (i < arr.length) {
    if (arr[i] - arr[i - 1] !== 1) {
      missing = arr[i] - 1;
      break;
    }
    i++;
  }
  return missing;
}
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// ([3, 0, 1]), 2
// ([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8

// ?---------- 11 ----   done

function searchInsertPosition(arr, n) {
  let index;
  if (arr.includes(n)) {
    return arr.indexOf(n);
  } else {
    let concated = arr.concat(n);
    concated.sort((a, b) => (a > b ? 1 : -1));
    index = concated.indexOf(n);
  }
  return index;
}
// console.log(searchInsertPosition([1, 3, 5, 6], 5));
// console.log(searchInsertPosition([1, 3, 5, 6], 2));
// ([1, 3, 5, 6], 5), 2
// ([1, 3, 5, 6], 2), 1

// ?---------- 12 ----   done
function maxSubarray(arr) {
  let max = Math.max(...arr);
  let tempSum = 0;

  for (let j = 0; j < arr.length; j++) {
    if (tempSum < arr[j]) {
      if (tempSum < 0) {
        tempSum = arr[j];
        continue;
      } else {
        tempSum += arr[j];
        continue;
      }
    } else {
      tempSum += arr[j];
      max = Math.max(tempSum, max);
    }
  }

  return max;
}
// console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubarray([-3, 5, -3, 3, -4, 1, 1, -2, 2, 5, 2, -4, 2, -2]));
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6
// ?---------- 13 ----   done

function containsDuplicates(arr, n) {
  let arrDuplicates = findDuplicates(arr);
  console.log(arrDuplicates);
  for (let i = 0; i < arrDuplicates.length; i++) {
    let myArr = arrDuplicates[i][2];
    for (let j = 1; j < myArr.length; j++) {
      if (myArr[j] - myArr[j - 1] <= n) {
        console.log(myArr, j);

        return true;
      }
    }

    // if (arrDuplicates[i][2][1] - arrDuplicates[i][2][0] <= n) return true;
  }
  return false;
}
// console.log(containsDuplicates([1, 0, 2, 1, 6, 1, 2, 4, 6, 1], 1));

function findDuplicates(array) {
  let arr = array.slice();
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let arrTemp = [];
    arrTemp.push(i);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
        arrTemp.push(j);
        // console.log(arr);
        arr.splice(j, 1, "x");
        // console.log(arr);
      }
    }
    if (count > 1) {
      arrNew.push([arr[i], count, arrTemp]);
    }
  }
  let refinedArr = [];
  for (let each of arrNew) {
    if (each[0] !== "x") {
      refinedArr.push(each);
    }
  }

  return refinedArr;
}
// console.log(findDuplicates([1, 2, 3, 1])); //   [[ 1, 3, [ 0, 3, 4 ] ], [ 2, 2, [ 1, 6 ] ], [ 3, 2, [ 2, 5 ] ]]

let c = "d";
// console.log(typeof c);
// contains_duplicate_ii([1, 2, 3, 1], 3), true);
// ?---------- 14 ----  not done
function shortestWordDistance(arr, str1, str2) {
  let arrayIndicesStr1 = [];
  let arrayIndicesStr2 = [];
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str1) {
      let index1Str1 = i;

      arrayIndicesStr1.push(index1Str1);
    } else if (arr[i] === str2) {
      let index1Str2 = i;
      console.log(i);
      arrayIndicesStr2.push(index1Str2);
    }
  }
  console.log(arrayIndicesStr1, arrayIndicesStr2);
  for (let i = 0; i < arrayIndicesStr1.length; i++) {
    for (let j = 0; j < arrayIndicesStr2.length; j++) {
      min = Math.min(Math.abs(arrayIndicesStr1[i] - arrayIndicesStr2[j]), min);
    }
  }

  return min;
}
// console.log(
//   shortestWordDistance(
//     ["practice", "makes", "perfect", "coding", "makes"],
//     "coding",
//     "practice"
//   )
// );
// console.log(
//   shortestWordDistance(
//     ["practice", "makes", "perfect", "coding", "makes"],
//     "coding",
//     "makes"
//   )
// );

// ?---------- 15 ----   done

function moveZeros(arr) {
  let newArr = arr.sort((a, b) => (a > b ? 1 : -1));

  let shifted = shiftZeros(newArr);
  return shifted;
}

// console.log(moveZeros([0, 1, 0, 12, 3])); // Output: [1,3,12,0,0]

function shiftZeros(arr) {
  if (arr[0] === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        let x = arr.slice(0, i);
        let y = arr.slice(i);
        arr = y.concat(x);
        return arr;
      }
    }
  }

  return arr;
}
// console.log(shiftZeros([0, 0, 1, 2, 4]));

// ?---------- 16 ----   done -
// "helloo" to "holle"

function reverseVowels(str) {
  let arr = [];
  console.log(str);
  let arrStr = str.split(""); // [ 'h', 'e', 'l', 'l', 'o', 'o' ]

  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      arr.push([x, i]);
    }
  }

  let reversedVowelsArray = reverseSecondArrayElement(arr); // [ [ 5, 'e', 1 ], [ 4, 'o', 4 ], [ 1, 'o', 5 ] ]
  for (let i = 0; i < reversedVowelsArray.length; i++) {
    arrStr[reversedVowelsArray[i][0]] = reversedVowelsArray[i][1];
  }
  let strArr = arrStr.join("");
  return strArr;
}
// console.log(reverseVowels("healloeo"));

function reverseSecondArrayElement(arr) {
  let x = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    arr[x].unshift(arr[i][arr[i].length - 1]);

    x--;
  }
  return arr;
}
// console.log(
//   reverseSecondArrayElement([
//     ["e", 1],
//     ["o", 4],
//     ["o", 5],
//   ])
// );

function splitStr(str) {
  return str.split("");
}

// console.log(splitStr("heloo"));

// ?---------- 17 ----  not done

// function summaryRanges(array) {
//   let arr2 = [];

//   helper(array);

//   function helper(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       // if (i === arr.length - 1) {
//       //   arr2.push(`${arr[0]}->${arr[i]}`);
//       //   break;
//       // } else {
//       if (arr[i] - arr[i - 1] !== 1) {
//         arr2.push(`${arr[0]}->${arr[i - 1]}`);

//         let arrNew = arr.slice(i);
//         console.log(arrNew);

//         if (arrNew.length === 1) {
//           arr2.push(`${arrNew[0]}`);
//           arr = [];
//           break;
//         } else helper(arrNew);
//       }
//       // }
//     }
//     return arr2;
//   }

//   return arr2;
// }
// console.log("^");
// function summaryRanges(arr) {
//   let array = [];
//   for (let i = 1; i < arr.length; i++) {
//     let start = 0;
//     let end = 0;
//     if (arr[i] - arr[i - 1] === 1) {
//       start = i - 1;
//     } else end = arr[i - 1];
//     array.push([arr[start], arr[end]]);
//     arr = arr.splice(start, end - start);
//   }
//   return arr;
// }
function summaryRanges(arr) {
  let array = [];
  let arrTemp;

  function helper(arr) {
    arrTemp = [];
    if (arr.length === 1) {
      array.push(arr);
      return arr;
    }
    let i = 1;

    while (i <= arr.length) {
      if (arr[i] - arr[i - 1] === 1) {
        arrTemp.push(arr[i - 1]);
      } else {
        arrTemp.push(arr[i - 1]);
        array.push(arrTemp);
        arrTemp = [];
        return helper(arr.slice(i));
        // break;
        // if (arr.length === 1) return arr;
        // helper(arr.slice(i));
      }
      i++;
    }
    return arrTemp;
  }
  helper(arr);
  let arrfinal = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(each);
    let str;
    if (array[i].length !== 1) {
      str = `${array[i][0]}->${array[i][array[i].length - 1]}`;
    } else {
      str = `${array[i][0]}`;
    }
    // array.splice(each);
    arrfinal.push(str);
  }

  return arrfinal;
}
console.log(summaryRanges([1, 2, 4, 5, 7]));
console.log(summaryRanges([1, 2, 3, 5, 6, 7, 9]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// summaryRanges([0, 1, 2, 4, 5, 7]), [
//       "0->2",
//       "4->5",
//       "7",
//     ])

// ?---------- 18 ----   done
function gcfStrings(str1, str2) {
  if (str1.includes(str2 + str2)) return str2;
  else if (str2.includes(str1 + str1)) return str1;
  else return "";
}

// console.log(gcfStrings("ABCABC", "ABC"));
// console.log(gcfStrings("ABABAB", "AB"));
// console.log(gcfStrings("ABCDEF", "ABC"));
// "ABCABC", "ABC"), "ABC"
// "ABABAB", "ABAB"), "ABAB"
// "ABCDEF", "ABC"), ""
