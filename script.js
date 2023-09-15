function getComputerChoice() {
    // initialize a random number between 0 and 1
    const randomNum = Math.random();

    // find the floor of that number so that it ranges between 0 and 2
    const num = Math.floor(randomNum * 3);

    switch (num) {
        case 2:
            return "rock";

        case 1:
            return "paper";

        case 0:
            return "scissors";
    
        default:
            return "error";
    }
};

function playRound(playerSelection, computerSelection) {
    // format player's selection
    playerSelection = playerSelection.toLowerCase();
    
    // based on the players selection we have 3 paths
    if (playerSelection === "rock")
    {
        // selections based on rock
        switch (computerSelection) {
            case "rock":
                return "You Tie! Rock versus Rock";
            
            case "paper":
                return "You Lose! Paper beats Rock";

            case "scissors":
                return "You Win! Rock beats Scissors";
        
            default:
                break;
        }
    }
    else if (playerSelection === "paper")
    {
        // selections based on Paper
        switch (computerSelection) {
            case "rock":
                return "You Win! Paper beats Rock";
            
            case "paper":
                return "You Tie! Paper versus Paper";

            case "scissors":
                return "You Lose! Scissors beats Paper";
        
            default:
                break;
        }
    }
    else if (playerSelection === "scissors")
    {
        // selections based on Scissors
        switch (computerSelection) {
            case "rock":
                return "You Lose! Rock beats Scissors";
            
            case "paper":
                return "You Win! Scissors beats Paper";

            case "scissors":
                return "You Tie! Scissors versus Scissors";
        
            default:
                break;
        }
    }
    else
    {
        return "Invalid selection";
    }
};

let p1 = "scissors";
let com = getComputerChoice();

console.log(com);
console.log(playRound(p1, com));