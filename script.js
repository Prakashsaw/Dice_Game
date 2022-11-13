
//for refresh button
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage);


var randomNumber1 = Math.floor(Math.random()*6)+1;//Generating random number from 1 to 6
var random1DiceImage = "dice"+randomNumber1+".png"; //dice1.png - dice6.png
var random1DiceImageSource = "images/" + random1DiceImage; // images/dice1.png - images/dice6.png

//document.querySelector(".left").setAttribute("src", randomDiceImageSource);
//or

var leftImage = document.querySelectorAll("img")[0];
leftImage.setAttribute("src", random1DiceImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var random2DiceImage = "dice"+randomNumber2+".png"; //dice1.png - dice6.png
var random2DiceImageSource = "images/" + random2DiceImage; // images/dice1.png - images/dice6.png
//document.querySelector(".right").setAttribute("src", randomDiceImageSource);
//or
var rightImage = document.querySelectorAll("img")[1];
rightImage.setAttribute("src", random2DiceImageSource);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "💥Player 1 WINS!🤩";
} else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "TIE between Player 1 and 2 😐";
} else {
    document.querySelector("h1").innerHTML = "💥Player 2 WINS!🤩";
}

