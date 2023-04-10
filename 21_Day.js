// JavaScript DOM (Refer to 21_day.html for code working)

// Getting elements by name

const allTitles = document.getElementsByTagName("h1"); // gives all elements using tag name

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

// Getting elements by class
document.getElementsByClassName("title"); // gives all elements with class title

// Getting elements by id
document.getElementById("first-title"); // gives only one element with given id

// Getting elements using query selector
document.querySelector("h1"); // element
document.querySelector(".title"); // class
document.querySelector("#first-title"); // id

// Getting all elements using query selector
document.querySelectorAll("h1"); // element
document.querySelectorAll(".title"); // class
document.querySelectorAll("#first-title"); // id

// Adding attributes
const titles = document.querySelectorAll("h1");

// giving class and id of elements
titles[3].className = 'last-class'
titles[3].id = 'last-title'

// setting attribute for elements
titles[3].setAttribute('class', 'final-class') // class
titles[3].setAttribute('id', 'final-id') // id

// another way of setting attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

// removing class using classList
titles[3].classList.remove('title', 'header-title')

// Adding text content
titles[3].textContent = 'Last Title'

// using innerhtml to replace  text content
const lists = `
<li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Ongoing</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>`
const ul = document.querySelector('ul')
ul.innerHTML = lists

// Adding styles to html
titles.forEach((title, i) => {
    if (i % 2 === 0) {
        title.style.color = 'white' // red if even
        title.style.fontSize = '20px'
        title.style.backgroundColor = 'black'
    } else {
        title.style.color = 'red'  // else green
        title.style.fontSize = '20px'
        title.style.backgroundColor = 'yellow'
    }
})