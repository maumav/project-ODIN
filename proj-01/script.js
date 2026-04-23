console.log("Hello JS 01")

let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'] 
    return choice[Math.floor(Math.random() * choice.length)];
    
}

function getHumanChoice() {
    let input = prompt("Enter choice here: ").toLowerCase()
       return input;   
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("Human wins!")
       } else if (
       (humanChoice === 'scissors' && computerChoice === 'paper') ||
       (humanChoice === 'rock' && computerChoice === 'scissors') 
       humanScore++;
        )
        console.log("Human wins!! ")
    
        } {
          console.log("Human wins!!!")
        } 
       
        console.log("You chooses " + humanChoice + " and " + "computer chooses " + computerChoice)
}
playRound(humanSelection, computerSelection)

// while (getComputerChoice === 'rock') {
//     console.log("Computer chooses ROCK.")
//    } else if (getComputerChoice === 'paper') {
//     console.log("Computer chooses PAPER.")
//    }

