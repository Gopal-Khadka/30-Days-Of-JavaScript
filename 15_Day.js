// classes
// Example 1
class Person {
    legs = 2
    hands = 2
    eyes = 2
    brain = 2
    "body parts" = ["heart", "eyes", "muscles", "bones", "brains"]
}
const firstPerson = new Person() // class instantisation
console.log(firstPerson.eyes) // accessing property
console.log(firstPerson["body parts"]) // accessing property
// Example 2
class Laptop {
    constructor(ram, rom, cpu) {
        this.ram = ram
        this.rom = rom
        this.cpu = cpu
    }
}
const laptop = new Laptop("16 gb", "512 gb", "Intel i5")
console.log(laptop) // Laptop { ram: '16 gb', rom: '512 gb', cpu: 'Intel i5' }
// Example 3
class Nepali {
    constructor(fname = "John", lname = "Doe", age = 10, city = "BKT") { // default values
        this.firstname = fname
        this.lastname = lname
        this.age = age
        this.age = city
    }
}
console.log(new Nepali())  // Nepali { firstname: 'John', lastname: 'Doe', age: 'BKT' }
const firstNepali = new Nepali("Gopal", "Khadka", 20, "KTM")  // Nepali { firstname: 'Gopal', lastname: 'Khadka', age: 'KTM' }
console.log(firstNepali)

// Example 4
class Employee {
    constructor(fname, lname, age, status) {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.status = status
        this.salary = 20000 // default values
        this.skills = ["HTML", "CSS"]
    }
    getData() {
        const data = `The name of employee is ${this.fname} ${this.lname}.Status is ${this.status} and age is ${this.age}. Salary is ${this.salary}`
        return data
    }
    get StatusData() {
        return this.status
    }
    get AgeData() {
        return this.age
    }
    set SetSkills(skill) {
        this.skills.push(skill)
    }
    set SetGender(gender) {
        this.gender = gender
    }

}
const employee = new Employee("Sita", "Raman", 25, "unmarried")
console.log(employee.getData()) // The name of employee is Sita Raman.Status is unmarried and age is 25.
console.log(employee.AgeData); // use get method to get data
employee.SetSkills = "JavaScript"  // add skills to list
employee.SetSkills = "Python"
employee.SetSkills = "Node.js"
employee.SetSkills = "PHP"
employee.SetGender = "female" // add gender attribute
console.log(employee.skills); // [ 'HTML', 'CSS', 'JavaScript', 'Python', 'Node.js', 'PHP' ]


// static method: they are called not on objects but on class itself
// example is Date.now() ==> now() is called directly from date class not from its objects

class Button {
    constructor(color = "blue", size = 5, style = "monospace") {
        this.color = color
        this.size = size
        this.style = style
    }
    static onClick() {
        return "I am clicked now."
    }
    static onHover() {
        this.opacity = "low"
        this.color = "white"
        return `I have ${this.opacity} opacity. My color is ${this.color}`
    }
}
const button = new Button()
console.log(button.color) // blue
// console.log(button.onHover()) // button.onHover is not a function
console.log(Button.onHover())  // I have low opacity. My color is white
console.log(Button.onClick()) // I am clicked now.

// Inheritance (a class inherits all methods and attributes of another class.)
class freeLancer extends Employee {
    constructor(fname, lname, age, status, nation = "USA") {
        super(fname, lname, age, status) // used super to inherit properties of employee class
        this.nation = nation // added new property to child class
        this.working_hours = 60 // added new property to child class
    }
    sayHello() {
        console.log("Hello, I am freelancer")
    }
}

const freelancer = new freeLancer("Amit", "Hasan", 24, "Married")
console.log(freelancer.AgeData) // getter of parent class
freeLancer.SetGender = "male" // setter of parent class
freelancer.sayHello() // function of child class
console.log(freelancer.working_hours,freelancer.nation) // 60 USA