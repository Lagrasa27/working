const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    } else {
        console.log ('Error choice paper rock or scissor');
    }

};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }

};

const determineWinner =(userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return 'this game is a tie';
    }
    if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'computer work'
        } else {
            return 'user won'
        }
    }
    if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computer work'
        } else {
            return 'user won'
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer work'
        } else {
            return 'user won'
        }
    }

};

const playGame =  () => {
    const userChoice = getUserChoice('paper')
    const computerChoice = getComputerChoice()
    console.log('you thure:'+ '' + userChoice);
    console.log('the computer threw' + computerChoice)

    console.log(determineWinner(userChoice, computerChoice))
};
playGame()


