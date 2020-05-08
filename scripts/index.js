function renderWidgets(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="3" id=${widget.divID}>
      <div class="grid-stack-item-content">
      <div class="bor">
        <div class="d-flex widget-header m-0 p-3 align-item-center"><p><b>${widget.title}</b></p><span class="ml-auto ${widget.class}">✖️</span></div>
        <div id=${widget.cardID} class="m-3"></div>
        <div><button class="d-flex btn btn-dark m-3" id=${widget.buttonID}>${widget.buttonText}</button></div>
      </div>
      </div>
    </div>
  `;
  return renderedWidget;
}

function renderNoButton(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2" id=${widget.divID}>
      <div class="grid-stack-item-content">
        <div class="d-flex"><p>${widget.title}</p><span class="ml-auto ${widget.class}">✖️</span></div>
        <div id=${widget.cardID}></div>
      </div>
    </div>
  `;
  return renderedWidget;
}

function renderRona(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="5" data-gs-height="5" id=${
    widget.divID
    }>
      <div class="grid-stack-item-content">
        <div class="bor">
          <div class="d-flex widget-header m-0 p-3 align-item-center">
          <p><b>COVID-19 Daily Update</b></p>
          <span class="ml-auto ${widget.class}">✖️</span>
        </div>
        <div class="mb-3"><center>
            <img src="https://corona.lmao.ninja/assets/img/flags/us.png">
            <table class="tg">
            <tbody>
            <tr>
                <td class="tg-0lax">Cases :</td>
                <td class="tg-lqy6">${widget.stats.data.cases.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Cases (today) :</td>
                <td class="tg-lqy6">${widget.stats.data.todayCases.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Deaths :</td>
                <td class="tg-lqy6">${widget.stats.data.deaths.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Deaths (today) :</td>
                <td class="tg-lqy6">${widget.stats.data.todayDeaths.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Recovered :</td>
                <td class="tg-lqy6">${widget.stats.data.recovered.toLocaleString()}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Total Tested :</td>
                <td class="tg-lqy6">${widget.stats.data.tests.toLocaleString()}</td>
            </tr>
            </tbody>
            </table>
        </center></div>
      </div>
      </div>
    </div>
  `;
  return renderedWidget;
}

function renderNews() {
  console.log("news!");
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=bb4227ec350a41dba251dadcd757dcae";

  let widgetHeader = `
  <div class="grid-stack-item" data-gs-x="0" data-gs-y="4" data-gs-width="5" data-gs-height="4" id="newsDiv">
    <div class="grid-stack-item-content">
      <div class="d-flex">
        <p><b>Top US News</b></p>
        <span class="ml-auto newsClose">✖️</span>
      </div>
      <div id="card-news">
      `;
  let widgetFooter = `
      </div>
    </div>
  </div>
  `;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Render the top 3 US news stories to the <div id="card-news"> element

      var numArticlesToRender = 3;
      var templateStr = ``;
      for (i = 0; i < numArticlesToRender; i++) {
        var arrNewsHeadline = json.articles[i].title.split(" - ");
        var srcNewsHeadline = arrNewsHeadline.pop();
        var titleNewsHeadline = "".concat(arrNewsHeadline);
        let tempStr = `
            <div class="headline">
              <a href="${json.articles[i].url}" target="_blank">${titleNewsHeadline}</a><br/>
              <span class="news-source"><i>${srcNewsHeadline}</i></span>
              <br/>  
            </div>
            `;
        templateStr += tempStr;
      }
      console.log(templateStr);
      grid.addWidget(widgetHeader + templateStr + widgetFooter);
    });
}

// Date Time Generator /* ------------- */
var dateSpan = document.getElementById("date-span");
var timehhmm = document.getElementById("hhmm");
var timess = document.getElementById("ss");
var timeampm = document.getElementById("ampm");

function time() {
  var d = new Date();
  var optionWeekdayOnly = { weekday: "long" };
  var optionDateOnly = { year: "numeric", month: "long", day: "numeric" };
  var weekdayOnly = d.toLocaleDateString("en-US", optionWeekdayOnly);
  var dateOnly = d.toLocaleDateString("en-US", optionDateOnly);
  var timeOnly = d.toLocaleString().slice(9, 14);
  var secondsOnly = d.toLocaleString().slice(15, 17);
  var ampmOnly = d.toLocaleString().slice(18, 20);

  dateSpan.textContent = weekdayOnly + " " + dateOnly;
  timehhmm.textContent = timeOnly;
  // timess.textContent = secondsOnly;
  timeampm.textContent = ampmOnly.toUpperCase();
}

setInterval(time, 1000);
/* ------------------------------------ */

$(document).on("click", ".boredClose", function () {
  grid.removeWidget($("#boredDiv").get(0));
});

$(document).on("click", ".quoteClose", function () {
  grid.removeWidget($("#quoteDiv").get(0));
});

$(document).on("click", ".weatherClose", function () {
  grid.removeWidget($("#weatherDiv").get(0));
});

$(document).on("click", ".aqClose", function () {
  grid.removeWidget($("#aqDiv").get(0));
});

$(document).on("click", ".jokeClose", function () {
  grid.removeWidget($("#jokeDiv").get(0));
});

$(document).on("click", ".newsClose", function () {
  grid.removeWidget($("#newsDiv").get(0));
});

$(document).on("click", ".coronaClose", function () {
  grid.removeWidget($("#coronaDiv").get(0));
});

$(document).on("click", ".adviceClose", function () {
  grid.removeWidget($("#adviceDiv").get(0));
});

$(document).on("click", ".yeezyClose", function () {
  grid.removeWidget($("#yeezyDiv").get(0));
});

// Get user input from the Modal
function getInput(e) {
  e.preventDefault();
  $("#greeting").html(`Hello, ${$("#userName").val()}`);
  localStorage.setItem("zip", $("#userZip").val());
}

// Add event listeners to the form to call functions when form is submitted
const form = document.querySelector("#theform");
form.addEventListener("submit", getInput);

// Modal
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the submit button that closes the modal
let submit = document.getElementById("subButton");

// When the user clicks on the button, open the modal
window.onload = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on the submit button, close the modal
submit.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
