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

      var numArticlesToRender = 3;
      var templateStr = `<b> Top US News</b><br />`;
      for (i = 0; i < numArticlesToRender; i++) {
        var arrNewsHeadline = json.articles[i].title.split(" - ");
        var srcNewsHeadline = arrNewsHeadline.pop();
        var titleNewsHeadline = "".concat(arrNewsHeadline);
        let tempStr = `<a href="${json.articles[i].url}" target="_blank">${titleNewsHeadline}</a>
        <span class="news-source"><i>${srcNewsHeadline}</i></span>
        <br/>`;
        templateStr += tempStr;
      }

      $("#card-news").html(templateStr);
    });
});

// TO BE ADDED:
// Add News Filters for:
// - media outlet (source)
// - popularity
// - timeframe
// - geographic location
