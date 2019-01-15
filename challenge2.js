// Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  Create two arrays from this original one, where one array list all of the even numbers, and the second lists all of the odd.
// Example:
// Input:
// originalArray = [1,2,3,4];
// Output:
// evenArray = [2,4];
// oddArray = [1,3];

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];

for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            even.push(num[i]);
        }
        else
            odd.push(num[i]);
}

console.log(even);
console.log(odd);