
let count=0;
let countEl=document.getElementById("count-id");
let prevEntry=document.getElementById("save-el");


function increment(){
   count+=1;
   console.log(count);
   
   countEl.innerText=count
    
}


function save(){
   
    let countStr=count+"-";
    prevEntry.innerText+=countStr;
    countEl.innerText=0;
    count=0;
  
}
