let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  Math.floor(Math.random() * 10);
};

const compareGuesses = (humanguess, computerguess, secretguess) => {
  const humandiff = Math.abs(humanguess - computerguess);
  const computerdiff = Math.abs(secretguess - computerguess);
  return humandiff <= computerdiff;
};

const updateScore = (winner) => {
  if (winner === "winner") {
    return humanScore++;
  } else if (winner === "computer") {
    return computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
