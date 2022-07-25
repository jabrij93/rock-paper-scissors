let playerScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreboard_div = document.querySelector(".scoreboardr");
let message = document.querySelector(".message");
let options = document.querySelector(".options");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
let message2 = document.querySelector('.message2');


function computerPlay() {
    const options = ["Rock" , "Paper", "Scissor"];
    let choose = options[Math.floor(Math.random() * options.length)];
    return choose.toLowerCase() ;
}

function playRound(playerSelection, computerPlay)  {
    
    while (playerScore < 6 || computerScore < 6) {
        if (playerSelection === computerPlay ) {
            console.log("Draw !");
            message.textContent = `Draw !`
            break;
        } else if (playerSelection === "paper" && computerPlay === "Rock".toLowerCase() ) {
            message.textContent = `Player select ${playerSelection} ,  computer select  ${computerPlay} , player wins !`
            playerScore++;
            userScore_span.textContent = playerScore;
            console.log(playerScore);
            break;
        } else if (playerSelection  === "scissor".toLowerCase()  && computerPlay.toLowerCase() === "Paper".toLowerCase()) {
            message.textContent = `Player select ${playerSelection},  computer select  ${computerPlay} , player wins !`
            playerScore++;
            userScore_span.textContent = playerScore;
            console.log(playerScore);
            break;
        } else if (playerSelection  === "Rock".toLowerCase()  && computerPlay.toLowerCase() === "Scissor".toLowerCase()) {
            message.textContent = `Player select ${playerSelection},  computer select  ${computerPlay} , player wins !`
            playerScore++;
            userScore_span.textContent = playerScore;
            console.log(playerScore);
            break;
        } else {
            console.log("Player select" + playerSelection + ",  Computer select" + computerPlay + ", computer wins !");
            message.textContent = `Player select ${playerSelection},  computer select  ${computerPlay} , computer wins !`
            computerScore++;
            computerScore_span.textContent = computerScore;
            console.log(computerScore);
            break;
        } 
        playerScore++;
    }      

    if (playerScore === 5) {
        message.textContent = "Congratulations, you win the game !";
        message2.textContent = "Never let it rest till your good is better, and your better is best !";
        playerScore = 0;
        computerScore = 0;
        userScore_span.textContent = 0;
        computerScore_span.textContent = 0; 
        return;
        } else if (computerScore === 5 ) {
            message.textContent = "Computer has won the game ";
            message2.textContent = "Don't give up, try again buddy!";
            playerScore = 0;
            computerScore = 0;
            userScore_span.textContent = 0;
            computerScore_span.textContent = 0; 
            return;
            }
}       

rock.addEventListener('click', function() {
    playRound("rock", computerPlay());
})

paper.addEventListener('click', function() {
    playRound("paper", computerPlay())
})

scissor.addEventListener('click', function() {
    playRound("scissor", computerPlay());
})

// function selectOptions(selection) {
//          if (selection.target == rock) {
//             playRound("rock", computerPlay());
//         }  else if (selection.target == paper) {
//             playRound("paper", computerPlay());
//         }   else if (selection.target == scissor) {
//             playRound("scissor", computerPlay());
//         }         
// }

// options.addEventListener('click', selectOptions); 

// function game() {
//     for (let i = 0; i < 5; i ++) {
//         selectOptions();
//         if ( playerScore === 5) {
//             console.log("Player reach 5 points, player wins the game !")
//         } else if ( computerScore === 5 ) {
//             console.log("Computer reach 5 points, computer wins the game !")
//         }
//     }
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerPlay(), computerPlay());
//     }
// }


// function playerPlay() {
//     let input = selectOptions(selection);
//     console.log( input )
// }

// playRound(selectOptions(), computerPlay());


// function playerPlay(selection) {
//     if (selection) {
//         selection.addEventListener('click', () => {
//             console.log(selection);
//             // return selection.toLowerCase();
//         })
//     }
// }


// playRound(playerPlay(), computerPlay());

// if (startGame) {
//     startGame.addEventListener('click' , () => {
//         alert("Choose Rock, Paper or Scissor ");
//     });
// |}


// function playRound(playerSelection, computerSelection)  {
//     //     if (playerSelection.toLowerCase() === "Paper".toLowerCase()  && computerSelection.toLowerCase()  === "Rock".toLowerCase() )  {
//     //         console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} player wins !`);
//     //     } else if (playerSelection.toLowerCase()  === "Scissor".toLowerCase()  && computerSelection.toLowerCase() === "Paper".toLowerCase() ) {
//     //         console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} player wins !`);
//     //     }  else if (playerSelection.toLowerCase()  === "Rock".toLowerCase()  && computerSelection.toLowerCase() === "Scissor".toLowerCase() ) {
//     //         console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} player wins !`);
//     //     }  else if (playerSelection.toLowerCase()  ===  computerSelection.toLowerCase()  ) {
//     //         console.log(`Player choose ${playerSelection} and computer plays ${computerSelection} game is draw !`);
//     //     } else {
//     //         console.log(`Player choose ${playerSelection}, computer plays ${computerSelection}, computer wins !`);
//     // }
// }


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerPlay(), computerPlay());
//     }
// }

// function game() {
//     i
// }

// function game() {
//     return playRound(playerPlay(), computerPlay());
// }

// game();