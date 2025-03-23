const x = {'a': 1, 'b': 2, 'c': 3}
console.log(x)
console.log(Object.keys(x))         // ['a', 'b', 'c']
console.log(Object.values(x))       // [1, 2, 3]
console.log(Object.keys(x).length)  // 3
console.log(x['a'])                    // 'a'
console.log(x['test'])                    // undefined
console.log(x['test'] ?? 0)               // 0
console.log(x['a'] !== undefined)      // true
x['d'] = 4
console.log(x)                      // {'a': 1, 'b': 2, 'c': 3, 'd': 4}
delete x['d']
console.log(x)                      // {'a': 1, 'b': 2, 'c': 3}