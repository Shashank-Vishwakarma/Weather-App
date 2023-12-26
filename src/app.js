const API_KEY = "xxxxxxxxxxxxxxxxxxx";

const searchBtn = document.querySelector(".search-bar img");

const updateData = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const weatherData = await response.json();

    // set city name
    const cityInput = document.querySelector("#city");
    cityInput.innerText = city;

    // set wind speed
    const wind = weatherData["wind"]["speed"];
    const windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerText = `${wind} Km/h`;

    // set humidity
    const humidity = weatherData["main"]["humidity"];
    const h = document.querySelector("#humidity");
    h.innerText = `${humidity}%`;

    // set temperature and image of cloud
    const temperature = weatherData["main"]["temp"] - 273.13;
    const temp = document.querySelector("#temp");
    temp.innerText = `${Math.trunc(temperature)}°C`;

    const weatherImage = document.querySelector(".weather-image img");
    const t  = Math.trunc(temperature);
    if(t >= 20) {
        weatherImage.src = "../assets/clear.png";
    } else if(t<20 && t>=15) {
        weatherImage.src = "../assets/clouds.png"
    } else if(t<15 && t>=10) {
        weatherImage.src = "../assets/drizzle.png"
    } else if(t<10 && t>=5) {
        weatherImage.src = "../assets/mist.png"
    } else if(t<5 && t>=0) {
        weatherImage.src = "../assets/rain.png"
    } else {
        weatherImage.src = "../assets/snow.png"
    }
}

const input = document.querySelector(".search-bar input");
input.addEventListener("keypress", (event)=>{
    if(event.key === "Enter") {
        document.querySelector(".search-bar img").click();
    }
})

searchBtn.addEventListener("click", ()=>{
    const cityInput = document.querySelector(".search-bar input");
    const city = cityInput.value;
    
    if(city === "") {
        alert("Please enter the city name")
        return;
    }

    updateData(city);
})