

const randomArr = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return randomArr[Math.floor(Math.random()*randomArr.length)]
};

let computerPoints = 0;
let playerPoints = 0;
let score = `${playerPoints} - ${computerPoints}`;

let scoreDiv = document.querySelector('.result')
scoreDiv.innerHTML = score;

let msgDiv = document.querySelector('.msg');
msgDiv.innerHTML = 'Choose wisely!'

const restartDiv = document.querySelector('.restart')
restartDiv.addEventListener('click', () => {
    computerPoints = 0;
    playerPoints = 0;
    msgDiv.innerHTML = 'Game restarted!';
    score = `${playerPoints} - ${computerPoints}`
    scoreDiv.innerHTML = score;
})

const playerChoices = document.querySelectorAll('.item')
let playerChoice

playerChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.closest('.item').classList[1];
    if (computerPoints < 5 && playerPoints < 5) {
        playRound();
    } else {
        scoreDiv.innerHTML = 'Restart yor game!'
    }
}))

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerChoice;

    if (playerSelection === computerSelection) {
        msgDiv.innerHTML = 'It\'s a tie! Score is';
        scoreDiv.innerHTML = score;

    }
    else if(playerSelection !== computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
            computerPoints += 1;
            score = `${playerPoints} - ${computerPoints}`;
            if (computerPoints < 5) {
                msgDiv.innerHTML = 'Computer wins. Score is';
                scoreDiv.innerHTML = score;
            } else if (computerPoints === 5){
                msgDiv.innerHTML = "It's Over. Computer WINS";
                scoreDiv.innerHTML = score;
            } else {
                msgDiv.innerHTML = "It's Over. Computer WINS";
                scoreDiv.innerHTML = 'Restart your game!';
            }
            
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerPoints += 1;
            score = playerPoints + ' - ' + computerPoints;
            if (playerPoints < 5) {
                msgDiv.innerHTML = 'You win. Score is';
                scoreDiv.innerHTML = score;
            } else if (playerPoints === 5){
                msgDiv.innerHTML = "GREAT GAME. YOU WIN";
                scoreDiv.innerHTML = score;
            } else {
                msgDiv.innerHTML = "GREAT GAME. YOU WIN";
                scoreDiv.innerHTML = 'Restart your game!';
            }
            
        }
    }
}






