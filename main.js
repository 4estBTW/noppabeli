// muuttuja kierroksen pisteille
// muuttuja (array?) pelaajille
let players = [{ name: "Tatu", points: 0 }, { name: "Tuomas", points: 0 }, { name: "Liisa", points: 0 }];
let turn = 0;
var score = 0;

function updateUi(){
    document.getElementById('player_name').innerHTML = players[turn].name;
}


function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    var totalscore = 0;
    totalscore += diceTotal;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled " + diceTotal + ".";
    status2.innerHTML = "Total Points " + totalscore + ".";
    if (d1 == 1 || d2 == 1) {
        score = 0;
        changeTurn();
    }
    else if (d1 == d2) {
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
    if (diceTotal > 0) {
        status2.innerHTML = score += totalscore;
    }
}


function changeTurn(){
    turn++;
    if (turn > players.length-1) {
        turn = 0;
    }
    updateUi();
}


function endTurn(){
    changeTurn();
    totalscore += points;
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