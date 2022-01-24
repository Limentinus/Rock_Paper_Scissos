let playerSelection;
let computerSelection;
let computerWinCount = 0;
let playerWinCount = 0;
// computerPlay() generates a random number between 1 and 3 and assigns each
// number a value of either Rock, Paper or Scissors
function computerPlay() {
    let playNumber = Math.floor(Math.random() * 3) + 1;
    if (playNumber === 1) {
        return ("Rock");
    } else if (playNumber === 2) {
        return ("Paper");
    } else if (playNumber === 3) {
        return ("Scissors");
    }

}



function playRound() {

    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        playerWinCount = ++playerWinCount;
        return (`You Win! The computer chose Scissors. Rock beats Scissors. The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! The computer chose Paper. Paper beats Rock.The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        playerWinCount = ++playerWinCount;
        return (`You Win! The computer chose Rock. Paper beats Rock. The score is ${playerWinCount}, ${computerWinCount}`); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! The computer chose Scissors. Scissors beat Paper. The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! The computer chose Rock. Rock beats Scissors.The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        playerWinCount = ++playerWinCount;
        return (`You Win! The computer chose Paper. Scissors beat Paper. The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return (`Its a tie. Try again. The score is ${playerWinCount}, ${computerWinCount}`);
    } else {
        return ("You must have misspellt something.");
    }
    console.log(playerWinCount);
    console.log(computerWinCount);
}


//the return message from playRound has to show up after each game
//and winCounter has to be updated.








// game executes playRound 5 times and then returns a message with the win or loss and the 
// win/loss ratio
    
function game() {
    
    console.log(playRound());
   
    console.log(playRound());
    
    console.log(playRound());
    
    console.log(playRound());
    
    console.log(playRound());

    if (playerWinCount > computerWinCount) {
        return (`You win the game. The score is:${playerWinCount}, ${computerWinCount}`);
    } else if (computerWinCount > playerWinCount) {
        return (`You lose the game.The score is:${playerWinCount}, ${computerWinCount}`);

    }
}
console.log(game());