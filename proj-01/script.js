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
    console.log("You chooses " + humanChoice + " and " + "computer chooses " + computerChoice)

    if (humanChoice === computerChoice) {
        console.log("Tied")
       } else if (
        (humanChoice === 'paper' && computerChoice === 'rock') ||
       (humanChoice === 'scissors' && computerChoice === 'paper') ||
       (humanChoice === 'rock' && computerChoice === 'scissors') 
        ) {
            console.log("Human wins!")
            humanScore++;
        }
        else {
            computerScore++;
            console.log("Computer Wins");
        }
playRound(humanSelection, computerSelection)
