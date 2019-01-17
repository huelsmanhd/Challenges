// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };

sbsqp = {
    age: 32,
    color: 'yellow',
    lastname: 'Squarepants',
    home: 'pineapple',
    location: 'Bikini Bottom',
    bestFriend: 'Patrick Star',
    isSponge: true,
}


function swap(sbsqp) {
    let spongeBob = {};
    for (let key in sbsqp) {
        spongeBob[sbsqp[key]] = key;
    }
    return spongeBob;
}
console.log(swap(sbsqp));
