let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const message_p = document.querySelector(".message > p");

function win(textWin) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = textWin;
    message_p.innerHTML = " — BEGINNER'S LUCK!";

}

function lost(textLost) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = textLost;
    message_p.innerHTML = " — I'M THE BEST!";

}

function draw(textDraw) {
    result_p.innerHTML = textDraw;

}

function theWinner() {
    if (computerScore >= 5) {
        computerScore = 0;
        playerScore = 0;
        computerScore_span.innerHTML = 0;
        playerScore_span.innerHTML = 0;
        result_p.innerHTML = "GAME OVER. COMPUTER IS THE WINNER!"
        message_p.innerHTML = " — BETTER LUCK NEXT TIME!"
    }
    if (playerScore >= 5) {
        computerScore = 0;
        playerScore = 0;
        computerScore_span.innerHTML = 0;
        playerScore_span.innerHTML = 0;
        result_p.innerHTML = "GAME OVER. PLAYER IS THE WINNER!"
        message_p.innerHTML = " — YOU WON. LET'S PLAY AGAIN?"
    }
}

function playerSelection() {
    rock_div.addEventListener('click', function() {
        playRound("rock");
    });
    paper_div.addEventListener('click', function(e) {
        playRound("paper");
    });
    scissors_div.addEventListener('click', function(e) {
        playRound("scissors");

    });
}

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

function playRound(playerSelection) {
    computerSelection = computerPlay();
    let computerWin = false;
    if (computerSelection == playerSelection) {
        draw("YOU BOTH CHOSE THE SAME. IT'S A DRAW.")
        return

    }
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWin = true
            lost(`${computerSelection} beats ${playerSelection}.Computer wins!`)

        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWin = true
            lost(`${computerSelection} beats ${playerSelection}. Computer wins!`)

        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerWin = true
            lost(`${computerSelection} beats ${playerSelection}. Computer wins!`)

        }
    }
    if (!computerWin) {
        win(`${playerSelection} beats ${computerSelection}. Player Wins!`)
    }
    theWinner()
}

playerSelection()