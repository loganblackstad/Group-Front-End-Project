//Weather API

// URL - http://api.weatherunlocked.com/api/forecast/us.30313?app_id=c79e9451&app_key=d70ebebfb9b22a539c6fff4537050eb1

//Application id: c79e9451

//Key: d70ebebfb9b22a539c6fff4537050eb1

/*  wx_icon : weather icon
    wx_desc: weather description
    temp_f: temp fahrenheit
    temp_c: temp celcius
    humid_pct: humid percentage
    windspd_mph: windspeed mph
*/

    axios.get(`http://api.weatherunlocked.com/api/current/us.30326?app_id=c79e9451&app_key=d70ebebfb9b22a539c6fff4537050eb1`)
    .then(function (response) {
        console.log(response);
        const weatherCard = `
            <div>
                <div class='d-flex justify-content-center'>
                    <img src="Icons/${response.data.wx_icon}">
                </div>
                <div class='d-flex justify-content-center'>
                    <h3><em>${response.data.wx_desc}</em></h3>
                </div>
                <div class='d-flex justify-content-between'>
                    <p><b>Fahrenheit:</b> ${response.data.temp_f}</p><p><b>Celcius:</b> ${response.data.temp_c}</p>
                </div>
                <div class='d-flex justify-content-center'>
                    <p> <b>Humidiy:</b> ${response.data.humid_pct}</p>
                </div>
                <div class='d-flex justify-content-center'>
                    <p> <b>Wind Speed:</b> ${response.data.windspd_mph}</p>
                </div
            </div>
        `
        $('#weather').html(weatherCard);
    });
