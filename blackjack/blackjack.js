let playerCost={
    name:"niya" ,
    cost:200
}

let card1=getRandomCard();
let card2=getRandomCard();
let cards=[card1,card2];
sum=card1+card2;

let card_el=document.querySelector('.js-card');
let sum_el=document.querySelector('.js-sum')
let message="";

let hasBlackJack=false;
isAlive=true;
function getRandomCard(){
let random=(Math.floor(Math.random()*13))+1;
if(random===1){
     return 11;
}
   
else if(random>10){
    return10;
}
else{
    return random
}
}


let playerCost_el=document.querySelector(".js-playercost");
playerCost_el.innerHTML=playerCost.name+": $"+playerCost.cost;


function startGame(){
    card_el.innerHTML="Card:";
    for(let i=0;i<cards.length;i++){
        card_el.innerHTML+=cards[i]+" ";
    }


    sum_el.innerHTML="Sum: "+sum;


    if(sum<21){
        message="do you wanna draw another card?"
    }else if(sum===21){
        message="won a blackjack";
        hasBlackJack=true;
    }else{
        message="out";
        isAlive=false;
    }
    document.querySelector('.js-describe')
    .innerHTML=message;
    

}



function  newCard(){
   if(isAlive===true && hasBlackJack===false){
     let newcard=getRandomCard();
    sum+=newcard;
    cards.push(newcard);
    for(let i=0;i<cards.length;i++){

    }
    startGame();
   }
    
}