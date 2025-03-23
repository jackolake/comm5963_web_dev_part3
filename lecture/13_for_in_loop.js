// 0: hi
// 1: cuhk
// 2: bye
const words = ['hi','cuhk', 'bye']
for (let i in words) {
    console.log(`${i}: ${words[i]}`)
}

// name: Jackie
// age: 18
const person = {name: 'Jackie', age: 30}
for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}