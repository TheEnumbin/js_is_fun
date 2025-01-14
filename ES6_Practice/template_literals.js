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

// Tagged templates
console.log(`
*** Tagged templates Basic ***`)


function tag(strings, ...values) {
    console.log(`* Tagged Parameters *`)
    console.log("Strings:", strings); // Array of strings, Elements of the array are the parts where the template literals are imploded. [ 'Hello, ', '. You are ', ' years old.' ]
    console.log("Values:", values);   // Array of interpolated values, that template literals values [ 'Alice', 25 ]

    console.log(`* Processed String *`)
    const processed = strings.reduce(function (result, str, i) {
        if (i < values.length) {
            result += str + values[i];
        } else {
            result += str;
        }
        return result;
    }, "");

    return processed;
}
  

const parsonName = "Alice";
const age = 25;

const result = tag`Hello, ${parsonName}. You are ${age} years old.`;
console.log(result);

console.log(` 
Template Literals End
*************************************************
`);