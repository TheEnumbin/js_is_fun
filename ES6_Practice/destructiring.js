console.log(`*************************************************
    Destructuring Lesson Start
`);

// Array destructuring
console.log("*** Array destructuring ***")
    

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

// Object destructuring
console.log("*** Object destructuring with renaming element name ***")

const destructureObject = { name: "Enam", userAge: 25, city: "Dhaka" };

const {name: username, userAge, city: address} = destructureObject;

console.log("Old object")

console.log(destructureObject);

console.log("After destructuring and renaming name to username and city to address")

console.log(`User name : ${username}`);
console.log(`User age : ${userAge}`);
console.log(`User address : ${address}`);


// Object destructuring
console.log("*** Nested Object destructuring ***")

const nestedObject = { name: "Enam", userAge: 25, address: {city: "Dhaka", postal_code : "1219", country: "Bangladesh"} };

const {name: person_name, userAge: user_age, address: {city, postal_code, country}} = nestedObject
console.log(`Name : ${person_name}`);
console.log(`Age : ${user_age}`);
console.log(`City : ${city}`);
console.log(`Country : ${country}`);

// Object destructuring
console.log("*** Using REST Operatior for destructuring ***")

const employee = { id: 101, employee_name: "Enam", role: "Developer", department: "Software" };
const { id, employee_name, ...rest } = employee;

console.log(id);
console.log(employee_name);
console.log(rest);
