function palindrome(str) {
    let len = str.length;
    let strp = len.split('').reverse().join('');
    for (i = 0; i < strp; i++) {
        if (str[i] !== str[len - 1 - i]) {
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
