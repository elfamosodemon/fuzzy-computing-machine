function computerPlay() {
    const computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore
        return "Rock beats Scissors. Player wins!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore
        return "Scissors beats Paper. Player wins!"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore
        return "Paper beats Rock. Player wins!"
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        ++computerScore
        return "Rock beats Scissors. Computer wins!"
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        ++computerScore
        return "Scissors beats Paper. Computer wins!"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        ++computerScore
        return "Paper beats Rock. Computer wins!"
    } else {
        return "It's a tie!"
    }
}
let playerScore = 0
let computerScore = 0

function game() {

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Rock, Paper Or Scissors?").toLowerCase();

        console.log(playRound(playerSelection, computerPlay()))
        console.log("Player score: " + playerScore)
        console.log("Computer score: " + computerScore)
    }
    if (playerScore > computerScore) {
        console.log("Player won " + playerScore + " of 5 rounds. Is the Winner.")
    } else if (computerScore > playerScore) {
        console.log("Computer won " + computerScore + " of 5 rounds. Is the Winner.")
    } else {
        console.log("No more rounds. " + "Player " + playerScore + "." + " Computer " + computerScore + ". It's a tie.")
    }
}


game()