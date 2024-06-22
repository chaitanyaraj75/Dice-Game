var userInput = prompt("Please enter first your name:");
if(userInput.length==0){
    userInput="Guest";
}
document.querySelector("#player").innerHTML=userInput;
var randomno1;
var randomimg1;
var randomno2;
var randomimg2;
var score1=0;
var score2=0;
document.querySelector("#again").onclick=function() {refresh()};
function refresh(){
    randomno1=Math.floor(Math.random()*6)+1;
    randomimg1="./images/dice"+randomno1+".png";
    document.querySelector(".img1").setAttribute("src",randomimg1);

    randomno2=Math.floor(Math.random()*6)+1;
    randomimg2="./images/dice"+randomno2+".png";
    document.querySelector(".img2").setAttribute("src",randomimg2);

    if(randomno1>randomno2){
        score1++;
        document.getElementById("current").innerHTML=userInput+" wins this turn";
    }
    else if(randomno1<randomno2){
        score2++;
        document.getElementById("current").innerHTML="Computer wins this turn";
    }
    else{
        document.getElementById("current").innerHTML="It's a draw!! Try again.";
    }
    if(score1>score2){
        document.getElementById("overall").innerHTML=userInput+" is leading by";
        document.getElementById("result").innerHTML=score1+" - "+score2;
    }
    else if(score1<score2){
        document.getElementById("overall").innerHTML="Computer is leading by";
        document.getElementById("result").innerHTML=score1+" - "+score2;
    }
    else{
        document.getElementById("overall").innerHTML="It's a tie";
        document.getElementById("result").innerHTML=score1+" - "+score2;
    }
    document.getElementById("again").innerHTML="Try Again!";
}
