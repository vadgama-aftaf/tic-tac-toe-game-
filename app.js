let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); //pahela to btn ne access karsi
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");



let turn0 = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {                      
    box.addEventListener("click",() =>{      
        if(turn0) {               
            box.innerText = "O";   
            turn0 = false;        
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;    
        count++;
       let isWinner = checkWinner();  
       if(count === 9 && !isWinner){
        gameDrow();
       }
    });
});

const showWinner = (winner) =>{
      msg.innerText = `cograculations winner is : ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
}


const checkWinner = () =>{
    for (let pattern of winPatterns){
   
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
            if(pos1val !="" && pos2val != "" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){  
                    // console.log("winner.",pos1val);
                    showWinner(pos1val);
                    
                }
            }
    }
} 

 const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide"); 

 }

 const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
 }
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";  
    }
}
const gameDrow = () =>{
    msg.innerText = `Game was grow.`;  
    msgContainer.classList.remove("hide");
    disableBoxes();
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);