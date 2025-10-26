// Initial Game Variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// 1. Function to generate the secret target number
const generateTarget = () => {
    // Returns a random integer between 0 and 9 (inclusive)
    return Math.floor(Math.random() * 10);
};

// Bonus: Helper function to calculate absolute distance
// This makes the compareGuesses function cleaner and easier to read.
const getAbsoluteDistance = (num1, num2) => {
    // Math.abs returns the absolute (non-negative) value
    return Math.abs(num1 - num2);
}

// 2. Function to compare the human and computer guesses
const compareGuesses = (humanGuess, computerGuess, target) => {
    // Determine the distance of each guess from the target
    const humanDifference = getAbsoluteDistance(humanGuess, target);
    const computerDifference = getAbsoluteDistance(computerGuess, target);

    // Human wins if their difference is less than or equal to the computer's difference.
    // The problem states the human wins in a tie.
    return humanDifference <= computerDifference;
};

// 3. Function to update the score based on the winner
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    // No need to return anything
};

// 4. Function to advance to the next round
const advanceRound = () => {
    currentRoundNumber++;
    // No need to return anything
};

// 5. Test your code (Simulation of a few rounds)

// Bonus 6: Function to validate the human guess
const checkHumanGuess = (guess) => {
    // Checks if the guess is within the required range (0-9)
    if (guess < 0 || guess > 9) {
        // We use console.error instead of alert() to follow best practices
        console.error('ALERT: Your guess is out of range! Please enter a number between 0 and 9.');
        // In a real application, you would prevent the game from advancing here.
        return false;
    }
    return true;
}

console.log('--- Starting Game Simulation ---');

// --- Round 1 ---
console.log(`\n--- Round ${currentRoundNumber} ---`);
const target1 = generateTarget();
const humanGuess1 = 5; // Sample human guess
const computerGuess1 = 8; // Sample computer guess
console.log(`Target: ${target1}, Human Guess: ${humanGuess1}, Computer Guess: ${computerGuess1}`);

if (checkHumanGuess(humanGuess1)) {
    const humanWins1 = compareGuesses(humanGuess1, computerGuess1, target1);
    const winner1 = humanWins1 ? 'human' : 'computer';

    updateScore(winner1);
    console.log(`Winner: ${winner1}. Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    advanceRound();
}

// --- Round 2 ---
console.log(`\n--- Round ${currentRoundNumber} ---`);
const target2 = generateTarget();
const humanGuess2 = 2; // Sample human guess
const computerGuess2 = 1; // Sample computer guess
console.log(`Target: ${target2}, Human Guess: ${humanGuess2}, Computer Guess: ${computerGuess2}`);

if (checkHumanGuess(humanGuess2)) {
    const humanWins2 = compareGuesses(humanGuess2, computerGuess2, target2);
    const winner2 = humanWins2 ? 'human' : 'computer';

    updateScore(winner2);
    console.log(`Winner: ${winner2}. Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    advanceRound();
}

console.log(`\n--- Game Over ---`);
console.log(`Final Scores: Human (${humanScore}) vs Computer (${computerScore})`);
console.log(`Final Round Number: ${currentRoundNumber}`);
