var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var player1 = prompt ("Name of player 1?");
var player2 = prompt ("Name of player 2?");
//If player 1 wins
document.getElementById("p1").innerHTML = player1;
document.getElementById("p2").innerHTML = player2;
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩" + player1 + " Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " " + player2 + " Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
