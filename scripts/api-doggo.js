$(document).on('click', '#doggoButton', async function (e) {
  e.preventDefault();
  let image = $("#doggoDiv").find("img");
  if (image.length === 0) {
    $('#doggo').html(`<img src="images/placeholder.png" id="doggoImage" style="max-height: 200px; max-width: 185px;" alt="Picture of doggo">`)
  }
  axios.get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      $('#doggoImage').attr('src', response.data.message);
      resizeDoggo();
    });
    // debugger;
});

function resizeDoggo() {
  var contentHeight = $("#doggoDiv").find(".bor").outerHeight();
  $("#doggoDiv").height(contentHeight);
}