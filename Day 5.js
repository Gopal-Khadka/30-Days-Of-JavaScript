// array declaration

// using constructor
let array = Array()
console.log(array)

// using square brackets
const list = []
console.log(list)

//  different types of arrays
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

// accessing array elements
first_fruit = fruits[0]
second_fruit = fruits[1]
last_fruit = fruits[fruits.length - 1]
console.log(first_fruit, second_fruit, last_fruit) // banana,orange,lemon

// modifying elements array's elements
fruits[2] = "peach" // replaces mango with peach 

// manipulate array
const eightArray = Array(8) // creates empty array of eight elements
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// concatenate arrays
let edibles = vegetables.concat(fruits)
console.log(edibles)

// get index of array
console.log(numbers.indexOf(37)) // 3
console.log(numbers.indexOf(9705))  // -1

// let us check if a banana exist in the array

let index = fruits.indexOf('banana')  // 0

if (index === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

// checking array
console.log(Array.isArray(numbers))  // true

// convet array to strings
console.log(numbers.toString()) // 0,3.14,9.81,37,98.6,100

// joins elements of array
console.log(fruits.join("-")) // banana-orange-peach-lemon

// slicing array
console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [ 3.14, 9.81, 37 ] // it doesn't include the ending position

// splice array
const nums = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(nums.splice(3, 3, 7, 8, 9))// [4,5,6] //it removes three item and replace three items

// nums.splice()
// console.log(nums)                // -> remove all items

// nums.splice(0,1)
// console.log(nums)            // remove the first item

// adding elements in array

nums.push(7) // adds elements at last
nums.unshift(0) // adds element in beginning

// removing elements from array

nums.pop(7) // pops 7 from array
nums.pop() // pops last item of array
nums.shift()  // removes first item

// reversing array
nums.reverse()
console.log(nums)  // [ 8, 7, 3, 2, 1 ]

// sorting arrays
nums.sort()
console.log(nums)  // [ 1, 2, 3, 7, 8 ]

// array of arrays

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]