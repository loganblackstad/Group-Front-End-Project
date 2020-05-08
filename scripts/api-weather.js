//Weather API

//OMW api key: 1c2750404739686fb5929a48b32c2766
//api.openweathermap.org/data/2.5/weather?zip=30301,us&units=imperial&appid=1c2750404739686fb5929a48b32c2766}

//img URL: /http://openweathermap.org/img/wn/${10d}@2x.pn

//Inputs User Input to zip code location
var zipcode = localStorage.getItem('zip');
console.log(zipcode);

$(document).on('DOMContentLoaded', function (e) {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=1c2750404739686fb5929a48b32c2766`)
        .then(response => {
            console.log(response)
            // $('.weather').html(response.data.joke);
        });
});

//Working weather api data
axios.get("https://api.openweathermap.org/data/2.5/weather?zip=30301,us&units=imperial&appid=1c2750404739686fb5929a48b32c2766")
    .then((response) => {
        console.log(response);
        const weatherApiData = `
    <div><center>
        <img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png">
        <table class="tg">
        <tbody>
        <tr>
            <td class="tg-lqy6">${response.data.weather[0].description}</td>
        </tr>
        <tr>
            <td class="tg-0lax boldt">Temp (°F) :</td>
            <td class="tg-lqy6">${response.data.main.temp}</td>
        </tr>
        <tr>
            <td class="tg-0lax boldt">Feels like :</td>
            <td class="tg-lqy6">${response.data.main.feels_like}</td>
        </tr>
        <tr>
            <td class="tg-0lax boldt">Humidity:</td>
            <td class="tg-lqy6">${response.data.main.humidity}</td>
        </tr>
        <tr>
            <td class="tg-0lax boldt">Atmospheric Pressure :</td>
            <td class="tg-lqy6">${response.data.main.pressure}</td>
        </tr>
        <tr>
            <td class="tg-0lax boldt">Wind Speed :</td>
            <td class="tg-lqy6">${response.data.wind.speed}</td>
        </tr>
        </tbody>
        </table>
    </center></div>`;
        $(".weather").html(weatherApiData);
    });



//Weather Widget
/* <div>
    <div id="openweathermap-widget-5"></div>
    <script>
        window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
        window.myWidgetParam.push({
            id: 5,
            cityid: '420006353',
            appid: '1c2750404739686fb5929a48b32c2766',
            units: 'imperial',
            containerid: 'openweathermap-widget-5',
            });
        (function() {
            var script = document.createElement('script');
            script.async = true;
            script.charset = "utf-8";
            script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);  })();
    </script>
</div>

<div>
                <div id="openweathermap-widget-5"></div>
                <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 5, cityid: '4180386', appid: '1c2750404739686fb5929a48b32c2766', units: 'imperial', containerid: 'openweathermap-widget-5', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();</script>
              </div>


*/




