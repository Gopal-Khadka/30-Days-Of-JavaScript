// data types
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

// Comments

// This is a single line Comment.
/* this 
is  
a multiline comment */

// Valid examples of variables

// firstName
// lastName
// country
// city
// capitalCity
// age
// isMarried

// first_name
// last_name
// is_married
// capital_city

// num1
// num_1
// _num_1
// $num1
// year2020
// year_2020

// declaration of variables
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true
const PI = 3.14 // geometrical constant
console.log(PI)
console.log(firstName, lastName, country, city, age, isMarried, PI)

// primitive data types
let word = 'JavaScript'
word[0] = 'M' // doesn'tmodify the string
console.log(word)

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'
console.log(js == py)             //false 

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) // false

// Non primitive data type
let nums = [1, 2, 3]
nums[0] = 4
console.log(nums)

let nums1 = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums1 == numbers)  // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

console.log(userOne == userTwo) // false

// Numbers(constants and variables)

const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI_ = Math.PI      // pi a geometrical constant
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(gravity, mass, PI_, boilingPoint, bodyTemp)