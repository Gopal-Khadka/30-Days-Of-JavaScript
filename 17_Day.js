// HTML 5 WEB STORAGE
// Web storage: Session storage and local storage
// Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
//  The data storage limit of cookies in many web browsers is about 4 KB per cookie. 
// Web Storages can store far larger data (at least 5MB) and never transferred to the server. 

// We can access such stored data using JS
// session Storage: data is saved for certain session and gets cleared when page session ends
// localstorage: it is similar to session storage except for the fact that it has no expiry time.
//  They both use similar methods. So learning one means learning another.

// Local storage methods: setItem(), getItem(), removeItem(), clear(), key()

// storing string in localStorage
localStorage.setItem("fname", "Gopal")
console.log(localStorage) // Storage {fname: 'Gopal', length: 1}
// storing number in localStorage
localStorage.setItem("age", 20)
console.log(localStorage) // Storage {age: '20', fname: 'Gopal', length: 2}
// storing array in localStorage
const skills = ["HTML", "CSS", "JS"]
const skillJSON = JSON.stringify(skills) // array is first stringified
localStorage.setItem("skills", skillJSON)
console.log(localStorage) //Storage {age: '20', skills: '["HTML","CSS","JS"]', fname: 'Gopal', length: 3}
// storing object in localStorage
const user = {
    firstName: 'Gopal',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}
localStorage.setItem("user", JSON.stringify(user)) // object is first stringified


// Getting item from localStorage
// returns string
localStorage.getItem("user") // '{"firstName":"Gopal","age":250,"skills":["HTML","CSS","JS","React"]}'

// parsing output to object
let user_str=localStorage.getItem("user")
let userObj=JSON.parse(user_str)
console.log(userObj["skills"]) // (4) ['HTML', 'CSS', 'JS', 'React']

// display key name store using index 
console.log(localStorage.key(0)) // user

// removing item from local storage
localStorage.removeItem("age")
// clearing the local storage
localStorage.clear()
