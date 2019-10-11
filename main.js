// muuttuja kierroksen pisteille
// muuttuja (array?) pelaajille
let players = [ {name : "Tatu", points : 0}, {name : "Tuomas", points : 0}, {name : "Liisa", points : 0} ];
let turn = 0;


function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
    var status2 = document.getElementById("status2");
}


function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    var score = 0;
    var totalscore = score+diceTotal;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    status2.innerHTML = "Total Points "+totalscore+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}


function throwdice(){
    var randomdice=Math.round(Math.random()*5)
    document.images["mydice"].src=eval("face"+randomdice+".src")
    }
    
var face0=new Image()
face0.src="d1.gif"
var face1=new Image()
face1.src="d2.gif"
var face2=new Image()
face2.src="d3.gif"
var face3=new Image()
face3.src="d4.gif"
var face4=new Image()
face4.src="d5.gif"
var face5=new Image()
face5.src="d6.gif"
