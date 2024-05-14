function getWeather() {
    const city = document.getElementById("cityInput").value; 
    const apiUrl =`http://api.weatherapi.com/v1/current.json?key=0915c3614f274112a04153237240705&q=${city}&aqi=no` ;
    

    fetch(apiUrl)
        .then(response => {     
            return response.json();
        })                       
        .then(data => {
            
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<img src="meteo.png">
                <h1>${data.current.temp_c}°C</h1>               
                <div> ${data.current.condition.text}</div>
                <h2 > <i class="fa-solid fa-location-dot"></i> ${data.location.name}, ${data.location.country}</h2>
                <hr>
                <div class="container">
                <div><i class="fa-solid fa-temperature-full"></i> ${data.current.feelslike_c}°C<br>Feels like</div>
                <div><i class="fa-solid fa-droplet"></i> ${data.current.humidity}%<br>Humidity</div>
                </div>
            `;
        })
}
