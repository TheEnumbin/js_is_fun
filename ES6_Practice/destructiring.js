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

// Dustructuing in function parameter
console.log("*** Dustructuing in function parameter ***")

function destructureInParam({ name = "Guest", age = 18 } = {}) {
    console.log(`${name} is ${age} years old.`);
  }
  
const paramToUse = { name: "Sophia", age: 28 };
console.log(`With param`);
destructureInParam(paramToUse);
console.log(`With default param`);
destructureInParam();

// Dustructuing while looping
console.log("*** Dustructuing while looping ***")

console.log("Static elements")
const usersLoop = [
  ["Alice", 25],
  ["Bob", 30],
  ["Charlie", 28]
];

for (const [name, age] of usersLoop) {
  console.log(`${name} is ${age} years old.`);
}

console.log("Dynamic elements as key value")
const objectsLoop = { name: "David", age: 22, grade: "A" };

for (const [key, value] of Object.entries(objectsLoop)) {
  console.log(`${key}: ${value}`);
}

// Dynamically changing property names while distructuring
console.log("*** Dynamically changing property names while distructuring ***")

// Setting 
const key = "username";
const user = { username: "mark123" };

const { [key]: userName } = user;
console.log(userName); // Output: mark123


const students = [
  { name: "Liam", age: 20 },
  { name: "Olivia", age: 21 }
];

const [{ name: firstStudent }, { name: secondStudent }] = students;

console.log(firstStudent);  // Output: Liam
console.log(secondStudent); // Output: Olivia


const apiResponse = {
  status: "success",
  data: {
    user: { id: 42, name: "Ethan", email: "ethan@mail.com" },
    location: { city: "Berlin", country: "Germany" }
  }
};

// Extract `name`, `email`, and `city` using destructuring