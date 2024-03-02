let button=document.querySelectorAll(".box");
let rbutton=document.querySelector(".reset");
let newgamebut=document.querySelector("#newgame");
let container=document.querySelector(".msgcontaner");
let msg=document.querySelector("#msg");
let draw=document.querySelector("#draw");
let match=document.querySelector(".match");
 let turnO=true;
 let count=1;

 const winpartten=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
 ];
// winner patten function 
 const winner=()=>{
   for(let partten of winpartten)
   {
let pos1val=button[partten[0]].innerText;
let pos2val=button[partten[1]].innerText;
let pos3val=button[partten[2]].innerText;
 if(pos1val!="" &&pos2val!=""&&pos3val!="")
 {
if(pos1val===pos2val&&pos2val===pos3val)
{

showWinner(pos1val);
return true;
}
 }
   }
   return false;
};

 // to reset game
 const resetgame=()=>{
   turnO=true;
   enable();
   container.classList.add("hide");
   match.classList.add("hide")
   count=1;
    };
     // draw match
const drawmatch=()=>{
   
   draw.innerText="Draw Match";
match.classList.remove("hide");
disable();
   };

   
 button.forEach((box)=>
 {
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;// to disable the box after click
     
        count++;
        if(!winner() && count === 10) {
            drawmatch();
        }
winner();
     });

 });



 // to disable the box after the winner is found
 const disable=()=>{
   for(let box of button){
box.disabled=true;
   }
 };
// to enable the box
 const enable=()=>{
   for(let box of button){
box.disabled=false;
box.innerText="";
   }
 };
 // print the winner

 const showWinner = (winer) => {
   msg.innerText = `Congratulations, Winner is ${winer}`;
   container.classList.remove("hide");
  disable();
 };

rbutton.addEventListener("click",resetgame);
newgamebut.addEventListener("click",resetgame);