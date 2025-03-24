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


// Basic usage
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

