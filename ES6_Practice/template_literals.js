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

console.log(`* Basic Tag function *`)

function tag(strings, ...values) {
    console.log(`* Tagged Parameters *`)
    console.log("Strings:", strings); // Array of strings, Elements of the array are the parts where the template literals are imploded. [ 'Hello, ', '. You are ', ' years old.' ]
    console.log("Values:", values);   // Array of interpolated values, that template literals values [ 'Alice', 25 ]

    console.log(`* Processed String *`)
    const processed = strings.reduce(function (result, str, i) {
        // Reduce function first parameter accumulator that is the current calculated total result for the operation
        console.log(result);

        // Reduce function second parameter accumulator that is the current element of the array
        console.log(str);

        console.log(values[i])

        if (i < values.length) {
            result += str + values[i];
        } else {
            result += str;
        }
        return result;
    }, "");

    return processed;
}

const parsonFirstName = "Alice";
const parsonLastName = "Wonderland";
const age = 25;

const result = tag`Hello, ${parsonFirstName} ${parsonLastName}. You are ${age} years old.`;
console.log(result);

console.log(`* Uppercase Tag function *`)

function makeUpper(string, ...values){
    const processed = string.reduce(function(accumulatedResult, currentValue, currentIndex){
        if (values[currentIndex] != null){
            accumulatedResult += accumulatedResult + currentValue + values[currentIndex].toUpperCase()
        } else {
            accumulatedResult += currentValue 
        }
        return accumulatedResult
    }, '')
    return processed
}

const wordtoUpper = "word to upper"

const txtWithUpper = `In this sentence ${makeUpper`The next word -> ${wordtoUpper} is upper case`}`

console.log(txtWithUpper);

function sanitize(strings, ...values) {
  const escapeHTML = (str) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  return strings.reduce((result, str, i) => {
    const sanitizedValue = values[i] ? escapeHTML(values[i]) : "";
    return result + str + sanitizedValue;
  }, "");
}

const userInput = "<script>alert('Hacked!')</script>";
const sanitizedOutput = sanitize`User input: ${userInput}`;
console.log(sanitizedOutput);

// Raw String
console.log(`
    *** Raw String ***`)

const rawString = String.raw`This is a newline character: \n`;
console.log(rawString);
// Output: This is a newline character: \n

console.log(` 
Template Literals End
*************************************************
`);