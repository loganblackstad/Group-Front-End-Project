// News API call to render top News Headlines to Smart Mirror Screen

// API Doc: https://newsapi.org/docs/get-started
// Logan's API key for "News API":  bb4227ec350a41dba251dadcd757dcae

// Upon Page Load, set api url, then fetch a promise, and render headlines
document.addEventListener("DOMContentLoaded", function (e) {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=bb4227ec350a41dba251dadcd757dcae";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Render the top 3 US news stories to the <div id="card-news"> element
      $("#card-news").html(
        `<b>Top US News</b>
        <br/>
        <a href="${json.articles[0].url}" target="_blank">${json.articles[0].title}</a>
        <br/>
        <a href="${json.articles[1].url}" target="_blank">${json.articles[1].title}</a>
        <br/>
        <a href="${json.articles[2].url}" target="_blank">${json.articles[2].title}</a>
        `
      );
    });
});

// TO BE ADDED:
// Add News Filters for:
// - media outlet (source)
// - popularity
// - timeframe
// - geographic location
