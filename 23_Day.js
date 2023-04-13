//  DOM Day 3

// Click element
const button1 = document.querySelector('button')
button1.addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})

// using onlick into html element
{/* <button onclick="clickMe()"> Click me</button> */ }
const click = () => {
    alert('We an attach event even on HTML element.')
}

// double click event listener
const button2 = document.querySelector('button')
button2.addEventListener('dblclick', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})
// mouse enter listener
const button3 = document.querySelector('button')
button3.addEventListener('mouseenter', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})

// Similarly same methods can be used for such events.

// click - when the element clicked
// dblclick - when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove - when the mouse pointer move on the element
// mouseover - when the mouse pointer move on the element
// mouseout -when the mouse pointer out from the element
// input -when value enter to input field
// change -when value change on input field
// blur -when the element is not focused
// keydown - when a key is down
// keyup - when a key is up
// keypress - when we press any key
// onload - when the browser has finished loading a page

// Getting value from input
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')

let bmi
button.addEventListener('click', () => { // when button is clicked
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})

// getting value when input is in focus(input/change event listener)
const input1 = document.querySelector('input')
const p = document.querySelector('p')

input1.addEventListener('input', e => {
    p.textContent = e.target.value
})

// getting value when input is not in focus
const input2 = document.querySelector('input')
const para = document.querySelector('p')

input2.addEventListener('blur', (e) => {
    para.textContent = 'Field is required'
    para.style.color = 'red'
})

// Keypress keydown and keyup
document.body.addEventListener('keypress', e => {
    alert(e.key)
})
