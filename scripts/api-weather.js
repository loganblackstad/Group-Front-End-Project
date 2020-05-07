//Weather API

//OMW api key: 1c2750404739686fb5929a48b32c2766
    //api.openweathermap.org/data/2.5/weather?zip={zip code},us&appid={your api key}

//CHANGE ALL RESPONSE.DATA ENTRIES


   /* axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=30542,us&appid=1c2750404739686fb5929a48b32c2766`)
    .then(function (response) {
        console.log(response);
        const weatherCard = `
            <div>
                <div class='d-flex justify-content-center'>
                    <h1><b>${response.data.name}</b></h1>
                </div
                <div class='d-flex justify-content-center'>
                    <img src="/${response.data.weather[0].icon}">
                </div>
                <div class='d-flex justify-content-center'>
                    <h3><em>${response.data.weather[0].description}</em></h3>
                </div>
                <div class='d-flex justify-content-between'>
                    <p><b>Fahrenheit:</b> ${response.data.main.temp.Fahrenheit}</p><p><b>Celcius:</b>${response.data.main.temp.Celsius}</p>
                </div>
                <div class='d-flex justify-content-center'>
                    <p><b>Humidiy:</b> ${response.data.main.humidity}</p>
                </div>
                <div class='d-flex justify-content-center'>
                    <p><b>Wind Speed:</b> ${response.data.wind.speed}</p>
                </div>
                <div class='d-flex justify-content-between'>
                <p><b>Sunrise:</b> ${response.data.sys.sunrise}</p><p><b>Sunset:</b>${response.data.sys.sunset}</p>
                </div>
            </div>
        `
        $('#weather').html(weatherCard);
    }); */

    
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=30542,us&appid=1c2750404739686fb5929a48b32c2766`)
    .then(function (response) {
        console.log(response);
        const weatherCard = `
            <div>
            <div id="openweathermap-widget-5"></div>
            <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 5,cityid: '4180439',appid: '1c2750404739686fb5929a48b32c2766',units: 'imperial',containerid: 'openweathermap-widget-5',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>
            </div>
        `
        $('#weather').html(weatherCard);
    });