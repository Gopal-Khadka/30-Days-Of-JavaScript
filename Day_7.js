// functions with parameters and return
function sum_of_squares(num) {
    let sum = 0
    for (let index = 0; index <= num; index++) {
        sum += index ** 2
        console.log(index, sum)
    }
    return sum
}
sums = sum_of_squares(12)
console.log(`The sum of squares up to 12 is ${sums}.`)

// function with multiple parameters
const addNumbers = (array) => {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element
    }
    return sum
}
array = [1, 2, 3, 4, 5]
console.log(addNumbers(array));

// unlimited parameters
function sumAllNums() {
    let sum = 0
    console.log(arguments)
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index]
    }
    console.log(sum)
}
sumAllNums(1, 2, 3, 4)
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 } // 15


// unlimited parameters in arrow function
function sumAllNumsWithArrow(...args) {
    let sum = 0
    console.log(args)
    for (let index = 0; index < args.length; index++) {
        sum += args[index]
    }
    console.log(sum)
}
sumAllNumsWithArrow(1, 2, 3, 4)
// [ 1, 2, 3, 4 ]

//Anonymous function(contains only one expression inside it doesn't use function keyword in LHS)
var anonFunc = function (platform) {
    console.log("Welcome to ", platform)
}
anonFunc("VS Code")

// Expression Function(contains expression inside)
const sqr = function (n = 10) {
    return n ** 2
}
console.log(sqr(5))

// self invoking functions(no need to be called)
(function (n) {
    console.log(n * n)
})(5) // ==>25
