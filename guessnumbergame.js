var prompt = require("prompt-sync")()

function guess(guessedNumber) {

    var randomNumber = Math.floor(Math.random()*5) + 1

    if (randomNumber == guessedNumber) {
        console.log("guess is correct")
    } else {
        console.log("guess is in-correct")
    }
}

var guessedNumber = prompt()
guess(guessedNumber)