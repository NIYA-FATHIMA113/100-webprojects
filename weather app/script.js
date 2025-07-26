const fullForm=document.querySelector(".fullform");

const card=document.querySelector(".card");
const inputField=document.querySelector(".inputfield");
const apikey="07b4e0df23bdab1ef254afef81f80dd3";




fullForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  const city = inputField.value;

  if (city) {   //if the typed one is valid city
    try{
      const weatherData=await getWeatherData(city);       //wait and use an async function and returns the onj array of the city
    displayWeatherInfo(weatherData);
    }
    catch(error){ //if the typed city is invalid
      console.error(error);
      displayError("error not a valid city ");
    }
  }
  else{   //if blank inputfield
    displayError("please enter a city")
  }
});



async function getWeatherData(city){
  const geoURL=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`;            //we pass the api key that we created from the webpage and this url is pasted from the api webpage under api calls
  const geoResponse= await fetch(geoURL);


  if(!geoResponse.ok){                            //checking if it can be fetched
    throw new Error("could not fetch error data");
  }
    const geoData= await geoResponse.json();   //return data of the city in json format something like arrays
  

  const { lat, lon } = geoData[0];// using the geo api we took the lan and lon of the city for the weather url api to access temp,humidity etc





  
  const weatherURL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
  const weatherResponse=await fetch(weatherURL);
 

  if(!weatherResponse.ok){
    throw new Error("could not fetch error data");
  }else{
    return await weatherResponse.json();   //return data of the city in json format
  }

}


function displayWeatherInfo(data){
  console.log(data)
  const {name:city,
          main:{temp,humidity},
          weather:[{description,id}]
  }=data;   //taking out the values from the obj array here the data may be weatherData which we pass through the function
  card.textContent="";
  card.style.display="flex";


  const cityDisplay=document.createElement("h1");
  const tempDisplay=document.createElement("p");
  const humidityDisplay=document.createElement("p");
   const desDisplay=document.createElement("p");
   const emoji=document.createElement("p");


  cityDisplay.textContent=city;
  tempDisplay.textContent=`${((temp-273.15)*(9/5)+32).toFixed(1)}°F`;
  humidityDisplay.textContent=`Humidity:${humidity}%`;
  desDisplay.textContent=description;
  emoji.textContent=getWeatheremoji(id);
  console.log("Weather ID:", id);
console.log("Emoji:", getWeatheremoji(id));

  
  cityDisplay.classList.add("citydisplay");
  tempDisplay.classList.add("tempdisplay");
  humidityDisplay.classList.add("humidity");
   desDisplay.classList.add("sky");
   emoji.classList.add("emoji");


  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
   card.appendChild(desDisplay);
   card.appendChild(emoji);

}


function getWeatheremoji(weatherId){
    switch(true){
      case(weatherId>=200 && weatherId<600):
        return "🌧️";
      case(weatherId>=600 && weatherId<700):
        return "❄️";
      case(weatherId>=700 && weatherId<800):
        return "🌪️";
      case(weatherId===800):
        return "☀️";
      case(weatherId>=801 && weatherId<810):
        return "☁️";
      default:return "❓"
    }
}



function displayError(message){
    const errordisplay=document.createElement("p");
    errordisplay.textContent=message;
    errordisplay.classList.add("errordisplay");     //adding the class name to the newly created element
    

    card.textContent="";     //resetting the card if any previous content was there
    card.style.display="flex";     //initially it was display:none
    card.appendChild(errordisplay);

    
}