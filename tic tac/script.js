const boxes = document.querySelectorAll(".js-box");
const reset_El = document.querySelector(".reset");

const winner_El=document.querySelector(".winnerandnewgame");

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
let turn0=true;//initial playerO,then playerX
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        if (box.textContent !== "") {
            return;
        }

        if (turn0) {
            box.textContent = "O";
            turn0 = false;
            checkWinner();
        } else {
            box.textContent = "X";
            turn0 = true;
            checkWinner();
        }
    });
});


const checkWinner=()=>{         //function checkWinner
    for(let pattern of winPatterns){
        let value1=boxes[pattern[0]].innerText;
         let value2=boxes[pattern[1]].innerText;
          let value3=boxes[pattern[2]].innerText;

          if(value1!==""&& value2!=="" &&value3!==""){
            if(value1===value2 && value2===value3){
               
                winner_El.innerHTML+=`<div class="winner">winner ${value1}<div class="newgame js-newgame">new game</div></div>`;

                for (let box of boxes) {
    box.style.pointerEvents = "none";//box disable
}

                
            }
          }
    }
}

function reset(){
for(let box of boxes){
       box.style.pointerEvents = "auto";//box enable
        box.innerText="";
        winner_El.innerHTML="";
    }
}
reset_El.addEventListener("click",reset);

winner_El.addEventListener("click",(event)=>{
    if(event.target.classList.contains("js-newgame")){
        reset();
    }

})


