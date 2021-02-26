

function myFunction() {
  var randomNumber1 = Math.ceil(Math.random() * 6);

//image 1
  if (randomNumber1 === 1){
    document.querySelector('.img1').setAttribute("src", 'images/dice1.png');
  }
  if (randomNumber1 === 2){
    document.querySelector('.img1').setAttribute("src", 'images/dice2.png');
  }
  if (randomNumber1 === 3){
    document.querySelector('.img1').setAttribute("src", 'images/dice3.png');
  }
  if (randomNumber1 === 4){
    document.querySelector('.img1').setAttribute("src", 'images/dice4.png');
  }
  if (randomNumber1 === 5){
    document.querySelector('.img1').setAttribute("src", 'images/dice5.png');
  }
  if (randomNumber1 === 6){
    document.querySelector('.img1').setAttribute("src", 'images/dice6.png');
  }

    var randomNumber2 = Math.ceil(Math.random() * 6);
  //image 2
    if (randomNumber2 === 1){
      document.querySelector('.img2').setAttribute("src", 'images/dice1.png');
    }
    if (randomNumber2 === 2){
      document.querySelector('.img2').setAttribute("src", 'images/dice2.png');
    }
    if (randomNumber2 === 3){
      document.querySelector('.img2').setAttribute("src", 'images/dice3.png');
    }
    if (randomNumber2 === 4){
      document.querySelector('.img2').setAttribute("src", 'images/dice4.png');
    }
    if (randomNumber2 === 5){
      document.querySelector('.img2').setAttribute("src", 'images/dice5.png');
    }
    if (randomNumber2 === 6){
      document.querySelector('.img2').setAttribute("src", 'images/dice6.png');
    }

    if (randomNumber1 > randomNumber2){
      document.querySelector('h1').textContent = "Player 1 Wins! yay";
    } else if (randomNumber2 > randomNumber1){
      document.querySelector('h1').textContent = "Player 2 Wins! yay";
    } else{
      document.querySelector('h1').textContent = "Draw!";
    }
}



window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}
function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
