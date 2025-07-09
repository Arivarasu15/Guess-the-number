var input = document.getElementById("input")
var result = document.getElementById("result")
var gueses = document.getElementById("gueses")

var numberofguess = 3


var randomnumber = Math.floor(Math.random() * 10) + 1

if (randomnumber > 5) {
    randomnumber = randomnumber - 5
}

function checkthenumber() {
    if (input.value == randomnumber) {
        alert("Your are Right,Congratulation")
    }
    else {
        numberofguess = numberofguess - 1
        if (numberofguess == 0) {
            alert("Your lost the Genarator number " + randomnumber)
        }
        gueses.textContent = "Available Guesses:" + numberofguess
        result.textContent = "You are Wrong !"

    }

}