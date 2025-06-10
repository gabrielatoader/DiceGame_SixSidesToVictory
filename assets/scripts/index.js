function rollDice(){
    const imgExtension = ".png";
    const firstDieImagePath = "assets\\images\\dice\\red_filled\\D6_S";
    const secondDieImagePath = "assets\\images\\dice\\blue_filled\\D6_S";

    var firstDieValue = 1 + Math.floor(Math.random() * 6);
    var mainDice1 = document.getElementById("main-dice_1");
    var firstDiceSrc = firstDieImagePath + firstDieValue + imgExtension;
    mainDice1.setAttribute("src", firstDiceSrc);
    
    var secondDieValue = 1 + Math.floor(Math.random() * 6);
    var mainDice2 = document.getElementById("main-dice_2");
    var secondDiceSrc = secondDieImagePath + secondDieValue + imgExtension;
    mainDice2.setAttribute("src", secondDiceSrc);
}