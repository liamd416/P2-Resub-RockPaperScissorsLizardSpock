const choices = ["✊", "📃", "✂️", "🦎", "🖖"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetGame = document.getElementById("resetGame")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice){

        case "✊":
            result = (computerChoice === "✂️" || computerChoice === "🦎") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "📃":
            result = (computerChoice === "✊" || computerChoice === "🖖") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "✂️":
            result = (computerChoice === "📃" || computerChoice === "🦎") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "🦎":
            result = (computerChoice === "🖖" || computerChoice === "📃") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "🖖":
            result = (computerChoice === "✂️" || computerChoice === "✊") ? "YOU WIN!" : "YOU LOSE!";
            break;

        }
    
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;
    
        resultDisplay.classList.remove("greenText", "redText");
    }
}