// JavaScript Style Guide

// Airbnb Style
// Standard JS style 
// Google Style

// My Rules for JavaScript Style:

// We used camelCase for variables and functions.
// All variable names start with a letter.
// We chose to use const for constants, arrays, objects and functions. In stead of double quote, we chose to use single quote or backtick. Single quote is becoming trendy.
// We also removed semicolons from our code but it is a matter of personal preference.
// Space around arithmetic operators, assignment operators and after comma
// Arrow function instead of function declaration
// Explicit return instead of implicit return if the function is one liner
// No trailing comma in the last value of an object
// We prefer this +=, -=, *= /=, **= instead of the longer version
// When we use console.log() it is good to print with a tag string to identify from where the console is coming


// variable (camelCase,singlequotes, const and let keyword only, start with a letter)
let firstName = 'Gopal'
let lastName = 'Khadka'
let country = 'Nepal'
const PI = Math.PI
const gravity = 9.81

// Arrays (Plural naming)
const names = ['Gopal', 'Ram', 'Hari', 'Krishna']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

// Functions (Arrow Functions, one liner func = explicit return)

const printFullName = (firstName, lastName) => firstName + ' ' + lastName
const hexColor = () => {
    const str = '0123456789abcdef'
    let hexcode = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexcode += str[index]

    }
    return hexcode // implicit return
}

// Loops
// normal for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase())
}
// for ..of loop
for (const name of names) {
    console.log(name.toUpperCase())
}
// forEach loop
names.forEach((name) => console.log(name.toUpperCase()))
// for ... in loop

// Objects
const person = {
    firstName: 'Gopal',
    lastName: 'khadka',
    age: 20,
    country: 'Nepal',
    city: 'KTM',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: false
}
//  for in loop : It is different than for ... of loop.
for (key in person) {
    console.log(key, ':', person[key])
}

// Conditionals

// if else if else
let num = 3
if (num === 0) {
    console.log(`${num} is zero.`)
}
else if (num > 0) {
    console.log(`${num} is positive num.`)
}
else if (num < 0) {
    console.log(`${num} is negative num.`)
}
else {
    console.log(`${num} is not a num.`)
}

// ternary operators
let timeToMarry = true
timeToMarry
    ? console.log("You are ready to marry")
    : console.log("You are not ready for marriage")

// classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}