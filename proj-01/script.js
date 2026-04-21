console.log("Hello JS 01")

humanScore = 0;
computerScore = 0; 

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'] 
    return choice[Math.floor(Math.random() * choice.length)]
}
function getHumanChoice() {
    let input = prompt("Enter choice here: ")
}console.log(getHumanChoice)

function playRound(humanChoice, computerChoice) {
    let getHumanChoice = prompt().toLowerCase()
}