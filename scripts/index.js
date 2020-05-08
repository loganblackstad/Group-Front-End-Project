function renderWidgets(widget) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="3" id=${widget.divID}>
      <div class="grid-stack-item-content">
      <div class="bor">
        <div class="d-flex widget-header m-0 p-3 align-item-center"><p class="m-0"><b>${widget.title}</b></p><span class="ml-auto ${widget.class}">✖️</span></div>
        <div id=${widget.cardID} class="m-3"></div>
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
    <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="5" data-gs-height="5" id=${
    widget.divID
    }>
      <div class="grid-stack-item-content">
        <div class="bor">
          <div class="d-flex widget-header m-0 p-3 align-item-center">
          <p class="m-0"><b>COVID-19 Daily Update</b></p>
          <span class="ml-auto ${widget.class}">✖️</span>
        </div>
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
      <div id="card-news" class="m-3">
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

// -----------------------------------------------

// -----------------------------------------------
// Save widget location data to local storage
$("#save").on("click", function () {
  let nl = document.querySelectorAll('.grid-stack-item')
  var arrayOfWidgets = [];
  for (var i = 0, n; n = nl[i]; ++i) {
    arrayOfWidgets.push(n);
  }
  console.log(arrayOfWidgets)
  let savedWidgets = arrayOfWidgets.map(widget => {
    let obj = {};
    obj['id'] = widget.id;
    obj['x'] = widget.getAttribute("data-gs-x");
    obj['y'] = widget.getAttribute("data-gs-y");
    obj['width'] = widget.getAttribute("data-gs-width");
    obj['height'] = widget.getAttribute("data-gs-height");

    return obj
  })

  console.log(savedWidgets);
  let parsedWidgets = JSON.stringify(savedWidgets);
  localStorage.setItem('widgets', parsedWidgets)
});
// -----------------------------------------------

// This is only a test
function test(x, y, width, height, ID) {
  let renderedWidget = `
    <div class="grid-stack-item" data-gs-x="${x}" data-gs-y="${y}" data-gs-width="${width}" data-gs-height="${height}" id=${ID}>
      <div class="grid-stack-item-content">
        <h1>${ID}</h1>
      </div>
    </div>
  `;
  return renderedWidget;
}

// Render data from local storage
$("#restore").on("click", function () {
  $('.grid-stack').html('');
  let widgetListJSON = localStorage.getItem('widgets');
  let widgetList = JSON.parse(widgetListJSON);
  widgetList.forEach(widget => {
    console.log(widget)
    grid.addWidget(test(widget.x, widget.y, widget.width, widget.height, widget.id));
    console.log(test)
  })

  widgetListLS = JSON.stringify(widgetList);
  localStorage.setItem('widgets', widgetListLS);
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


// Event Listener Needed


document.addEventListener("DOMContentLoaded", async function (e) {

  var dragContainer = document.getElementById("coronaDiv")
  var content = document.getElementById("coronaDiv").getElementsByClassName("bor")
  // var innerContent = document.getElementById("#coronaDiv")
  var dragContainerHeight = $("#coronaDiv").outerHeight();
  var contentHeight = $("#coronaDiv").find(".bor").outerHeight();
  console.log(dragContainerHeight);
  console.log(contentHeight);

  if (dragContainerHeight > contentHeight) {
    await $("#coronaDiv .bor").height(dragContainerHeight);
  } else {
    console.log(contentHeight);
    await {
      $("#coronaDiv").height(contentHeight);
      $("#coronaDiv .bor").height(contentHeight - 50);
    }
    // var dragContainerHeight = $("#coronaDiv").outerHeight();
    // var contentHeight = $("#coronaDiv").find(".bor").outerHeight();
    // $("#coronaDiv").outerHeight(contentHeight);
  }

  await {
    dragContainerHeight = $("#coronaDiv").outerHeight();
    contentHeight = $("#coronaDiv").find(".bor").outerHeight();
    $("#coronaDiv .bor").height(dragContainerHeight);
  }

});

document.addEventListener("", async function (e) {

  var dragContainer = document.getElementById("coronaDiv")
  var content = document.getElementById("coronaDiv").getElementsByClassName("bor")
  // var innerContent = document.getElementById("#coronaDiv")
  var dragContainerHeight = $("#coronaDiv").outerHeight();
  var contentHeight = $("#coronaDiv").find(".bor").outerHeight();
  console.log(dragContainerHeight);
  console.log(contentHeight);

  if (dragContainerHeight > contentHeight) {
    await $("#coronaDiv .bor").height(dragContainerHeight);
  } else {
    console.log(contentHeight);
    await {
      $("#coronaDiv").height(contentHeight);
      $("#coronaDiv .bor").height(contentHeight - 50);
    }
    // var dragContainerHeight = $("#coronaDiv").outerHeight();
    // var contentHeight = $("#coronaDiv").find(".bor").outerHeight();
    // $("#coronaDiv").outerHeight(contentHeight);
  }

  await {
    dragContainerHeight = $("#coronaDiv").outerHeight();
    contentHeight = $("#coronaDiv").find(".bor").outerHeight();
    $("#coronaDiv .bor").height(dragContainerHeight);
  }

});