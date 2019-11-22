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



// function throwdice() {
//     var randomdice = Math.round(Math.random() * 5)
//     document.images["mydice"].src = eval("face" + randomdice + ".src")
// }

// var face0 = new Image()
// face0.src = "d1.gif"
// var face1 = new Image()
// face1.src = "d2.gif"
// var face2 = new Image()
// face2.src = "d3.gif"
// var face3 = new Image()
// face3.src = "d4.gif"
// var face4 = new Image()
// face4.src = "d5.gif"
// var face5 = new Image()
// face5.src = "d6.gif"