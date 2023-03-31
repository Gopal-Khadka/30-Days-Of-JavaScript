// High Order function(takes func as input or return func as value)

//callback func(func that can be passed as input to other func)
const sqr_callback = (n) => {

    return n ** 2
}
// passing func as input
const cube = (callback, n) => {
    return callback(n) * n
}
// calling func
console.log(cube(sqr_callback, 5))

// returning func
const higherOrder = m => {
    const doSthg = n => {
        const doWhatever = o => {
            return 2 * n + m - 5 + o * 4
        }
        return doWhatever
    }
    return doSthg
}
console.log(higherOrder(2)(3)(10)) // 2 *3+2-5+10*4=43


// For each method
const nums = [1, 2, 3, 4, 5, 6]
// Method 1
const sumArray = array => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    // array.forEach(console.log)
    array.forEach(callback)
    return sum
}
console.log(sumArray(nums)) // 21

// Method 2
const sumOfArray = array => {
    let sum = 0
    array.forEach(function (element) {
        sum += element
    })
    return sum
}
console.log(sumArray(nums)) // 21

// Setting time

// Set interval
// Method 1
// var sayHello = () => {
//     console.log("Hello")
// }
// setInterval(sayHello, 1000) // every sec hello is printed

// // Method 2
// setInterval(() => {
//     console.log("Hi")
// }, 1000);

// Set timeout
// setTimeout(() => {
//     console.log("Namaste"); // prints after 2 seconds
// }, 2000);

// For Each Loop

// arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
//   })

let sums = 0
nums.forEach(num => sums += num)
console.log(sums) // 21

// Map function (iterates over array and modify the elements)
const NumsSqr = nums.map((num) => num ** 2)
console.log(NumsSqr)

// Filter Function (returns array of itema which fulfill conditions)
// Example 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const nationsWithland = countries.filter((country) => country.includes("land"))
console.log(nationsWithland) // [ 'Finland', 'Ireland' ]

// Example 2
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)


//   Every (Check if all elements are same in cetain same aspect)
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)  // true


// some
// some: Check if some of the elements are similar in one aspect. It returns boolean
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => b === true)

console.log(areSomeTrue) //true

// find
// find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
const ageIndex = ages.findIndex((age) => age < 20)
console.log(age, ageIndex) // 18 5

// Sort elements

// Sort strings
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// Sort Numeric values
const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {  // compare callback function inside sort function
    return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

// Sorting object arrays

// objArr.sort(function (a, b) {
//     if (a['key'] < b['key']) return -1
//     if (a['key'] > b['key']) return 1
//     return 0
//   })

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users) // sorted ascending

