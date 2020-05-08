function renderWidgets(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2" id=${widget.divID}>
      <div class="grid-stack-item-content">
      <div class="bor">
        <div class="d-flex widget-header m-0 p-3 align-item-center"><p class="m-0"><b>${widget.title}</b></p><span class="ml-auto ${widget.class}">✖️</span></div>
        <div id=${widget.cardID} class="innerDiv m-3"></div>
        <div><button class="d-flex btn btn-dark m-3" id=${widget.buttonID}>${widget.buttonText}</button></div>
      </div>
      </div>
    </div>
  `;
  return renderedWidget;
}

// function renderNoButton(widget) {
//   let renderedWidget = `
//     <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2" id=${widget.divID}>
//       <div class="grid-stack-item-content">
//         <div class="d-flex"><p>${widget.title}</p><span class="ml-auto ${widget.class}">✖️</span></div>
//         <div id=${widget.cardID}></div>
//       </div>
//     </div>
//   `;
//   return renderedWidget;
// }

function renderRona(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="5" data-gs-height="5" id=${widget.divID}>
      <div class="grid-stack-item-content">
        <div class="bor">
          <div class="d-flex widget-header m-0 p-3 align-item-center">
          <p class="m-0"><b>COVID-19 Daily Update</b></p>
          <span class="ml-auto ${widget.class}">✖️</span>
        </div>
        <div id="card-corona" class="innerDiv mb-3"></div>
        <div class="mb-3"><center>
            <img class="flag" src="https://corona.lmao.ninja/assets/img/flags/us.png">
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
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=bb4227ec350a41dba251dadcd757dcae";

  let widgetHeader = `
  <div class="grid-stack-item" data-gs-x="0" data-gs-y="4" data-gs-width="5" data-gs-height="4" id="newsDiv">
    <div class="grid-stack-item-content">
      <div class="bor">
          <div class="d-flex widget-header m-0 p-3 align-item-center">
        <p class="m-0"><b>Top US News</b></p>
        <span class="ml-auto newsClose">✖️</span>
      </div>
      <div id="card-news" class="innerDiv m-3">
      `;
  let widgetFooter = `
      </div>
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
      grid.addWidget(widgetHeader + templateStr + widgetFooter);
    });
}

// ---------------------------------
// remove grid widgets in the main container

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

<<<<<<< HEAD
function saveRegWidget(widget) {
  let obj = {};
  obj['id'] = widget.id;
  obj['x'] = widget.getAttribute("data-gs-x");
  obj['y'] = widget.getAttribute("data-gs-y");
  obj['width'] = widget.getAttribute("data-gs-width");
  obj['height'] = widget.getAttribute("data-gs-height");
  obj['title'] = widget.getElementsByTagName("b")[0].innerHTML;
  // obj['divID'] = widget.id;
  obj['cardID'] = widget.getElementsByClassName('innerDiv')[0].id;
  obj['buttonID'] = widget.getElementsByTagName('button')[0].id;
  obj['class'] = widget.getElementsByTagName('span')[0].classList[1];
  obj['buttonText'] = widget.getElementsByTagName('button')[0].innerHTML;

  return obj
}

function saveHomeWidget(widget) {
  let obj = {};
  obj['id'] = widget.id;

  return obj
}

function saveCoronaWidget(widget) {
  let obj = {};
  obj['id'] = widget.id;
  obj['x'] = widget.getAttribute("data-gs-x");
  obj['y'] = widget.getAttribute("data-gs-y");
  obj['width'] = widget.getAttribute("data-gs-width");
  obj['height'] = widget.getAttribute("data-gs-height");
  obj['title'] = widget.getElementsByTagName("b")[0].innerHTML;
  // obj['divID'] = widget.id;
  obj['cardID'] = widget.getElementsByClassName('innerDiv')[0].id;
  obj['class'] = widget.getElementsByTagName('span')[0].classList[1];

  return obj
}

function saveNewsWidget(widget) {
  let obj = {};
  obj['id'] = widget.id;
  obj['x'] = widget.getAttribute("data-gs-x");
  obj['y'] = widget.getAttribute("data-gs-y");
  obj['width'] = widget.getAttribute("data-gs-width");
  obj['height'] = widget.getAttribute("data-gs-height");
  obj['title'] = widget.getElementsByTagName("b")[0].innerHTML;
  // obj['divID'] = widget.id;
  obj['cardID'] = widget.getElementsByClassName('innerDiv')[0].id;
  obj['class'] = widget.getElementsByTagName('span')[0].classList[1];

  return obj
}
// Save data to local storage
$(document).on("click", "#save", function () {
=======
// -----------------------------------------------

// -----------------------------------------------
// Save widget location data to local storage
$("#save").on("click", function () {
>>>>>>> master
  let nl = document.querySelectorAll('.grid-stack-item')
  var arrayOfWidgets = [];
  for (var i = 0, n; n = nl[i]; ++i) {
    arrayOfWidgets.push(n);
  }
  let savedWidgets = arrayOfWidgets.map(widget => {
    if (widget.id == "homeWidget") {
      return saveHomeWidget(widget);
    } else if (widget.id == "newsDiv") {
      return saveNewsWidget(widget);
    } else if (widget.id == "coronaDiv") {
      return saveCoronaWidget(widget);
    } else {
      return saveRegWidget(widget);
    }
  });

  savedWidgets = savedWidgets.sort((objectA, objectB) => {
    return objectA.y - objectB.y;
  });

  console.log(savedWidgets);
  let parsedWidgets = JSON.stringify(savedWidgets);
  localStorage.setItem('widgets', parsedWidgets)
});
// -----------------------------------------------


function renderHome() {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="5" data-gs-height="7" data-gs-locked="true" data-gs-noMove="true" data-gs-noResize="true" id="homeWidget">
      <div class="grid-stack-item-content d-flex flex-column m-2 p-1 overflow-auto" id="home">
        <p id="greeting" class="mt-1"></p>
        <button class="btn btn-dark" id="save">save layout</button>
        <script async src="https://cse.google.com/cse.js?cx=015973783965488086183:3k48kdj5xul"></script>
        <div class="gcse-search" enableAutoComplete="true"></div>
          <div class="date-time m-0 mb-3">
            <p class="m-0"><span id="date-span" class="m-0"></span></p>
            <p class="d-flex align-content-top m-0" id="time-span">
              <span id="hhmm" class="mr-2"></span>
              <span id="ss" class="mr-2"></span>
              <span id="ampm"></span>
            </p>
          </div>
        <div class="weatehr"><p>weather</p></div>
        <div>
          <div id="openweathermap-widget-5"></div>
          <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 5, cityid: '420006353', appid: '1c2750404739686fb5929a48b32c2766', units: 'imperial', containerid: 'openweathermap-widget-5', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();</script>
        </div>
        <br/>
        <div class="dropdown show d-flex justify-content-center">
          <a class="btn btn-primary dropdown-toggle" href="#"
            role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Add Widget
          </a>
          <div class="dropdown-menu overflow-auto scrollable-menu"
            aria-labelledby="dropdownMenuLink">
            <a href="#" class="nav-link" id="addQuotes">Quotes</a>
            <a href="#" class="nav-link" id="addBored">Bored</a>
            <a href="#" class="nav-link" id="addJoke">Jokes</a>
            <a href="#" class="nav-link" id="addAdvice">Advice</a>
            <a href="#" class="nav-link" id="addNews">News</a>
            <a href="#" class="nav-link" id="addAQ">Air Quality</a>
            <a href="#" class="nav-link" id="addCorona">Coronavirus</a>
            <a href="#" class="nav-link" id="addYeezy">Kanye Quotes</a>
          </div>
        </div>
      </div>
    </div>
    `;
  grid.addWidget(renderedWidget);
}

function renderRegWidget(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x=${widget.x} data-gs-y=${widget.y} data-gs-width=${widget.width} data-gs-height=${widget.height} id=${widget.id}>
      <div class="grid-stack-item-content">
        <div class="bor">
          <div class="d-flex widget-header m-0 p-3 align-item-center"><p><b>${widget.title}</b></p><span class="ml-auto ${widget.class}">✖️</span></div>
          <div id=${widget.cardID} class="innerDiv m-3"></div>
          <div><button class="d-flex btn btn-dark m-3" id=${widget.buttonID}>${widget.buttonText}</button></div>
        </div>
      </div>
    </div>
  `;
  grid.addWidget(renderedWidget);
}

async function renderNewsWidget(widget) {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=bb4227ec350a41dba251dadcd757dcae";

  let widgetHeader = `
  <div class="grid-stack-item" data-gs-x=${widget.x} data-gs-y=${widget.y} data-gs-width=${widget.width} data-gs-height=${widget.height} id=${widget.id}>
    <div class="grid-stack-item-content">
      <div class="bor">
        <div class="d-flex widget-header m-0 p-3 align-item-center">
          <p><b>Top US News</b></p>
          <span class="ml-auto newsClose">✖️</span>
        </div>
        <div id="card-news" class="innerDiv m-3"></div>
      `;

  let widgetFooter = `
      </div>
    </div>
  </div>
  `;

  await fetch(url)
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
      grid.addWidget(widgetHeader + templateStr + widgetFooter);
      resetGrid();
    });
}
  
async function renderCoronaWidget(widget) {
  await axios
    .get("https://disease.sh/v2/countries/United%20States?yesterday=true#")
    .then((response) => {
      console.log(response)
      let renderedWidget = `
        <div class="grid-stack-item" id=${widget.id}>
          <div class="grid-stack-item-content">
            <div class="bor">
              <div class="d-flex widget-header m-0 p-3 align-item-center">
              <p><b>COVID-19 Daily Update</b></p>
              <span class="ml-auto ${widget.class}">✖️</span>
            </div>
            <div id="card-corona" class="innerDiv mb-3"></div>
            <div class="mb-3">
              <center>
                <img src="https://corona.lmao.ninja/assets/img/flags/us.png">
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
              </center>
            </div>
          </div>
        </div>
      `;
      grid.addWidget(renderedWidget, {
        x: widget.x, 
        y: widget.y,
        width: widget.width,
        height: widget.height,
      })
      resetGrid();
  });
}

// Render data from local storage
$("#restore").on("click", function () {
  $('.grid-stack').html('');
  let widgetListJSON = localStorage.getItem('widgets');
  let widgetList = JSON.parse(widgetListJSON);
  console.log(widgetList)
  widgetList.forEach(widget => {
    if (widget.id == "homeWidget") {
      renderHome();
    } else if (widget.id == "coronaDiv") {
      renderCoronaWidget(widget);
    } else if (widget.id == "newsDiv") {
      renderNewsWidget(widget);
    } else {
      renderRegWidget(widget);
    }
  });
  resetGrid();

  widgetListLS = JSON.stringify(widgetList);
  localStorage.setItem('widgets', widgetListLS);
});

function resetGrid() {
  let widgetListJSON = localStorage.getItem('widgets');
  let widgetList = JSON.parse(widgetListJSON);
  let nl = document.querySelectorAll('.grid-stack-item')
  var arrayOfWidgets = [];
  for(var i = 0, n; n = nl[i]; ++i) {
    arrayOfWidgets.push(n);
  }

  arrayOfWidgets.forEach(widget => {
    let widgetObject = widgetList.find(object => {
      return object.id === widget.id;
    });
    grid.update(widget, widgetObject.x, widgetObject.y);
  });
}


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

// Get the restore button that closes the modal
let restore = document.getElementById("restore");

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

// When the user clicks on the restore button, close the modal
restore.onclick = function (event) {
  modal.style.display = "none";
}

// Update height of cards based on children height


// Resize all widgets so that border encapsulates drag arrow on page load
document.addEventListener("DOMContentLoaded", async function (e) {
  var contentHeight = $("#boredDiv").find(".bor").outerHeight();
  $("#boredDiv").height(contentHeight);
  var contentHeight = $("#quoteDiv").find(".bor").outerHeight();
  $("#quoteDiv").height(contentHeight);
  var contentHeight = $("#yeezyDiv").find(".bor").outerHeight();
  $("#yeezyDiv").height(contentHeight);
  var contentHeight = $("#coronaDiv").find(".bor").outerHeight();
  $("#coronaDiv").height(contentHeight);
  var contentHeight = $("#adviceDiv").find(".bor").outerHeight();
  $("#adviceDiv").height(contentHeight);
  var contentHeight = $("#jokeDiv").find(".bor").outerHeight();
  $("#jokeDiv").height(contentHeight);

  setTimeout(function () {
    var contentHeight = $("#newsDiv").find(".bor").outerHeight();
    $("#newsDiv").height(contentHeight);
  }, 1000);

});

$("#dropdownMenuLink").on("click", async function () {
  setTimeout(function () {
    var contentHeight = $("#boredDiv").find(".bor").outerHeight();
    $("#boredDiv").height(contentHeight);
    var contentHeight = $("#quoteDiv").find(".bor").outerHeight();
    $("#quoteDiv").height(contentHeight);
    var contentHeight = $("#yeezyDiv").find(".bor").outerHeight();
    $("#yeezyDiv").height(contentHeight);
    var contentHeight = $("#coronaDiv").find(".bor").outerHeight();
    $("#coronaDiv").height(contentHeight);
    var contentHeight = $("#adviceDiv").find(".bor").outerHeight();
    $("#adviceDiv").height(contentHeight);
    var contentHeight = $("#jokeDiv").find(".bor").outerHeight();
    $("#jokeDiv").height(contentHeight);
    var contentHeight = $("#newsDiv").find(".bor").outerHeight();
    $("#newsDiv").height(contentHeight);
  }, 1000);

});