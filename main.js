let players = [{ name: "Player1", points: 0 }, { name: "Player2", points: 0 }, { name: "Player3", points: 0 }];
let turn = 0;
var score = 0;
var message = "";

function updateUi(){
    var status = document.getElementById("status");
    document.getElementById('player_name').innerHTML = players[turn].name;
    status.innerHTML = score;
    status2.innerHTML = message;
}

function rollDice() {
    message = "";
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = 0;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    if (d1 == 1 && d2 == 1) {
        message = "You rolled snake eyes, you get 25 points!";
        diceTotal = 25;
        score += diceTotal;
        updateUi();
        return;
    }
    else if (d1 == d2) {
        message = "You rolled doubles, you get double points!";
        diceTotal = (d1 + d2) * 2;
        updateUi();
    }
    else if (score == 100) {
        alert("You got 100 (or more) points, you win!");
            document.location.reload();
            clearInterval(interval);
            return;
    }
    else if (d1 == 1 || d2 == 1) {
        message = "You rolled a 1, you lost all points!"
        changeTurn();
        return;
    } else {
        diceTotal = d1 + d2;
    }
    
    score += diceTotal;

    updateUi();
}

function changeTurn(){
    score = 0;
    turn++;
    if (turn > players.length-1) {
        turn = 0;
    }
    updateUi();
}

function endTurn(){
    players[turn].points = score;
    changeTurn();
}

updateUi();

