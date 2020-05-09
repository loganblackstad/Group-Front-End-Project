// Weather API

// Load weather from local storage until submit button on modal is clicked
var zipcode = localStorage.getItem('zip');

$(document).on('DOMContentLoaded', function (e) {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=1c2750404739686fb5929a48b32c2766`)
    .then((response) => {
        const weatherApiData = `
          <div class="weather d-flex flex-column">
            <div class="weather-header mb-1">Weather for: <br/><b>${response.data.name} (${zipcode})</b></div>
            <div class="main-weather d-flex flex-row justify-content-center mt-3 mb-3">
                <div class="weather-img d-flex flex-column mr-4">
                  <p class="weather-description d-flex justify-content-center mb-0">${response.data.weather[0].description}</p>
                  <img class="weather-img d-flex justify-content-center"
                  src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png" alt="weather-icon">
                </div>
                <div class="temp-big d-flex flex-row justify-content-center align-content-center mb-0">
                  <p class="d-flex flex-row justify-content-center align-content-center pl-4 pt-3 mb-0">
                  ${Math.round(response.data.main.temp)}°F</p>
                </div>
              </div>
              <div class="weather-details">
                <table class="tg d-flex flex-row justify-content-center align-content-center">
                <tbody>
                <tr>
                  <td class="tg-0lax">Feels Like:</td>
                  <td class="tg-lqy6 ds">${Math.round(response.data.main.feels_like)}°F</td>
                </tr>
                <tr>
                  <td class="tg-0lax">Low/High:</td>
                  <td class="tg-lqy6 ds">${Math.round(response.data.main.temp_min)}°F / ${Math.round(response.data.main.temp_max)}°F</td>
                </tr>
                <tr>
                  <td class="tg-0lax">Humidity:</td>
                  <td class="tg-lqy6 ds">${Math.round(response.data.main.humidity)}%</td>
                </tr>
                <tr>
                  <td class="tg-0lax">Wind Speed:</td>
                  <td class="tg-lqy6 ds">${Math.round(response.data.wind.speed)}mph</td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>`;
        $(".weather").html(weatherApiData);
      });
});

// When the submit button on the modal is clicked, check for valid zipcode and pass the zipcode to the API call
submit.onclick = function () {
    validateUser()
};