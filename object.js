var person = {
    name: "Dhoni",
    age: 41,
    place: "Ranchi"
}

console.log(person)
console.log(person["name"])
console.log(person.name)
person["name"] = "MSD"
console.log(person.name)
person.name = "MSDhoni"
console.log(person.name)

for (var key in person) {
    console.log(key + ": " + person[key]);

}

var person = [
    {
        name: "Dhoni",
        age: 41,
        place: "Ranchi"
    },
    {
        name: "Tendulkar",
        age: 39,
        place: "Mumbai"
    }
]

for (let index = 0; index < person.length; index++) {
    console.log(person[index].name);

}

