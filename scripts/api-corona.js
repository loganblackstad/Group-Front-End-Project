//https://disease.sh/v2/states/Georgia?yesterday=true
//countryInfo.flag
//university.logo_.small_.vertical.white_.png

axios.get("https://disease.sh/v2/countries/United%20States?yesterday=true#")
    .then(response => {
        console.log(response)
        const coronaUSA= `
            <div><center>
                <div>
                    <h3><strong>COVID-19 Daily Data</strong></h3>
                </div>
                <div>
                    <h4><strong>${response.data.country}</strong></h4>
                </div>
                <div>
                    <img src="https://corona.lmao.ninja/assets/img/flags/us.png">
                </div>
                <div>
                    <p><b>Cases:</b> ${response.data.cases}</p>
                </div>
                <div>
                    <p><b>Cases Today:</b> ${response.data.todayCases}</p>
                </div>
                <div>
                    <p><b>Deaths:</b> ${response.data.deaths}</p>
                </div>
                <div>
                    <p><b>Deaths Today:</b> ${response.data.todayDeaths}</p>
                </div> 
                <div>
                    <p><b>Recovered:</b> ${response.data.recovered}</p>
                </div>
                <div>
                    <p><b>Total Test:</b> ${response.data.tests}</p>
                </div>
                <div class='d-flex justify-content-end'>
                    <p><small><i>Powered by:  </i><img src="Icons/university.logo_.small_.vertical.white_.png"></small></p>
                </div>
            </center></div>
        `
        $('#corona').html(coronaUSA);
    });
