// change image for the first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

// change image for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

//change the title
if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").textContent = "Draw!";
}
