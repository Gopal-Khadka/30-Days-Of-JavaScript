// Error handling
// uses try and catch block like python
try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

//   Example 1
const RefError = () => {
    try {
        let lastName = 'Khadka'
        let fullName = firstName + ' ' + lastName
    } catch (err) {
        console.log(err) // ReferenceError: fistName is not defined
    }
}
// example 2
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error('Name of the error:', err.name)
    console.error('Error message:', err.message)
} finally {
    console.log('In any case I will be executed')
}

// throw(raises an user defined exception)

// throw 'Error occured'
// throw new Error("Error occured")
const throwError = (x) => {
    try {
        if (x == "") throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw "too small"
        if (x > 5) throw "too big"
    }
    catch (err) {
        console.error(err)
    }
}
throwError(10)


// Error types

// ReferenceError : (if variable is not declared)
RefError()

// SyntaxError: (if used syntax is wrong)
// let sqr = 2x2
// console.log(sqr)

// TypeError :(error in type)
let num = 10
console.log(num.toLowerCase())