let totalWins = 0;
let totalLoss = 0;
//// KEY:
//// ROCK = 0
//// PAPER = 1
//// SCISSORS = 2

let key = ["Rock", "Paper", "Scissors"];


function computerPlay() {
    let toReturn = Math.floor(Math.random()*3);
    computerChoice.textContent = "Computer: " + key[toReturn];
    return toReturn;
}

// function playerPlay() {
//     let choice = prompt("Rock, Paper, or Scissor?").toLowerCase();
//     if(choice == "rock") {
//         return 0;
//     } else if(choice == "paper") {
//         return 1;
//     } else if(choice == "scissors") {
//         return 2;
//     } else {
//         alert("Invalid choice!");
//         return playerPlay();
//     }
// }

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        score.textContent = `Wins: ${totalWins}, Losses: ${totalLoss}`;
        return "No winner";
    } else if(Math.abs(playerSelection - computerSelection) == 1) {
        let toReturn = "";
        if(playerSelection > computerSelection) {
            toReturn = "You Win! " + (playerSelection == 1 ? "Paper beats Rock!": "Scissors beats Paper!");
            totalWins++;
        } else {
            toReturn = "You Lose! " + (computerSelection == 1 ? "Paper beats Rock!": "Scissors beats Paper!");
            totalLoss++;
        }
        score.textContent = `Wins: ${totalWins}, Losses: ${totalLoss}`;
        return toReturn;
    } else {
        if(playerSelection == 0){
            totalWins++;
            score.textContent = `Wins: ${totalWins}, Losses: ${totalLoss}`;
            return "You Win! Rock beats Scissors!";
            
        } else {
            totalLoss++;
            score.textContent = `Wins: ${totalWins}, Losses: ${totalLoss}`;
            return "You Lose! Rock beats Scissors!";
        }
    }
}

// function game() {
//     totalWins = 0;
//     totalLoss = 0;
//     for(let i = 0; i < 5; i++) {
//         console.log(playRound(playerPlay(), computerPlay()));
//     }
// }

const buttons = document.querySelectorAll("button");
const div = document.createElement("div");
const result = document.createElement("p");
const playerChoice = document.createElement("p");
const computerChoice = document.createElement("p");
const score = document.createElement("p");

result.setAttribute("id", "result");
playerChoice.setAttribute("id", "player-choice");
computerChoice.setAttribute("id", "comp-choice");
score.setAttribute("id", "score");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerChoice.textContent = "Player: " + button.textContent;
        result.textContent = playRound(+button.id, computerPlay());
        if(totalWins == 5) {
            score.textContent = "You have defeated the computer!";
            totalWins = 0;
            totalLoss = 0;
        }
        if(totalLoss == 5) {
            score.textContent = "The computer has defeated you!";
            totalWins = 0;
            totalLoss = 0;
        }
    });
});

div.appendChild(result);
div.appendChild(score);
div.appendChild(playerChoice);
div.appendChild(computerChoice);

document.querySelector("body").appendChild(div);



