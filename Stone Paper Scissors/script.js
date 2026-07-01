let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#user-score");
const choices = document.querySelectorAll(".choice")

const generateCompChoice = ()=>{
    const options = ["rock" , "paper" , "scissors"]
    let n = Math.random() * 3;  // for in range of 0 to 2 index
    let index = Math.floor(n);

    return options[index];
}

const drawGame = ()=>{
    console.log("Game Was Draw.")
    msg.innerText = "Game Was Draw, Try again"
    msg.style.background = "orange"
}

const showWin = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = "You Win 🏆";
        msg.style.background = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose 🥺"
        msg.style.background = "red"
    }
}
const playGame = (userChoiseId) => {
    console.log("user choise = " , userChoiseId);
    //Now computer choice
    const cmpChoice = generateCompChoice();
    console.log("Cmp choise = " , cmpChoice);

    if(userChoiseId == cmpChoice){
        //Draw
        drawGame();
    }
    else{
        userWin = true;
        if(userChoiseId == "rock"){
            if(cmpChoice == "paper"){
                //sessior , paper
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoiseId = "paper"){
            if(cmpChoice == "rock"){
                // sessior , rock
                userWin = true;
            }
            else{
                userWin = false;
            }
        }
        else{
            if(cmpChoice == "paper"){
                //rock , paper
                userWin = true;
            }
            else{
                userWin = false;
            }
        }
    }
    showWin(userWin);
}

choices.forEach((ch) => {
    ch.addEventListener("click" , ()=>{
        const userChoiseId = ch.getAttribute("id");
        playGame(userChoiseId);
    })
})