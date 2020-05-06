$('#boredButton').on('click', function(e) {
  e.preventDefault();
  axios.get("https://www.boredapi.com/api/activity/")
    .then(response => {
      console.log(response)
      $('#bored').html(response.data.activity + "!");
  });
});

$('.boredClose').on('click', function() {
  grid.removeWidget($('#boredDiv').get(0));
})

$('.quoteClose').on('click', function() {
  grid.removeWidget($('#quoteDiv').get(0));
})

$('.weatherClose').on('click', function() {
  grid.removeWidget($('#weatherDiv').get(0));
})

$('.aqClose').on('click', function() {
  grid.removeWidget($('#aqDiv').get(0));
})

$('.jokeClose').on('click', function() {
  grid.removeWidget($('#jokeDiv').get(0));
})

$('.newsClose').on('click', function() {
  grid.removeWidget($('#newsDiv').get(0));
})

// Get user input from the Modal
function getInput(e) {
  e.preventDefault();
  $('#greeting').html(`Hello, ${$("#userName").val()}`)
}

// Add event listeners to the form to call functions when form is submitted
const form = document.querySelector('#theform');
form.addEventListener('submit', getInput);

// Modal
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the submit button that closes the modal
let submit = document.getElementById("subButton")

// When the user clicks on the button, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on the submit button, close the modal
submit.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}