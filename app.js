

const randomArr = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return randomArr[Math.floor(Math.random()*randomArr.length)]
};

let computerPoints = 0;
let playerPoints = 0;
let score = '0 - 0';

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(score)
        return 'It\'s a tie! Score is ' + score;
    }
    else if(playerSelection !== computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
            computerPoints += 1;
            score = playerPoints + ' - ' + computerPoints;
            if (computerPoints < 5) {
                console.log(score);
                return 'Computer wins. Score is ' + score;
            } else {
                computerPoints = 0;
                playerPoints = 0;
                oldScore = score;
                score = playerPoints + ' - ' + computerPoints;
                return "It's Over. Computer WINS " + oldScore;
            }
            
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerPoints += 1;
            score = playerPoints + ' - ' + computerPoints;
            if (playerPoints < 5) {
                console.log(score)
                return 'You win. Score is ' + score;
            } else {
                computerPoints = 0;
                playerPoints = 0;
                oldScore = score;
                score = playerPoints + ' - ' + computerPoints;
                return  "GREAT GAME. YOU WIN " + oldScore;
            }
            
        }
    }
}


