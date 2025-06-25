const imgExtension = ".png";
const defaultDieValue = "start";
const defaultDicegameDiceImagePath = "assets/images/dice/gray_empty/";
const player1DiceImagePath = "assets/images/dice/jade_filled/";
const player2DiceImagePath = "assets/images/dice/jasper_filled/";
const gameDice = document.getElementsByClassName("game-container__die");

var currentPlayer = 0;
var player1DiceList = [];
var player2DiceList = [];

window.onload = function() {
  resetGame();
}

function resetGame(){
	currentPlayer = 0;
	
	resetPlayerDice();
	resetGameDice();
	enableRollButton();
	setCurrentTurn();
}

function resetPlayerDice(){
	player1DiceList = [];
	player2DiceList = [];
	
	for (let i=1; i<= 6; i++){
		let playerDieSrc = defaultDicegameDiceImagePath + i + imgExtension;
		let player1Die = document.getElementById("player1-die" + i);
		let player2Die = document.getElementById("player2-die" + i);
		
		player1Die.setAttribute("src", playerDieSrc);
		player2Die.setAttribute("src", playerDieSrc);
	}	
}

function resetGameDice(){
	let gameDie = document.getElementById("game-die");
	let gameDieSrc = defaultDicegameDiceImagePath + defaultDieValue + imgExtension;
	
	gameDie.setAttribute("src", gameDieSrc);
}

function enableRollButton(){
	let rollButton = document.getElementById("roll-btn")
	rollButton.setAttribute("onclick", "rollDice()");
	rollButton.setAttribute("class", "game-container__roll-btn btn-big");
	
}

function disableRollButton(){
	let rollButton = document.getElementById("roll-btn")
	rollButton.removeAttribute("onclick");
	rollButton.setAttribute("class", "game-container__roll-btn btn-big-disabled");
}

function goToInstructionsPage(){
	 window.location.href = "./instructions.html";
}

function rollDice(){
    let gameDieValue = 1 + Math.floor(Math.random() * 6);
    let gameDie = document.getElementById("game-die");
	let gameDieImagePath = getDieImagePath();
	let gameDieSrc = gameDieImagePath + gameDieValue + imgExtension;
	
	gameDie.setAttribute("src", gameDieSrc);
	
	if(currentPlayer == 1){
		updatePlayerDice(player1DiceList, gameDieValue);
	} else{
		updatePlayerDice(player2DiceList, gameDieValue);
	}
	
	if (isWinner(currentPlayer)){
			document.getElementById("turn-indicator").innerHTML = "Player " + currentPlayer + " won!";
			disableRollButton();
		}
	else{
		changeCurrentPlayer();		
	}
}

function isWinner(currentPlayer){
	
	let playerDiceList;
	
	if(currentPlayer == 1){
		playerDiceList = player1DiceList;
	} else{
		playerDiceList = player2DiceList;
	}
	
	if(playerDiceList.includes(1) && playerDiceList.includes(2) && playerDiceList.includes(3) && playerDiceList.includes(4) && playerDiceList.includes(5) && playerDiceList.includes(6)){
		return true;
	}
	
	return false;
}

function updatePlayerDice(playerDiceList, gameDieValue){
	if(!playerDiceList.includes(gameDieValue)){
		playerDiceList.push(gameDieValue);
		
		let newDieId = "player" + currentPlayer + "-die" + gameDieValue;
		let newDie = document.getElementById(newDieId);
		setDieColor(newDie);
	}
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

function getDieValue(die){
	if (currentPlayer == 1 || currentPlayer == 2) {
		let dieSrc = die.getAttribute('src');
		let dieSrcSections = dieSrc.split("/");
		let lastSrc = dieSrcSections[dieSrcSections.length - 1];
		let dieValue = lastSrc.slice(0,1);
		
		return dieValue;
	}
	
	return defaultDieValue;
}