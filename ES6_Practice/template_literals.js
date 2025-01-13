console.log(`*************************************************
Template Literals Lesson Start
`);

// Multiline string
console.log("*** Multiline string ***")

var greeting = "Good Morning!!!"
const person = {firstname: "Md Enam", lastname: "Hassan"}
person.age = 25

let multiline_string = `Hello ${person.firstname} ${person.lastname}
${greeting}`

console.log(multiline_string)


console.log(` 
Template Literals End
*************************************************
`);