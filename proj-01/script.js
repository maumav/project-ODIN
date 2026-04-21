console.log("Hello JS 01")

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'] 
    return choice[Math.floor(Math.random() * choice.length)]
}
function getHumanChoice() {
    let input = prompt("Enter choice here: ")
}console.log(getHumanChoice)