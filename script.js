function computerPlay(){
    let rock,paper,scissors;
    const computerPick = ["rock", "paper", "scissors"];
    let computerChoice = computerPick[Math.floor(Math.random()*computerPick.length)];
    console.log(computerChoice);
}
computerPlay();