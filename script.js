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

function gameOver() {
    const result = document.getElementById("message");
    const userScore = document.getElementById("user-score");
    const comScore = document.getElementById("com-score");

    // let user know the result of the game
    if (uScore > cScore) {
        // congrats you won!
        alert("Congrats! You won. At least for now...");
    } else {
        alert("Unfortunately, You lost. Maybe next time...");
    }

    // reset scores
    uScore = 0;
    cScore = 0;

    // reset DOM
    result.innerText = "Click a button to play a round!";
    userScore.innerText = `Your Score: ${uScore}`;
    comScore.innerText = `Computer's Score: ${cScore}`;
};

// gather DOM elements needed
const choices = Array.from(document.getElementsByClassName("choice"));
const result = document.getElementById("message");
const userScore = document.getElementById("user-score");
const comScore = document.getElementById("com-score");

// set scores
let uScore, cScore;
uScore = 0;
cScore = 0;

// play round for each choice selected
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let selection = choice.id;
        let message = playRound(selection, getComputerChoice())

        // display the message
        result.innerText = "Round Results: " + message;

        if (message.includes("Win"))
        {
            // update user's score
            uScore += 1;
            userScore.innerText = `Your Score: ${uScore}`;
        }
        else if (message.includes("Lose"))
        {
            // update com's score
            cScore += 1;
            comScore.innerText = `Computer's Score: ${cScore}`;
        }

        // if anyone reaches a score of 5 the game is done
        if (uScore === 5 || cScore === 5) {
            if (uScore === 5) {
                userScore.innerText = `Your Score: 5`;
            } else if (cScore === 5) {
                comScore.innerText = `Computer's Score: 5`;
            }
            
            setTimeout(() => {
                gameOver(uScore, cScore);
            }, 50);
        }
    });
} );