// Regular Expressions(finding pattern in data)
// uses two forward flashes and optional flag(g,i,m,s,u,y)

let pattern = "love"
let flag = "gi" // gi means global flag(looking for whole text)
// let flag="i" // i means case sensitive
// let flag="m" // m means multiline
let regEx = new RegExp(pattern, flag) // Method 1
let reg_Ex = /love/gi   // Method 2


// Regex object methods

// test(): returns true or false after testing match in string
const str = "I love JavaScript"
var result = reg_Ex.test(str)
console.log(result) // true

//match():returns  array of all containing matches
result = str.match(pattern)
console.log(result)  // [ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]
console.log(str.match(reg_Ex)) // [ 'love' ]

// search(): returns index of match and returns -1 if search fails
result = str.search(reg_Ex) // 2
console.log(result)

// Replacing a substring
var replaced = /Python|python/g
let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
// Example 1
matchReplaced = txt.replace(replaced, 'JavaScript')
console.log(matchReplaced)
// Example 2
replaced = /Python/gi
matchReplaced = txt.replace(replaced, 'JavaScript')
console.log(matchReplaced)
// Example 3
txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher?.'

matches = txt.replace(/%/g, '')
console.log(matches)

// Note for regex patterns

// []: A set of characters
// [a - c] means, a or b or c
// [a - z] means, any letter a to z
// [A - Z] means, any character A to Z
// [0 - 3] means, 0 or 1 or 2 or 3
// [0 - 9] means any number 0 to 9
// [A - Za - z0 - 9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean: match where the string contains digits(numbers from 0 - 9)
// \D mean: match where the string does not contain digits
//     . : any character except new line character(\n)
//         ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.
// $: ends with
// r'substring' eg r'love 
// ′
// egr 
// ′
//  love', sentence ends with a word love
//     *: zero or more times
// r'[a]*' means a optional or it can occur many times.
// +: one or more times
// r'[a]+' means at least once or more times
//     ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// { 3 }: Exactly 3 characters
// { 3,}: At least 3 characters
// { 3, 8 }: 3 to 8 characters
//     |: Either or
// r'apple|banana' mean either of an apple or a banana
//     (): Capture and group


// Square brackets

// Example 1
let patterns = /[Aa]pple/g // this square bracket means either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
match = txt.match(patterns)
console.log(match)
// Example 2
patterns = /[Aa]pple/ // this square bracket means either A or a
match = txt.match(patterns)
console.log(match)
// Example 3
patterns = /[Aa]pple|[Bb]anana/g // | means either apple or banana
match = txt.match(patterns)
console.log(match) // ["Apple", "banana", "apple", "banana", "Banana"]

// Escape character (\) in RegExp

// Example 1
patterns = /\d/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'
match = txt.match(patterns)
console.log(match)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

// Example 2 (adding + in pattern)
patterns = /\d+/g  // d is a special character which means digits
match = txt.match(patterns)
console.log(match)    // ["12", "2020"], this is  what we want

// Example 3
patterns = /[a]./g  // this square bracket means a and . means any character except new line (no of dots corresponds to no of characters)
txt = 'Apple and banana are fruits'
match = txt.match(patterns)
console.log(match)  // ["an", "an", "an", "a ", "ar"]

// Zero or more times(*): The pattern may not occur or it can occur many times.

pattern = /[a].*/g  //. any character, + any character one or more times 
txt = 'Apple and banana are fruits.\nI love them.'
matches = txt.match(pattern)
console.log(matches)  // ['and banana are fruits']

// Zero or one times(?) : The pattern may not occur or it may occur once.

txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)
console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp

// Example 1
txt = 'This regular expression example was made in December 6,  2019.'
patterns = /\b\w{4}\b/g  //  exactly four character words
match = txt.match(patterns)
console.log(match)  //['This', 'made', '2019']
// Example 2
pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
matches = txt.match(pattern)
console.log(matches)  //['This', 'made']
// Example 3
pattern = /\d{4}/g  // a number and exactly four digits
matches = txt.match(pattern)
console.log(matches)  // ['2019']
// Example 4
pattern = /\d{1,4}/g   // 1 to 4
matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']

// Cart (^) 

// (starts with)
pattern = /^This/ // ^ means starts with
matches = txt.match(pattern)
console.log(matches)  // ['This']

// Negation
pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]

// Exact match(have ^ starting and $ end)
pattern = /^[A-Z][a-z]{3,12}$/;
names = 'Gopal';
result = pattern.test(names)

console.log(result) // true
