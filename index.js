function getComputerChoice() {
    let computerSelection = Math.floor(3*Math.random());
    switch (computerSelection) {
        case 0:
            computerSelection = "Rock";
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;
    }
    return computerSelection;
}

function playRound(computerSelection){
    let score = 0;
    let playerSelection = prompt("Rock, Paper, Scissors?");

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (computerSelection == playerSelection) {
        alert("Draw!");
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        alert("You Lose! Rock beats Scissors.");
        score -= 1;
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        alert("You Lose! Paper beats Rock.");
        score -= 1;
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        alert("You Lose! Scissors beats Paper.");
        score -= 1;
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper") {
        alert("You Win! Paper beats Rock.");
        score += 1;
    }
    else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        alert("You Win!! Scissors beats Paper.");
        score += 1;
    }
    else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        alert("You Win! Rock beats Scissors.");
        score += 1;
    }
    else {
        alert("Please enter an appropiate choice for the game of Rock, Paper, Scissors.");
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        playRound(getComputerChoice());
    }
}

game();









