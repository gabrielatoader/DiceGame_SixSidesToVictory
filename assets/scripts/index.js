const imgExtension = ".png";
const defaultDieValue = "start";
const defaultDicegameDiceImagePath = "assets/images/dice/gray_empty/";
const player1DiceImagePath = "assets/images/dice/jade_filled/";
const player2DiceImagePath = "assets/images/dice/jasper_filled/";
const gameDice = document.getElementsByClassName("game-container__die");

var currentPlayer = 0;

function rollDice(){
    let gameDieValue = 1 + Math.floor(Math.random() * 6);
    let gameDie = document.getElementById("game-die");
	let gameDieImagePath = getDieImagePath();
	let gameDieSrc = gameDieImagePath + gameDieValue + imgExtension;
    
	gameDie.setAttribute("src", gameDieSrc);
	
	changeCurrentPlayer();
}

function changeCurrentPlayer(){
	if(currentPlayer == 1){
		currentPlayer = 2;
	} else{
		currentPlayer = 1;
	}
	
	setCurrentTurn();
}


function setCurrentTurn(){
	if (currentPlayer == 0){
		currentPlayer = 1;
	}
	
	document.getElementById("turn-indicator").innerHTML = "Current turn: Player " + currentPlayer;
}

function setDieColor(die){
	
	let gameDiceImagePath = getDieImagePath();
	let dieId = die.getAttribute('id');
	let dieValue = getDieValue(die);
	let newDieSrc = gameDiceImagePath + dieValue + imgExtension;
	
	die.setAttribute("src", newDieSrc);
}

function getDieImagePath(){
	if (currentPlayer == 1) {
		return player1DiceImagePath;
	} else if (currentPlayer == 2) {
		return player2DiceImagePath;
	}
	
	return defaultDicegameDiceImagePath;
}