let input_El=document.querySelector(".js-input");
let button_El=document.querySelector(".js-button");
let ul_El=document.querySelector(".js-ul");
let myLeads=[];
let getFromStorage=JSON.parse(localStorage.getItem("myLeads"));
if(getFromStorage){
    myLeads=getFromStorage;
    renderHTML(myLeads);
}


    button_El.addEventListener("click",()=>{
        myLeads.push(input_El.value);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        input_El.value="";
        renderHTML(myLeads);
       
       
        });


function renderHTML(leads){
    let listItems="";
for(let i=0;i<leads.length;i++){
         listItems+=`<li><a target='_blank' href= ${leads[i]}>
                ${leads[i]}
                </a>
                    </li>`;
         
       }  

 ul_El.innerHTML=listItems; 
}


let deleteEl=document.querySelector(".js-delete");
deleteEl.addEventListener("dblclick",()=>{
    localStorage.clear();
    myLeads=[];
    renderHTML(myLeads);

})


let savetabEl=document.querySelector(".js-savetab");
savetabEl.addEventListener("click",()=>{
    chrome.tabs.query({active: true,currentWindow: true},function(tabs){

    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderHTML(myLeads);
        })
    })
   