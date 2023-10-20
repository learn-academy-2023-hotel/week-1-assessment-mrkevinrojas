// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: this will output 10
// b) Verify and explain: 10 is the answer.  In this example, .length returns the length of an string as well as an array.  It will also count a space as a character of that single string.

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: 'o'
// b) Verify and explain: current answer is 'o'.  Like arrays you can use [] to find the position of that string.  Also have to remember that the string also starts from 0 and not 1.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: this will log "Ruby"
// b) Verify and explain: correct answer: "Ruby".  The elements within the array are all seperated by a comma.  A index is identified with the number 1 which is then called in line 36 to return that position in the languages array.  Remember, like a string, an array starts from position 0.  

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: this will output an error
// b) Verify and explain: This one confused me briefly because it is easy to mistake that because there are string data types within an array, using the .toUpperCase() method to turn them to uppercase should work. However, the .toUpperCase() method is used for string data types and not arrays. I also thought, what if there was a number in the array? Logically you cannot turn an integer to a capital letter. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: integer
// b) Verify and explain: the correct answer is 'number'.  Well breaking down each piece of code in line 52, it is important to note the first part which calls for the 'type of' so a data type.  We also know that when you use the .length for an array, it will return an integer.  So typeof returns an integer because of .length.
