let randomLocation = Math.floor(Math.random() * 5);
let location1 = randomLocation;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0 to 6:");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!")
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}
let stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${3/guesses}%.`;
alert(stats);