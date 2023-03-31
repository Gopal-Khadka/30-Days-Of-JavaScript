// Destructuring (unpack arrays and objects and assign to distinct variable)
// Range
function range(start = 0, end) {
    const length = end - start;
    return Array.from({ length }, (_, index) => index + start);
}
// destructuring arrays
// Example 1
const numbers = range(1, 10)
console.log(numbers)
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

// Example 2
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd)
console.log(backEnd)

// Example 3
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [, secPerson, , fourPerson] = names // first and third person is omitted

console.log(secPerson, fourPerson)

// Example 4
const namesOfPerson = [undefined, 'Brook', 'David']
let [
    firstPerson = 'Asabeneh',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

// Spread operator(...rest)
let [num1, num2, num3, ...rest] = numbers.slice(-6)
console.log(num1) // 4
console.log(rest) // [7,8,9]

// Destructuring using iterator 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, capital] of countries) {
    console.log(capital, country)
}

// Destructuring object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)  // 20 10 200 undefined

const parallelogram = {
    base: 20,
    height: 10,
    area: 200
}
let { base: b, height: h, area: a, perimeter: p } = parallelogram   // renaming while destructuring 

console.log(b, h, a, p)  // 20 10 200 undefined


// Object parameter without destructuring
const calcPerimeter = rect => {
    return 2 * (rect.width + rect.height)
}

console.log(calcPerimeter(rectangle)) // 60

// Object parameter with destructuring
const calc_perimeter = ({ width, height, ...rest }) => {
    return 2 * (width + height)
}
console.log(calc_perimeter(rectangle))  // 60

// Destructuring object during iteration
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}

// Copy array using spread operator
let nums = range(0, 5)
let nums_5 = [...nums]
console.log(nums_5)

// Copy object using spread operator
const user = {
    name: 'Gopal',
    title: 'Programmer',
    country: 'Nepal',
    city: 'Kathmandu'
}

const copiedUser = { ...user, title: "Learner" } // modifies title key while copying
console.log(copiedUser) // {name: 'Gopal',title: 'Learner',country: 'Nepal',city: 'Kathmandu'}


// spread operator with arrow function
const sumAllNums = (firstNum, SecondNum, ...args) => {
    let sum = 0
    sum = firstNum + SecondNum
    for (const arg of args) {
        sum += arg
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5)) // 15
