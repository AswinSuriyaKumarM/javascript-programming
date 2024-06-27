var a = [10, 20, 30, 40, 50]

a[2] = 35

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

var a = [10, 20, 30, 40, 50]

for (count = 0; count < 5; count = count + 1) {
    console.log(a[count])
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var b = [];
var c = [];
console.log("array: ")
console.log(array)
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        b.push(array[index])
    } else {
        c.push(array[index])
    }

}
console.log("Even number: ")
console.log(b)
console.log("odd number: ")
console.log(c)