console.log(`*************************************************
    Destructuring Lesson Start
`);

// Basic usage
console.log("*** Basic usage ***")
    

const destructuringArray = [1, 2, 3];
const [a, b, c] = destructuringArray;

console.log(a);
console.log(b);
console.log(c);


// Skipping Element
console.log("*** Skipping Element ***")

const [d,,f] = [1, 2, 3]

console.log(d)
console.log(f)

// With Rest Operation
console.log("*** With Rest Operation ***")

const longDestructingarr = ["Enam", "Hassan", "25", "Engineer", "Dhaka"]
const [firstName, lastname, ...othersAsRest] = longDestructingarr

console.log("Fist Name and Last Name as First elemnts  : ")
console.log(firstName + ' ' + lastname)

console.log("Others elements by rest  : ")
console.log(othersAsRest)

// Swapping Element
console.log("*** Swapping Element ***")

let first = "apple";
let second = "banana";

[first, second] = [second, first];

console.log(first);  // Output: banana
console.log(second); // Output: apple

