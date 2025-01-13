console.log(`*************************************************
Template Literals Lesson Start
`);

// Multiline string and String interpolation
console.log("*** Multiline string ***")

var greeting = "Good Morning!!!"
const person = {firstname: "Md Enam", lastname: "Hassan"}
person.age = 25

let multiline_string = `Hello ${person.firstname} ${person.lastname}
${greeting}`
console.log(multiline_string)

console.log("*** Complex expression in string ***")
person.debt = 50
person.paid = 20

multiline_string += `
I think you need to pay me ${person.debt - person.paid} more this week` // Summing integers in string.

console.log(multiline_string)

console.log(` 
Template Literals End
*************************************************
`);