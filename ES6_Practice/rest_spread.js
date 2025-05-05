function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10


const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // Output: 10
console.log(rest);  // Output: [20, 30, 40]


const users = [
  { id: 1, name: "A", email: "a@example.com" },
  { id: 2, name: "B", email: "b@example.com" }
];

for (const { id, ...rest } of users) {
  console.log(id);   // 1, 2
  console.log(rest); // { name: ..., email: ... }
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };
const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 99, c: 3 }

const obj = { x: 1, y: 2 };
const copy = { ...obj };

console.log(copy); // Output: { x: 1, y: 2 }