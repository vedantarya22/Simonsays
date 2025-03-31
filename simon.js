 let gameSeq=[];
 let userSeq=[];
 let body=document.querySelector("body");
 let max=-1;

 let started=false;
 let level=0;


 let h2=document.querySelector("h2");
 let h3=document.querySelector("h3");

 let btns=["yellow","red","purple","green"];


 document.addEventListener("keypress",function(event){
    if(started==false){
        if((event.code=="Enter")|| (event.code=="Space")){
            console.log("game started");
            started=true;
            levelUp();
            
        }
    }

 })

 function levelUp(){
    level++;
    h2.innerText=`level ${level}`;

    //random btn choose
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randombtn=document.querySelector(`.${randomColor}`);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);

    userSeq=[];
    


 }

 function checkAns(idx){

    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over!,your score was <b>${level}</b> <br> press spacebar to start`;
         if(max<=level){
            max=level;
            
         }
         h3.innerText=`High Score: ${max}`;
         // console.log(max-1);
        body.classList.add("gameOver");
        setTimeout(function(){
        body.classList.remove("gameOver");
        },200);
        
        reset();
    }

 }

 function gameFlash(btn){
       btn.classList.add("flash");

       setTimeout(function(){
        btn.classList.remove("flash");
       },250)
 }
 function userFlash(btn){
       btn.classList.add("userFlash");

       setTimeout(function(){
        btn.classList.remove("userFlash");
       },250)
 }

 function btnPress(){
    
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);

 }

 let allBtns=document.querySelectorAll(".btn");


 for(let btn of allBtns){
   btn.addEventListener("click",btnPress);
 }


 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
     
 }

 