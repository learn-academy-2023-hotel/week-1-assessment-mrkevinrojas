// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// first part is to think about how to convert the arrays into an integer, hint: use the .length method
// second is to create a variable where I can store both integers and use the addition operator to provide me the expected output
// third, with this I can now do the following:
//***var padresCombined = padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length
// now that we have store and added both integers to a variable, we can then log the output:
//***console.log(padresCombined)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:
// first part is to think about what can I do to 'split' the string and perhaps convert to an array where it will store them individually.  Also keep in mind that you are trying to split them individually, so you will have to use "".
var stringArray = currentCohort.split("")
// lets test each time so we know we are outputting what we desire:
// console.log(stringArray) [ 'G', 'o', 'l','f', ' ', '2','0', '2', '3'] --> it is important to note that the 'space' on index 4 also counts as a character.

// second part is to reverse the order of the list using the .reverse() method while will position item 8 to position 0 and the item in position 0 to position 8 and check by logging it.
stringArray.reverse() // So this can be confusing a bit because you have to remember wether you are using a mutator or accessor.  so in this case, you do no not have to create a new variable to store the reverse order because this method manipulates the orginal variable stringArray.
//console.log(stringArray)

// third part is to now convert this array back into a string.
//stringArray.join("") // I am leaving this here because it is important to note that you need to store the new string into another variable.  Remember, this is an accessor and when you try to log it, it will just log the reveresed order array.
//console.log(stringArray)
// so what we must do is store the new information into a new variable:
//var reverseString = stringArray.join("")
//console.log(reverseString)


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// first thing to think about is what tool can we use to loop through the entire sequence instead of us manually checking if the current element is an odd number.  
// we will use a for loop to sequence through the array from pos 0 to the last element.  
// it is important to know the start, stop and iteration sequence.  We will start at index 0 and stop at the last item but we have to make sure it is always at least one more than the number we want it to stop at or else it will exclude the number we want to include.  If we do not have a stop, then the loop will go to infinity.  Finally, we need to increase the the counter 'i' for example, by 1 so then our loop is able to sequence through the entire array.
for(i = 0; i < stockExchange.length; i++){
    //after we wrote our first line of code, we need conditional statement in order to identify an odd number.  there are many ways to do this but i chose to identify if the current number is not even, then log each occurence.  
    if( stockExchange[i] % 2 !== 0){
        // make sure to log the position of that number you are evaluating above!
        console.log(stockExchange[i])
    }
}
