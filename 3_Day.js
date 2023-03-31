// boolean values
let isLightOn = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Note: All numbers(+ve or -ve ) are truthy values except zero
// Similarly all strings are truthy except empty string("")
// NaN,null ,undefined are all false.

let isOn = undefined
let isHungry = NaN
let isMarried = null

if (isMarried) {
    console.log("hello")  // this doesn't print anything at all
}

// arithmetic operations
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64


// Concatenating string with numbers using string interpolation
const boilingPoint = 100
const bodyTemp = 37
const gravity = 9.81
console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparison operators
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.

// Logical Operators

// && ampersand operator example
const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example
const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples
let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOff = !isLightOn           // false

// Increment/Decrement operators

// Increment operators
let count = 0
console.log(++count, count) // Pre-Increment gives 1 1
count = 0 //Resetting value
console.log(count++, count) // Post increment gives 0 1

// Decrement operators
count = 0
console.log(--count, count) // Pre-Increment gives -1 -1
count = 0
console.log(count--, count) // Post increment gives 0 -1

// Ternary operators

let isRaining = true
isRaining
    ? console.log('You need a rain coat.') // gets printed
    : console.log('No need for a rain coat.')

isRaining = false
isRaining
    ? console.log('You need a umbrella.')
    : console.log('No need for a umbrella.') //  gets printed

// Windows methods

alert("Message for alert")  // alerts the window
let number = prompt("Enter the number: ", 'Number goes here!') // asks for input with placeholder(2nd string)
console.log(number)

const agree = confirm('Are you sure you like to delete? ') // asks for confirmation
console.log(agree) // result will be true or false based on what you click on the dialog box

const now = new Date() // new Date object
const year = now.getFullYear() // return year
const month = now.getMonth() // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const day = now.getDay()  // returns number(0-6)
const minutes = now.getMinutes() // return number (0 -59)
const seconds = now.getSeconds() // returns number (0 -59)
const time = now.getTime() // returns seconds from January 1, 1970 till now 

console.log(now) // 2023-03-21T02:20:20.917Z
console.log(year) // 2023
console.log(month) // 2 // March since January=0
console.log(date) // 21 
console.log(day) // 2 // Since Sunday is 0. So Tuesday = 2
console.log(hours) // 8
console.log(minutes) // 10
console.log(seconds) //  11 
console.log(time) //1679365511605 i.e no of seconds 

console.log(`${date}/${month+1}/${year} ${hours}:${minutes}`) // 21/3/2023 8:10