const numbers = [1, 2, 3]

// [2, 4, 6]
result = numbers.map(n => n*2 )
console.log( result )

const users = [
    {name: 'A', sex: 'M'},
    {name: 'B', sex: 'F'},
    {name: 'C', sex: 'M'}
]
// [ 'Mr. A', 'Ms. B', 'Mr. C' ]
result2 = users.map(u => `${u['sex'] === 'M' ? 'Mr.' : 'Ms.'} ${u['name']}`)
console.log( result2 )
