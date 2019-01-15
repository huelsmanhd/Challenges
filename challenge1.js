function palindrome(str) {
    str = str.toLowerCase.length
    let word = str.split('').reverse().join('');
    for (i = 0; i < word; i++) {
        if (str[i] !== str[word - 1 - i]) {
            console.log('false');
        }   else {
            console.log('true')
        }
    }
}
palindrome('dad');

/* What do I need?
function for palindrome
parameter for paindrome input
methods for reversing ,splitting, and reentering string
if statment to execute true/false if palindrome exists
*/

//Autumn's solution
function checker (str){
    let str = str.toLowerCase();
    let rev = str.split('').reverse().join('').toLowerCase();
    if(str == rev) {
      console.log("It's a palindrome")
    } else {
      console.log(`${str} is not a palindrome`)
    }
  }
