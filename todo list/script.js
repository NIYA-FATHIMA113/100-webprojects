const add_El=document.querySelector(".js-add");
const input_El=document.querySelector(".js-input");
const taskcontainer=document.querySelector(".js-taskcontainer");
const unchecked_El=document.querySelector(".js-uncheckedlogo");




add_El.addEventListener("click",()=>{
     let getValue=input_El.value;
    if(input_El.value===''){
        alert("Please enter a task");
        return;
    }
    else{
       
       
        taskcontainer.innerHTML+=`
         <div class="task "><img src="images/unchecked.png" class="uncheckedlogo js-uncheckedlogo">
               <div  class="task1 js-task1">${getValue}</div>
                    <div class="cross">X</div>
            </div> 
        `;
        input_El.value="";
        save();

    }
});

input_El.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        add_El.click();
    }
})





taskcontainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("js-uncheckedlogo")) {
        
        const describe_El = event.target.nextElementSibling;  // .task1 is right after image
        if(event.target.src.includes("unchecked.png")){
             describe_El.style.textDecoration = "line-through";
        event.target.src="images/checked.png";
        save();
        }else{
            describe_El.style.textDecoration = "none";
        event.target.src="images/unchecked.png";
        save();
        }
       
    }


    if(event.target.classList.contains("cross")){
        const taskDiv=event.target.parentElement;
        taskDiv.remove();
        save();
    }
});


function save(){
    localStorage.setItem("data",JSON.stringify(taskcontainer.innerHTML));
}
function getItem(){
   taskcontainer.innerHTML= JSON.parse(localStorage.getItem("data"));
}

getItem();
