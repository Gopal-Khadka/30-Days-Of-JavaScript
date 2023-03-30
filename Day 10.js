const emptySet = new Set()
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
// set has only unique values
const lang_set = new Set(languages)
// printing items of set
lang_set.forEach((lang) => console.log(lang))
// adding elements in set
lang_set.add("Nepali")
lang_set.add("Bengali")
lang_set.add("Hindi")
lang_set.add("German")
// delete elements
console.log(lang_set.delete("German")); // true
// checking element in set
console.log(lang_set.has("Nepali")); // true
// find size of set
console.log(lang_set.size)
// clear all items of set
// lang_set.clear()

// Using set to find duplicates in list
const counts = []
const count = {}

for (const l of lang_set) {
    const filteredLang = languages.filter((lng) => lng === l)
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

// find union,intersection and difference of set
let odd_list = [1, 3, 5, 7, 9]
let primes_list = [2, 5, 7, 11]
let odd = new Set(odd_list)
let primes = new Set(primes_list)
let union = new Set([...odd, ...primes])
let intersection = new Set(odd_list.filter((num) => primes.has(num)))
let difference = new Set(odd_list.filter((num) => !primes.has(num)))
console.log(union);
console.log(intersection);
console.log(difference);

//Map
const emptymap = new Map()
// list into map
let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const countriesMap = new Map(countries)
console.log(countriesMap)
console.log(countriesMap.size) // 3
// adding items into map
countriesMap.set("Germany", "Berlin")
countriesMap.set("India", "New Delhi")
console.log(countriesMap.size) // 5

// Getting values from map 
console.log(countriesMap.get('Finland')) // Helsinki
// Check if key is in map
console.log(countriesMap.has('Finland')) //  true
// getting values from map using loop

// Method 1
for (const [country, city] of countriesMap) {
    console.log(country, city)
}
// Method 2
for (const country of countriesMap) {
    console.log(country)
}
