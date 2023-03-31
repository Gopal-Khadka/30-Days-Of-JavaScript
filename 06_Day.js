// Loops
// for loops
let array = [];
for (let index = 0; index < 10; index++) {
    array.push(index);
    console.log(`${index} * ${index} = ${index ** 2}`);
}
// squaring each items of array
const newArr = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArr.push(element ** 2)
}
console.log(newArr);
// do while loop
let i = 0
do {
    console.log(i);
    i++;
}
while (i <= 5)

// for of loop
let sum = 0;
for (const element of array) {
    sum += element
}
console.log(sum);

// break
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}
// 0 1 2


// continue
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// 0 1 2 4 5
