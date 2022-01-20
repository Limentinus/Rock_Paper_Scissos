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
let playerSelection = prompt("Rock, Paper or Scissors?");
let computerSelection = computerPlay();
console.log(computerSelection);

function playRound() {
    

if ((playerSelection.toLowerCase() === "rock") && computerSelection === "Scissors") {
    return ("You Win! Rock beats Scissors.");
} else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
    return ("You Lose! Paper beats Rock.");
} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
    return ("You Win! Paper beats Rock."); 
} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
    return ("You Lose! Scissors beat Paper.");
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
    return ("You Lose! Rock beats Scissors.");
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
    return ("You Win! Scissors beat Paper.");
} else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return ("Its a tie. Try again.");
} else {
    return ("You must have misspellt something.");
}
 
}

alert(playRound());
alert(`The Computer chose ${computerSelection}`);