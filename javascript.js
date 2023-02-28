console.log("Hello World");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock"
    } else if (choice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return 1
        } else if (computerSelection === "Paper") {
            return 2
        } else {
            return 3
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return 3
        } else if (computerSelection === "Paper") {
            return 1
        } else {
            return 2
        }
    } else {
        if (computerSelection === "Rock") {
            return 2
        } else if (computerSelection === "Paper") {
            return 3
        } else {
            return 1
        }
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Your choice");
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection,computerSelection) === 1) {
            console.log("It's a draw");
        } else if (playRound(playerSelection, computerSelection) === 2) {
            console.log("You lose!")
            computerScore += 1;
        } else {
            console.log("You win!")
            playerScore += 1;
        }
    console.log("Player: " + playerScore.toString() + " Computer: " + computerScore.toString())
    }
    if (playerScore > computerScore) {
        console.log("Player is the winner!")
    } else if (playerScore < computerScore) {
        console.log("Computer is the winner!")
    } else {
        console.log("It's a draw!")
    }
}

game()