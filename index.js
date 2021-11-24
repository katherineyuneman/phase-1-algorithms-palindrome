function isPalindrome(word) {
 let letterArray = word.split("");
//  console.log(letterArray)
 l = letterArray.length
//  console.log(l)
//  Math.ceil((letterArray.length - 1) / 2)
//  console.log(loops)
for (let i = 0; i < (l-1)/2; i++){
  // console.log("iteration number", i)
  //   console.log(letterArray[i])
  // console.log(letterArray[l-1-i])
  if (letterArray[i] !== letterArray[l-1-i]){
    return false
  }
} return true
}

// let arrayLength = array.length;
// for(let i = 0 ; i < arrayLength; i++) {
    
//    let val = array[i];
// }

/* 
  Add your pseudocode here
function takes an input string
define array of individual letters from input
i = 0
l = array.length - 1
(array.length - 1) / 2 = number of loops
  iterate over the letters for n number of loops
  if (array[i] = array[0]){return true}
  else {return false}

*/

/*
  Add written explanation of your solution here
  1. function that takes an input and determines if the word is a palindrome
    a. determines length of the input word - number of iterations = (length - 1) / 2
        b. 0 letter needs to match the length letter - 1
        c. 1 letter needs to match length letter - 2
        d. 2 letter needs to match length letter - 3, etc.
        e. loop ends at 3
  2. if any are FALSE

  example: 'racecar'
      length = 7 letters - 1 in the middle / 2, needs to make 3 comparisons
      comparison 1: if 0 = 6
      comparison 2: if 1 = 5
      comparison 3: if 2 = 4
  example: '
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
// 4 letters
  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));

  console.log("");

  // 3 letters
  console.log("Expecting: true");
  console.log("=>", isPalindrome("nun"));

  console.log("");

  // 6 letters
  console.log("Expecting: true");
  console.log("=>", isPalindrome("redder"));

  console.log("");

  // 7 letters
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  // 5 letters 
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // 9 letters 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("redivider"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");
}

module.exports = isPalindrome;
