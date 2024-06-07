var a= [10,20,30,40,50]

a[2]=35

console.log(a[2])

console.log(a)

a.pop()

console.log(a)

a.push(50)

console.log(a)

var b = a.slice(1, 3);

console.log(b)

console.log(a)

b.splice(1, 1);

console.log(b)

a.splice(2, 1, 30);

console.log(a)

var f = [24, 55, 48, 97]
console.log(f.length)
console.log(f.indexOf(48))
console.log(f.includes(24))