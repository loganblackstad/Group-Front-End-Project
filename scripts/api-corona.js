//https://disease.sh/v2/states/Georgia?yesterday=true
//countryInfo.flag
//university.logo_.small_.vertical.white_.png
axios
    .get("https://disease.sh/v2/countries/United%20States?yesterday=true#")
    .then((response) => {
        const coronaUSA = `<div><center>
            <img class="flag" src="https://corona.lmao.ninja/assets/img/flags/us.png">
            <table class="tg">
            <tbody>
            <tr>
                <td class="tg-0lax">Cases :</td>
                <td class="tg-lqy6">${response.data.cases.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Cases (today) :</td>
                <td class="tg-lqy6">${response.data.todayCases.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Deaths :</td>
                <td class="tg-lqy6">${response.data.deaths.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Deaths (today) :</td>
                <td class="tg-lqy6">${response.data.todayDeaths.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Recovered :</td>
                <td class="tg-lqy6">${response.data.recovered.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Total Tested :</td>
                <td class="tg-lqy6">${response.data.tests.toLocaleString()}</td>
            </tr>
            </tbody>
            </table>
        </center></div>`;
        $("#card-corona").html(coronaUSA);
    });

//Powered By: John Hopkins Image
/*
    <div class='d-flex justify-content-end'>
        <p><small><i>Powered by:  </i><img src="Icons/university.logo_.small_.vertical.white_.png"></small></p>
    </div>
*/
