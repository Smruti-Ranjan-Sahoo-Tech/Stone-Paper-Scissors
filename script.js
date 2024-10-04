let you;
let comp;
let youWinNo = 0;
let compWinNo = 0;
function compCall() {
    let random = Math.random();
    console.log(random)
    if (random >= 0 && random <= 0.33) {
        comp = "Stone"
    }
    if (random >= 0.33 && random <= 0.66) {
        comp = "Paper"
    }
    if (random >= 0.66 && random <= 0.33) {
        comp = "Scissors"
    }
}
function compare() {
    if(you == "Stone" && comp == "Paper")
    {   
        compWinNo=compWinNo+1;
        document.getElementById("computer").innerText =compWinNo ;
        document.getElementById("whoWin").innerText = "Computer";
        document.getElementById("whoWin").style.color="red";
    }
    else if(you == "Stone" && comp == "Scissors")
    {
        youWinNo=youWinNo+1;
        document.getElementById("your").innerText = youWinNo;
        document.getElementById("whoWin").innerText = "You";
        document.getElementById("whoWin").style.color="green";
    }
    else if(you == "Paper" && comp == "Stone")
    {
        youWinNo=youWinNo+1;
        document.getElementById("your").innerText = youWinNo;
        document.getElementById("whoWin").innerText = "You";
        document.getElementById("whoWin").style.color="green";
    }
    else if(you == "Paper" && comp == "Scissors")
    {
        compWinNo=compWinNo+1;
        document.getElementById("computer").innerText =compWinNo ;
        document.getElementById("whoWin").innerText = "Computer";
        document.getElementById("whoWin").style.color="red";
    }
    else if(you == "Scissors" && comp == "Stone")
    {
        compWinNo=compWinNo+1;
        document.getElementById("computer").innerText =compWinNo ;
        document.getElementById("whoWin").innerText = "Computer";
        document.getElementById("whoWin").style.color="red";
    }
    else if(you == "Scissors" && comp == "Paper")
    {
        youWinNo=youWinNo+1;
        document.getElementById("your").innerText = youWinNo;
        document.getElementById("your").innerText = youWinNo + 1;
        document.getElementById("whoWin").innerText = "You";
        document.getElementById("whoWin").style.color="green";
    }
    else{
        document.getElementById("whoWin").innerText = "Draw";
        document.getElementById("whoWin").style.color="blue";
    }
    
}
function resultColor(){
     if (youWinNo>compWinNo) {
        document.getElementById("your").style.color="green";
        document.getElementById("computer").style.color="red";
     }
     else if (youWinNo<compWinNo) {
        document.getElementById("your").style.color="red";
        document.getElementById("computer").style.color="green";
     }
     else {
        document.getElementById("your").style.color="blue";
        document.getElementById("computer").style.color="blue";
     }
}
document.querySelector("#n0-1").addEventListener("click", () => {
    {
        you = "Stone";
        document.getElementById("showResult").innerText = you;
        document.getElementById("whoWin").innerText = "";
    }
})
document.querySelector("#n0-2").addEventListener("click", () => {
    {
        you = "Paper";
        document.getElementById("showResult").innerText = you;
        document.getElementById("whoWin").innerText = "";
    }
})
document.querySelector("#n0-3").addEventListener("click", () => {
    {
        you = "Scissors";
        document.getElementById("showResult").innerText = you;
        document.getElementById("whoWin").innerText = "";
    }
})
document.getElementById("start").addEventListener("click", () => {
    compCall();
    compare();
    resultColor();
})
