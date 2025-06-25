const playButton = document.getElementById("play-button");
const userPhoto = document.querySelector(".first-photo");
const AIPhoto = document.querySelector(".second-photo");
const userScore = document.querySelector(".user-score");
const AIScore = document.querySelector(".AI-score");
const winnerPrompt = document.querySelector(".winner");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
let userChoice = 2;
let userScoreCounter = 0;
let aiScoreCounter = 0;
function imagePicker(){
    if (userChoice === 1){
        userPhoto.style.backgroundImage = "url(images/rock.png)";
    }if (userChoice === 2){
        userPhoto.style.backgroundImage = "url(images/paper.png)";
    }if (userChoice === 3){
        userPhoto.style.backgroundImage = "url(images/scissors.png)";
    }
}
leftButton.addEventListener("click", ()=>{
    if (userChoice > 1) { 
        userChoice--;
        imagePicker();
    }
});
rightButton.addEventListener("click", ()=>{
    if (userChoice < 3) {  
        userChoice++;
        imagePicker();
    }
});
playButton.addEventListener("click", ()=>{
    let AINumber = Math.floor(Math.random() * 3 + 1);
    if (AINumber === 1){
        AIPhoto.style.backgroundImage = "url(images/rock.png)";
    }if (AINumber === 2){
        AIPhoto.style.backgroundImage = "url(images/paper.png)";
    }if (AINumber === 3){
        AIPhoto.style.backgroundImage = "url(images/scissors.png)";
    }
    if(userChoice === 1 & AINumber === 1 || userChoice === 2 & AINumber === 2 || userChoice === 3 & AINumber === 3){
        winnerPrompt.textContent = "Draw";
    } 
    if(userChoice === 1 & AINumber === 2 || userChoice === 2 & AINumber === 3 || userChoice === 3 & AINumber === 1){
        winnerPrompt.textContent = "You Lose!";
        userScoreCounter = Math.max(0, userScoreCounter - 1);
        aiScoreCounter++;
    }
    if(userChoice === 1 & AINumber === 3 || userChoice === 2 & AINumber === 1 || userChoice  === 3 & AINumber === 2){
        winnerPrompt.textContent = "You Won!";
        userScoreCounter++;
        aiScoreCounter = Math.max(0, aiScoreCounter - 1);
    }
    userScore.textContent = `Your Score: ${userScoreCounter}`;
    AIScore.textContent = `AI's  Score: ${aiScoreCounter}`;
});
document.addEventListener('keydown', function(event){
    if(event.key === "ArrowDown"){
        if (userChoice > 1) {  
            userChoice--;
            imagePicker();
        }
    }
    if(event.key === "ArrowLeft"){
        if (userChoice > 1) {  
            userChoice--;
            imagePicker();
        }
    }
    if(event.key === "ArrowRight"){
        if (userChoice < 3) {  
            userChoice++;
            imagePicker();
        }
    }
    if(event.key === "ArrowUp"){
        if (userChoice < 3) {  
            userChoice++;
            imagePicker();
        }
    }
});