var userInput = prompt("Please enter first your name:");
if(userInput.length==0){
    userInput="Guest";
}
document.querySelector("#player").innerHTML=userInput;
var randomno1;
var randomimg1;
var randomno2;
var randomimg2;
document.querySelector("#again").onclick=function() {refresh()};
function refresh(){
    randomno1=Math.floor(Math.random()*6)+1;
    randomimg1="./images/dice"+randomno1+".png";
    document.querySelector(".img1").setAttribute("src",randomimg1);

    randomno2=Math.floor(Math.random()*6)+1;
    randomimg2="./images/dice"+randomno2+".png";
    document.querySelector(".img2").setAttribute("src",randomimg2);

    if(randomno1>randomno2){
        document.getElementById("result").innerHTML=userInput+" wins the game";
    }
    else if(randomno1<randomno2){
        document.getElementById("result").innerHTML="Computer wins the game";
    }
    else{
        document.getElementById("result").innerHTML="It's a draw!! Try again.";
    }
    document.getElementById("again").innerHTML="Try Again!";
}
