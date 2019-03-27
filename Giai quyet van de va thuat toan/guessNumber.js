function GameGuessNumber() {
    var n = prompt("Enter your number(0-100): ");
    var r = Math.round(10*Math.random()+100);
    if (n == r) {
        alert("Congralation! You are the winner!");
    } else {
        alert("Our number: "  + r + "\n Wish you luck next time!");
    }
}