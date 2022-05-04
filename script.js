function computerPlay(){
    // let rock,paper,scissors;
    const computerPick = ["rock", "paper", "scissors"];
    let computerChoice = computerPick[Math.floor(Math.random()*computerPick.length)];
    return computerChoice;
}
function playRound(player, computer){
    let roundWinner = '';
    let choice = player.toLowerCase();
    console.log("Player chose " + choice);
    console.log("Computer chose " + computer);

    if(player === computer){
        roundWinner = "It's a tie!";
    }else if(player == 'rock' && computer == 'scissors'){
        roundWinner = "Win";
    }else if(player == 'rock' && computer == 'paper'){
        roundWinner = "Lose";
    }else if (player == 'paper' && computer == 'rock'){
        roundWinner = "Win";
    }else if (player == 'paper' && computer == 'scissors'){
        roundWinner = "Lose";
    }else if (player == 'scissors' && computer == 'rock'){
        roundWinner = "Lose";
    }else if(player == 'scissors' && computer == 'paper'){
        roundWinner = "Win";
    }
    return roundWinner;
}

function game(){
    let roundWinner = "none";
    let playerPoints = 0;

    for (let i = 0; i < 5; i++ ){
        let currentWinner = playRound(playerSelection, computerPlay());
        if (currentWinner === 'Win'){
            playerPoints++;
        }
    }
    
    console.log(playerPoints);
}
const playerSelection = "scissors";
// let computerSelection = computerPlay();
game();
// console.log(playRound(playerSelection, computerSelection));