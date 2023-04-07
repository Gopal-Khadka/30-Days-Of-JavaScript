// Callbacks in javascript

// Callbacks : functions that are passed as arguments to other functions and are executed once the operation is completed.
// Example 1
const doSthg = (callback) => {
    setTimeout(() => { // calls callback function after 2 seconds 
        const skills = ["HTML", "XML", "CSS"]
        const err = "Error occured!"
        callback(false, skills) // prints skills
        callback(err, skills)  // prints error
    }, 2000)
}
const callback = (err, skills) => {
    if (err) {
        return console.log(err) // Error occured!
    }
    return console.log(skills) // [ 'HTML', 'XML', 'CSS' ]
}
doSthg(callback)

// promises in javascript

// Promises handles asynchronous operations in JS
// Used to handle eventual success value or failure reason

// States of promise: pending,fulfilled,rejected

// pending: initial state, neither fulfilled with value nor rejected with reason.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// Promise constructor
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']

        // if (skills.includes("Node.js")) {
        //     resolve("Node is here") 
        // } else {
        //     reject('Node is not here') // this gets executed
        // }
        if (skills.length > 0) {
            resolve(skills)  // this is executed
        } else {
            reject('Something wrong has happened')
        }
    }, 3000)
})
doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

// Fetching API
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        // getting the data
        console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens


// Async and await : better way to handle promises
async function square(num) {
    if (typeof num !== 'number') {
        throw new Error('Argument must be a number.');
    }
    return num * num;
}

(async function () {
    try {
        const result = await square(5);
        console.log(result); // 25
    } catch (error) {
        console.error(error);
    }
})();


// fetching api using await and async
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()

// TODO: //Read the countries API using fetch and print the name of country, capital, languages, population and area.
// TODO: Read the countries api and create dict of countries according to area
// TODO: Read the countries api and count total number of languages in the world used as officials.




async function getCountry() {
    const response = await fetch(url)
    let data = await response.json()
    let object = []
    let area_dict = {}
    let lang_count = 0
    for (const item of data) {
        let lang_list = []
        let name = String(item["name"])
        let area = item["area"]
        for (const lang of item["languages"]) {
            lang_count += 1 // counting total no of languages
            lang_list.push(lang.name) // adding languages in list for each nation
        }
        let obj = {
            "name": name,
            "capital": item["capital"],
            "region": item["region"],
            "languages": lang_list,
            "area": area
        }
        object.push(obj) // adding object to list
        area_dict[name] = area // adding key and value to dict
    }
    console.log(object) // required dict of values
    console.log("Total no of languages used in world as officials is ", lang_count + ".") // no of language counts
    console.log(area_dict) // dict of country with area
} 

getCountry()

// TODO:
// Read the cats api and find the average weight of cat in metric unit.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
async function getCatWeight() {
    const response = await fetch(catsAPI)
    const result = await response.json()
    let weight_list = []
    for (const item of result) {
        let value = item["weight"]["metric"].split(" - ")
        let val1 = value[0]
        let val2 = value[1]
        weight_list.push(val1, val2)
    }
    let sum = 0
    weight_list.forEach((element) => {
        sum += Number(element)
    })
    avg = sum / weight_list.length
    console.log("The average weight of cat in metric unit is", Math.round(avg) + ".")

}
getCatWeight()

