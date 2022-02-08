
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    roundResult.textContent = playRound('rock', computerPlay());
    game(playerWinCount, computerWinCount);
    score.textContent = (`Human ${playerWinCount} : ${computerWinCount} Computer`);


});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    roundResult.textContent = playRound('paper', computerPlay());
    game(playerWinCount, computerWinCount);
    score.textContent = (`Human ${playerWinCount} : ${computerWinCount} Computer`);

});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    roundResult.textContent = playRound('scissors', computerPlay());
    game(playerWinCount, computerWinCount);
    score.textContent = (`Human ${playerWinCount} : ${computerWinCount} Computer`);

});

const results = document.querySelector('#results');
const roundResult = document.getElementById('roundResult');

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
const score = document.getElementById("score");
score.textContent = (`Human ${playerWinCount} : ${computerWinCount} Computer`)

function game(playerWinCount, computerWinCount) {
    if (playerWinCount === 5) {
        const playBtn = document.getElementById('playBtn')
        playBtn.textContent = `You have won the game. The score is ${playerWinCount}, ${computerWinCount}` 
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset the Game!';
        resetBtn.onclick = () => location.reload();
        playBtn.appendChild(resetBtn);
        
    } else if (computerWinCount === 5) {
        const playBtn = document.getElementById('playBtn')
        playBtn.textContent = `You have lost the game. The score is ${playerWinCount}, ${computerWinCount}`;
        computerWinCount = 0;
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset the Game!';
        resetBtn.onclick = () => location.reload();
        playBtn.appendChild(resetBtn);
        
    }
}


function playRound(playerSelection, computerSelection) {
    
    
    console.log(computerSelection);
    results.textContent = computerSelection;
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWinCount = ++playerWinCount;
        return (`You Win! Rock beats Scissors.`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! Paper beats Rock.`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWinCount = ++playerWinCount;
        return (`You Win! Paper beats Rock.`); 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! Scissors beat Paper.`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWinCount = ++computerWinCount;
        return (`You Lose! Rock beats Scissors.`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWinCount = ++playerWinCount;
        return (`You Win! Scissors beat Paper.`);
    } else if (playerSelection === computerSelection) {
        return (`Its a tie. Try again.`);
    } 
    
    
}





