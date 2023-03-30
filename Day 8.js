// scopes

// Global objects and objects

a = "JavaScript" // global object
b = 10  // global scope variable and can be accessed everywhere
function letsLearnScope() {
    console.log(a, b)  // JavaScript 10
    if (true) {
        console.log(a, b)   // JavaScript 10
    }
    // local scopes and objects

    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 true
    }
    //   console.log(d) // not accessible
    var gravity = 9.81
}
// console.log(gravity)  // not accessible
letsLearnScope()
console.log(a, b) // accessible
// console.log(value) // not accessible

// A variable declared with var only scoped to function but
//  variable declared with let or const is block scope(function block, if block, loop block, etc).
// Block in JavaScript is a code in between two curly brackets({}).
if (true) {
    var gravity = 9.81
}
console.log(gravity)  // 9.81

// using var keyword
for (var i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
console.log(i) // 3 because of i++

// using let keyword
for (let j = 0; j < 3; j++) {
    console.log(j) // 0, 1, 2
}
// console.log(j), Uncaught ReferenceError: i is not defined

// Creating objects
const person = {} // empty object
const rectangle = {
    length: 20,
    breadth: 10,
    color: "red",
    dimension: "2-D",
    subjects: ["Maths", "Drawing", "Mechanics"],
    getArea: function () {
        return `Area:${this.breadth * this.length}`
    },
    'difficulty level': "easy"
}

// accessing objects
console.log(rectangle.breadth)  // 10
console.log(rectangle.subjects)  // [ 'Maths', 'Drawing', 'Mechanics' ]
console.log(rectangle['color'])  // red
console.log(rectangle['Area']) // undefined
console.log(rectangle.getArea()) // 200

// setting new key for an object
rectangle.devices = ["Laptop", "Mobile", "TV",]
console.log(rectangle.devices) // ["Laptop","Mobile","TV"]

rectangle.Area = rectangle.length * rectangle.breadth
rectangle.getAreaText = function () {
    return `Area of the rectangle is ${this.breadth}*${this.length}=${this.Area}`
}
console.log(rectangle.getAreaText()) // Area of the rectangle is 10*20=200

const copyRect = Object.assign(rectangle)
console.log(copyRect) // duplicates the object

const copyKeys = Object.keys(copyRect)
console.log(copyKeys) // duplicates only keys

const copyValues = Object.values(copyRect)
console.log(copyValues) // duplicates only values

const copyEntries = Object.entries(copyRect)
console.log(copyEntries) // duplicates only entries(keys,values)

const property = copyRect.hasOwnProperty("name")
console.log(property) // false // checks for properties