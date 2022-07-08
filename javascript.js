function computerPlay() {
    const options = ["Rock" , "Paper", "Scissors"];
    let choose = options[Math.floor(Math.random() * options.length)];
    return choose.toLowerCase() ;
}

function playerPlay() {
    let input = prompt("Choose Rock, Paper or Scissors ");
    return input;
}

// const computerSelection = computerPlay();
// const playerSelection = playerPlay();
 
function startGame(playerSelection, computerSelection)  {
        if (playerSelection.toLowerCase() === "Paper".toLowerCase()  && computerSelection.toLowerCase()  === "Rock".toLowerCase() )  {
            console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} player wins !`);
        } else if (playerSelection.toLowerCase()  === "Scissor".toLowerCase()  && computerSelection.toLowerCase() === "Paper".toLowerCase() ) {
            console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} player wins !`);
        }  else if (playerSelection.toLowerCase()  === "Rock".toLowerCase()  && computerSelection.toLowerCase() === "Scissors".toLowerCase() ) {
            console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} player wins !`);
        }  else if (playerSelection.toLowerCase()  ===  computerSelection.toLowerCase()  ) {
            console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} game is draw !`);
        } else {
            console.log(`Player choose ${playerSelection}, computer plays ${computerSelection}, computer wins !`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        startGame(playerPlay(), computerPlay());
    }
}