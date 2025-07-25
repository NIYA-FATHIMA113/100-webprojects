const fullForm=document.querySelector(".fullform");

const card=document.querySelector(".card");
const inputField=document.querySelector(".inputfield");
const apikey="07b4e0df23bdab1ef254afef81f80dd3";




fullForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  const city = inputField.value;

  if (city) {
    const weatherData=await getWeatherData(city);       //wait and use an async function
    displayWeatherInfo(weatherData);
  }
  else{
    displayError("please enter a city")
  }
});



async function getWeatherData(city){

}
function displayWeatherInfo(data){

}
function getWeatheremoji(weatherId){

}
function displayError(message){
    const errordisplay=document.createElement("p");
    errordisplay.textContent=message;
    errordisplay.classList.add("errordisplay");     //adding the class name to the newly created element
    

    card.textContent="";     //resetting the card if any previous content was there
    card.style.display="flex";     //initially it was display:none
    card.appendChild(errordisplay);

    
}