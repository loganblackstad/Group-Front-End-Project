// Air Quality API call to render the Air quality for the given zip

// API Doc: https://docs.developer.climacell.co/docs/air-quality
// Logan's API key for "Clima Cell API":  NP7WjTqMdIDuTd2tw4yAAno2g4I1pOUq

// Upon Page Load, set api url, then fetch a promise, and render headlines
document.addEventListener("DOMContentLoaded", function (e) {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=NP7WjTqMdIDuTd2tw4yAAno2g4I1pOUq";

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
