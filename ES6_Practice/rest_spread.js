function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10


const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // Output: 10
console.log(rest);  // Output: [20, 30, 40]