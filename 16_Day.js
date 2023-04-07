// JSON IN JAVASCRIPT
// JSON stands for JavaScript Object Notation
// JSON is similar to javascript objects except for the fact  that key of json should be string or enclosed with "".
// converting string of object into json format
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
// convert json to object

// const userObj=JSON.parse(usersText) 
// console.log(userObj)

// reviver func with json.parse()
const userObj = JSON.parse(
    usersText, (key, value) => {
        // reviver function
        // returns string value in upper case if its type is string and key is not email
        let newVal =
            typeof value == "string" && key != "email" ? value.toUpperCase() : value // ternary operator
        return newVal

    }
)
console.log(userObj)

// converting object of JS into JSON

// const txt=JSON.stringify(userObj)
// console.log(txt)

// convert object into JSON using filter array
const txt=JSON.stringify(userObj["users"],["firstName","lastName","age"],3)
console.log(txt)