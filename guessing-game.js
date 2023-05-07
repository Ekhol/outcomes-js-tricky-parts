function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let isFinished = false;
    let guessCount = 0;

    return function guess(num) {
        if (isFinished) {
            return "You've won!";
        }
        guessCount++;
        if (num === answer) {
            isFinished = true;
            const guess = guessCount === 1 ? "guess" : "guesses";
            return `Congrats! You found ${num} in ${guessCount} ${guess}`;
        }
        if (num < answer) {
            return `${num} is too low`;
        }
        if (num > answer) {
            return `${num} is too high`;
        }
    };
}

module.exports = { guessingGame };
