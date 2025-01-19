console.log(`*************************************************
Arrow Functions Lesson Start
`);
    
// Basic Difference with traditional function
console.log("*** Basic Difference ***")

// Traditional function
console.log(`* Tradiitonal function output *`)
function addTraditional(a, b) {
    return a + b;
}
console.log(addTraditional(10, 10))
  
// Arrow function
console.log(`* Arrow function output *`)
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 5))