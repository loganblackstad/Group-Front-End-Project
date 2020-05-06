function renderWidgets(widget) {
  let renderedWidget = `
    <div class="grid-stack-item border border-dark" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2" id=${widget.divID}>
      <div class="grid-stack-item-content">
        <div class="d-flex"><p>${widget.title}</p><span class="ml-auto ${widget.class}">✖️</span></div>
        <div id=${widget.cardID} class="card mt-1"></div>
        <div><button class="d-flex btn btn-dark mt-3" id=${widget.buttonID}>${widget.buttonText}</button></div>
      </div>
    </div>
  `;
  return renderedWidget;
}

function renderNoButton(widget) {
  let renderedWidget = `
    <div class="grid-stack-item border border-dark" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2" id=${widget.divID}>
      <div class="grid-stack-item-content">
        <div class="d-flex"><p>${widget.title}</p><span class="ml-auto ${widget.class}">✖️</span></div>
        <div id=${widget.cardID}></div>
      </div>
    </div>
  `;
  return renderedWidget;
}

var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent = new Date().toLocaleString();
}

setInterval(time, 1000);

$(document).on('click', '.boredClose', function () {
  grid.removeWidget($('#boredDiv').get(0));
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

// Get user input from the Modal
function getInput(e) {
  e.preventDefault();
  $("#greeting").html(`Hello, ${$("#userName").val()}`);
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
