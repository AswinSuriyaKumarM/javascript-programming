var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var randomnumber = Math.floor(Math.random() * 10) + 1
var noofguess = 3
if (randomnumber > 5) {
    randomnumber = randomnumber - 5;
}

function checkthenumber() {
    if (randomnumber == inputbox.value) {
        alert("You got it right, congrats")
        result.textContent = "You are right"
    }
    else {
        noofguess=noofguess-1
        if(noofguess==0){
            alert("You lost, generated random number is: "+randomnumber)
        }
        guesscount.textContent = "Available guesses: "+noofguess
        result.textContent = "You are wrong"
    }
}