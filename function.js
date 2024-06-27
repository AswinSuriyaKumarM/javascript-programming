var a = 10
var b = 20

function add() {
    console.log(a + b)
}

add()

var fActor = "kamal"
var fPlayer = "dhoni"
var fMovie = "anbe sivam"

function favourite() {
    console.log("fActor: " + fActor)
    console.log("fPlayer: " + fPlayer)
    console.log("fMovie: " + fMovie)
}

favourite()

function area(length, breadth) {
    var area = length * breadth
    console.log(area)
}

area(10, 20)

function add(a, b) {
    return a + b;
}

var result = add(3, 5)
console.log(result)

function findEvenOrOdd(number) {
    if (number == 0) {
        console.log("That's neither even or odd number")
    } else if (number % 2 == 0) {
        console.log("It's an even number")
    } else {
        console.log("It's an odd number")
    }
}

findEvenOrOdd(0)

function isSuperHero(superHeroName) {

    var firstLetter = superHeroName.charAt(0)

    if (firstLetter == "s") {
        console.log("Yes, he's a superhero")

    } else {
        console.log("No, he's not a superhero")

    }

}

isSuperHero("superman")

var randomNumber = Math.random() * 10
console.log(Math.floor(randomNumber) + 1)