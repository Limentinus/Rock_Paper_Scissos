
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    results.textContent = playRound('rock', computerPlay());
    game(playerWinCount, computerWinCount);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    results.textContent = playRound('paper', computerPlay());
    game(playerWinCount, computerWinCount);

});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    results.textContent = playRound('scissors', computerPlay());
    game(playerWinCount, computerWinCount);
});

const results = document.querySelector('#results');
const wRes = document.querySelector('#winResult');

function computerPlay() {
    let playNumber = Math.floor(Math.random() * 3) + 1;
    if (playNumber === 1) {
        return ("rock");
    } else if (playNumber === 2) {
        return ("paper");
    } else if (playNumber === 3) {
        return ("scissors");
    }

}

let computerWinCount = 0;
let playerWinCount = 0;

function game(playerWinCount, computerWinCount) {
    if (playerWinCount === 5) {
        wRes.textContent = `You have won the game. The score is ${playerWinCount}, ${computerWinCount}` 
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset the Game!';
        resetBtn.onclick = () => location.reload();
        wRes.appendChild(resetBtn);

    } else if (computerWinCount === 5) {
        wRes.textContent = `You have lost the game. The score is ${playerWinCount}, ${computerWinCount}`;
        computerWinCount = 0;
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset the Game!';
        resetBtn.onclick = () => location.reload();
        wRes.appendChild(resetBtn);

    }
}


function playRound(playerSelection, computerSelection) {
    
    
    console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWinCount = ++playerWinCount;
        return (`You Win! The computer chose Scissors. Rock beats Scissors. The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! The computer chose Paper. Paper beats Rock.The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWinCount = ++playerWinCount;
        return (`You Win! The computer chose Rock. Paper beats Rock. The score is ${playerWinCount}, ${computerWinCount}`); 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! The computer chose Scissors. Scissors beat Paper. The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! The computer chose Rock. Rock beats Scissors.The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWinCount = ++playerWinCount;
        return (`You Win! The computer chose Paper. Scissors beat Paper. The score is ${playerWinCount}, ${computerWinCount}`);
    } else if (playerSelection === computerSelection) {
        return (`Its a tie. Try again. The score is ${playerWinCount}, ${computerWinCount}`);
    } 

    
}



    
