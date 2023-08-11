let gameSeq=[];
let userSeq=[];
let btnCol=["red","blue","yellow","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("started");
        started=true;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText='Level '+level;
    let ranIdx=Math.floor(Math.random()*3);
    let ranCol=btnCol[ranIdx];
    let ranBtn=document.querySelector('.'+ranCol);
    gameSeq.push(ranCol);
    gameFlash(ranBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userCol=btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },250);

        reset();
    }
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}