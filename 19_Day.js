//  Closures in JavaScript
// Closures: if inner func access variables of outer functions


// Example 1
function outerFunc() {
    let count = 0
    function innerFunc() {
        count++
        return count
    }
    return innerFunc
}
const func = outerFunc()
console.log(func()) // 1
console.log(func()) // 2
console.log(func()) // 3

// Example 2
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne) // 1
console.log(innerFuncs.plusOne) // 1
console.log(innerFuncs.minusOne) // 0
console.log(innerFuncs.plusOne) // 1

// Code Explanation:

// console.log(innerFuncs.plusOne) prints 1, because plusOne() was called when creating the innerFuncs object and incremented count to 1.
// console.log(innerFuncs.plusOne) prints 1 again, because the value of innerFuncs.plusOne is still 1 (it does not call the plusOne function again).
// console.log(innerFuncs.minusOne) prints 0, because minusOne() was called when creating the innerFuncs object and decremented count to 0.
// console.log(innerFuncs.plusOne) prints 1 again, because the value of innerFuncs.plusOne is still 1 (it does not call the plusOne function again).

// Modified version of Example 2
function outerFun() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return {
        plusOne: plusOne,
        minusOne: minusOne
    }
}
const innerFunc = outerFun()

console.log(innerFunc.plusOne()) // 1
console.log(innerFunc.plusOne()) // 2
console.log(innerFunc.minusOne()) // 1
console.log(innerFunc.plusOne()) // 2

// Code explained:
// In example 2, we accessed object of function whereas now we accessed the inner functions which works as we planned.

// Example 4
function outFunc(x){
function inFunc(y){
    return x+y
}
return inFunc
}
// Method 1
const newFunc=outFunc(10)
console.log(newFunc()) // NaN
console.log(newFunc(5)) //15

// Method 2
const nextFunc=outFunc(10)(5)
console.log(nextFunc) // 15