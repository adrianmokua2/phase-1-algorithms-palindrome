function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split("")
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString = reverseLetters.join("")
}

 
  // Add your pseudocode here
   if(word==reverseString) {
    return true
  } else {
    return false
  }
*/

/*
  Add written explanation of your solution here
  The following function returns true if a word is a palindrome and false if a word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
