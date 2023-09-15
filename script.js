function getComputerChoice () {
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

console.log(getComputerChoice());