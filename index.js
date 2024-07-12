function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord= word.split('').reverse().join('')
  return  word === reversedWord
}

/* 
  Add your pseudocode here
  Define variable that will return true when reversed

*/

/*
  Add written explanation of your solution here
  Define a variable called reversedWord that takes the word in the function then splits the string reverses it and then joins the string back together.
  If it returns true when reversed then the word is a Palindrome.
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
