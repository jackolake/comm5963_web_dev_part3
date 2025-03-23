const x = ['a', 'b', 'c']
console.log(x)
console.log(x.length)           // 3
console.log(x[0])               // 'a'
console.log(x[x.length - 1])    // 'c'
console.log(x.slice(0, 2))      // ['a', 'b']
console.log(x.includes('a'))    // true
x.push('d')
console.log(x)                  // ['a', 'b', 'c', 'd']
x.pop()
console.log(x)                  // ['a', 'b', 'c']