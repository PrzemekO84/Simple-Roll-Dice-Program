let submitRoll = document.getElementById("submitRoll");



function Game(){
    let diceNumber = document.getElementById("diceNumber").value;
    let result = document.getElementById("result");
    let diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    if(diceNumber > 6 || diceNumber < 0){
        result.textContent = `Please enter a value between 1 and 6`
        return;
    }

    diceNumber = Number(diceNumber);
    console.log(diceNumber);

    for(let i = 0; i < diceNumber; i++){
        randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumber); 
        values.push(randomNumber);
        images.push(`<img src="Images/Dice${randomNumber}.png" alt="Dice ${randomNumber}"></>`);
    }

    result.textContent = `You rolled dices: ${values.join(", ")}`;

    
    diceImages.innerHTML = images.join("");
    diceImages.style.display = "block";
    
}

submitRoll.onclick = Game;