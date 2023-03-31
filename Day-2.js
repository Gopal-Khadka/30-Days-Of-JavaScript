const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randnum = Math.random() // creates random number between 0 to 0.999999
console.log(randnum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
// Note sin or cos takes input in radians
// radians=degrees*Math.PI/180

Math.sin(60)
console.log(Math.sin(60 * Math.PI / 3))

Math.cos(60)
console.log(Math.cos(60 * Math.PI / 3))

// random number generator
let randNum = Math.random() // returns random between 0 and 0.999
let numBtnZeroAndTen = randNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10


// strings declaration
let space = ' '           // an empty space string
let firstName = 'Gopal'
let lastName = 'Khadka'
let country = 'Nepal'
let city = 'Bhaktapur'
let language = 'JavaScript'
let job = 'student'
let age = 20
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// strings concatenation
let fullname = firstName + space + lastName
console.log("My full name is " + fullname + ".I am" + space + age)


// long strings text
const paragraph = "My name is Gopal Khadka. I live in Nepal, Bhaktapur.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2022, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November - December.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2023. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

// template strings
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
console.log(`${a} is greater than ${b}: ${a > b}`) // 2 is greater than 3 : false

// string methods
console.log(fullname.length)  //12
let game = 'Football'
let firstletter = game[0]
let lastletter = game[game.length - 1]
console.log(firstletter, lastletter)  // F l
console.log(game.toUpperCase()) // FOOTBALL
console.log(game.toLowerCase()) // football
console.log(game.substring(4, 6)) // ba

// splitting strings
let challenge = '30 Days Of JavaScript'
console.log(game.split()) //Football
console.log(game.split(''))// ['F', 'o', 'o','t', 'b', 'a','l', 'l']
console.log(challenge.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(challenge.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// removing whitespace
console.log("   hello    ".trim())
console.log(" Hello ".trim())

// checking if word/characters is in string
console.log(challenge.includes("Days")) // true
console.log(challenge.includes("days"))  // false :case sensitive
console.log(game.includes("Foot"))  // true

// replacing strings
console.log(challenge.replace(language, "Python")) //replaces javascript with python

// finding character and their ascii code at given index
console.log(challenge.charAt(0))   // 3
console.log(challenge.charCodeAt(3)) //D ascii code: 68

// finding index of substring
console.log(challenge.indexOf("Days")) //3
console.log(challenge.indexOf("days")) //-1 doesn't exist

// finding last index of substring / returns lastposition of substring 
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('You'))        // -1
console.log(string.lastIndexOf('JavaScript')) // 38

// concatenating strings
console.log(string.concat("I also ", "love ", "Python."))

// check if string start with given substring

console.log(string.startsWith("I")) // true
console.log(string.startsWith("i")) // false

// check if string end with given substring
console.log(string.endsWith("love.")) // true
console.log(string.endsWith("love")) // false

// return index of first match
console.log(string.search("love"))  // 2

// repeating a given string
console.log("hello ".repeat(2)) // hello hello


// data type check
console.log(typeof age) // number
console.log(typeof fullname)  // string
console.log(typeof PI)  // number
console.log(typeof NaN)  // number
console.log(typeof true)  // boolean
console.log(typeof null) // object
console.log(typeof undefined)  // undefined

// type casting

// string to int/float
console.log(parseInt("10.21")) // 10
console.log(parseFloat("10.21"))  //10.21
console.log(Number("21.54"))  // 21.54
console.log(+"10.21")

// int/float to string
console.log(String(20.21)) // "10.21"
console.log(0.21.toString()) // "10.21"

// Coercion : implicit conversion of values from one data type to another (such as strings to numbers)
let two = '2'
console.log(Number(two) + parseInt(two)) // 4
console.log(two + two) // joins 2 and 2 as strings: 22
console.log(typeof (two + two)) // string
console.log(two + two - two) // converts 22 into number and subtracts 2 from it : 20
console.log(typeof (two + two - two)) // number



