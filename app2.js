let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll('.choice');

let userScoreValue = 0;
let compScoreValue = 0;

const msg = document.querySelector('#msg');
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#computer-score');

const computerOptions = () =>{
    const options = ["rock","paper","scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
};

const drawGame = () =>{
    msg.innerText = "The game is drawn. Play again!";
}

const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        userScoreValue++;
        userScore.innerText = userScoreValue;
        console.log("Congratulations.You have Won.")
        msg.innerText = `You won. Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScoreValue++;
        compScore.innerText = compScoreValue;
        msg.innerText = `You lost. Your ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const gamePlay =(userchoice)=>{
    console.log("The choice of user = ",userchoice);
    //Generate computer choice
    const compchoice = computerOptions();
    console.log("The choice of computer = ",compchoice);

    if(userchoice === compchoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //sc,paper
           userWin = compchoice === "paper" ?false : true;
        }else if(userchoice === "paper"){
            //rock,scissors
            userWin = compchoice === "scissors" ? false : true;
    }
    else{
        userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,compchoice);
}
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        gamePlay(userchoice);
    });
});