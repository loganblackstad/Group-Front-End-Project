//https://disease.sh/v2/states/Georgia?yesterday=true
//countryInfo.flag

axios.get("https://disease.sh/v2/countries/United%20States?yesterday=true#")
    .then(response => {
        console.log(response)
        const coronaUSA= `
            <div id="corona"><center>
                <div>
                    <h4><em>COVID-19 Daily News</em></h4>
                </div>
                <div>
                    <h1><b>${response.data.country}</b></h1>
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
            </center></div>
        `
        $('#corona').html(coronaUSA);
    });
