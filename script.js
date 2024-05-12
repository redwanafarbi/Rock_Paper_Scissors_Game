let userScore = 0;
let computerScore = 0;


//Access all classes and ids
let choices = document.querySelectorAll(".choice");
let winningStatusMsg = document.querySelector("#msg");
let userScoreSection = document.querySelector("#user-score");
let compScoreSection = document.querySelector("#computer-score");


//Draw game status show
const drawGame = ()=>{
    console.log("This round was draw");
    winningStatusMsg.innerText = "Game was draw. Play again.";
    winningStatusMsg.style.backgroundColor = 'rgb(35, 0, 188)';
}

//Wining status show
const gameWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){

        // Update score
        userScore++; 

        // Show score on screen
        userScoreSection.innerText = userScore; 

        // Show winning msg to screen
        winningStatusMsg.innerText =  `Congratulations! You win. Your ${userChoice} beats ${compChoice}`;

        // Change color
        winningStatusMsg.style.backgroundColor = 'green' 

        console.log("Congratulations! You won the game");

    }else{

        // Update score
        computerScore++; 

        // Show score on screen
        compScoreSection.innerText = computerScore; 

         // Show losing msg to screen
        winningStatusMsg.innerText =  `Opps! You lose. ${compChoice} beats your ${userChoice}`;

        // Change color
        winningStatusMsg.style.backgroundColor = 'rgb(194, 10, 10)'; 

        console.log("Opps! You lost the game");
    }
}

//Generate a random pick from computer
const genCompChoice = ()=>{

    // Store options in an array
    const options = ["rock", "paper","scissors"]; 

    //Generate randon number between 0-2 as we have only 3 options
    const randomIdx = Math.floor(Math.random() * 3);

    // console.log("Computer Choice " + options[randomIdx]);

    return options[randomIdx];
}

//Win, Lose or Draw logic
const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = false;

        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'rock' ? true : false;
        }else if(userChoice === 'scissors'){
            userWin = compChoice === 'rock' ? false : true;
        }

        gameWinner(userWin, userChoice, compChoice);
    }
}

//Apply event listner to all divs or options(rock,paper,scissors)
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        
        const userChoice = choice.getAttribute("id");

        // console.log("Userchoice = " + userChoice);

        playGame(userChoice);
    })
})