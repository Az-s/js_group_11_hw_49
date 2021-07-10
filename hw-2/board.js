var hash = ''
var size = 8

hash = Array.from(Array(size), (_, i) =>
    Array.from(Array(size), (_, j) =>
        (i + j) % 2 ? '██' : '  '
    ).join('')
).join('\n');

console.log(hash)

