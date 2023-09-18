const randNum = Math.floor(Math.random() * 10) + 1;

while(true){
    const userGuess = parseInt(prompt("Guess the number between 1 and 10: "));

    if (userGuess === randNum) {
        alert(`Great job! You guessed the correct number - ${randNum}.`);
        break;
    } else {
        alert("Incorrect guess. Try again.");
    }
}