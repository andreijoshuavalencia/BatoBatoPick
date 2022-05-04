function computerPlay(){
    // let rock,paper,scissors;
    const computerPick = ["rock", "paper", "scissors"];
    let computerChoice = computerPick[Math.floor(Math.random()*computerPick.length)];
    return computerChoice;
}

function playRound(player, computer){

    let choice = player.toLowerCase();
    console.log("You chose " + choice);
    console.log("Computer chose " + computer);
    switch(choice){
        case "rock":
            if (computer == "paper"){
                console.log("You win")
            }else if (computer == "scissors"){
                console.log("You lose");
            }else{
                console.log("Tied!");
            }
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));