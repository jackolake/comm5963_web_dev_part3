const x = [1, 2]
const y = {a: 1, b: 2}
const z = {b: 3, c: 5}

console.log([...x, 3])      // [1, 2, 3]
console.log([0, ...x, 3])   // [0, 1, 2, 3]
console.log([...x, ...x])   // [1, 2, 3]
console.log({...y, c: 5})   // {a: 1, b: 2, c: 5}
console.log({...y, ...z})   // {a: 1, b: 3, c: 5}