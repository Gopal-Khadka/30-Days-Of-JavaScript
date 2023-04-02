// Console object methods

// log method
console.log("Hello World")
console.log('%d %s of JavaScript', 30, 'Days') // Substitution method

// warn method (run this in browser console)
console.warn('This Is Warning')
console.warn('Warning is different from error')

// error method
console.error('This is an error message')
console.error('We all make mistakes')

// table method (shoes data in table form)
// Example 1
const names = ['Gopal', 'Brook', 'David', 'John']
console.table(names)
// Example 2
const user = {
    name: 'Gopal',
    title: 'Programmer',
    country: 'Nepal',
    city: 'Kathmandu',
    age: 20
}
console.table(user)
// Example 3
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)
// Example 4
const users = [
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

// time and timeEnd method (give a name to each time and it records time taken for a operation to execute)
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')

// info method (shows info in console of browser)
console.info('I am doing 30 Days Of JavaScript challenge ')

// assert method (writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.)
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

// count method (count no of time any function has been called and shows it in console)
const func = () => {
    console.count('Function has been called')
  }
for (let index = 0; index <= 2; index++) {
    func() // gets called 3 times
}

// clear method: ( cleans the browser console. )
setTimeout(() => {
    console.clear() // prints after 3 seconds
}, 3000);

// group method: (help to group different log groups)
// Example 1
console.group('Names')
console.log(names)
console.groupEnd()
// Example 2
console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
