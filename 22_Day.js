// DOM in JavaScript

// Creating element
let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOM Day 2'
console.log(title)

// Creating elements
let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    console.log(title)
}

// Appending child to parent element
let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    document.body.appendChild(title)
}
// For removing children of parent element
// Method 1
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)

}
// Method 2
const nav=document.querySelector('nav')
nav.innerHTML='' // clears everything inside nav