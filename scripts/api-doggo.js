$(document).on('click', '#doggoButton', async function (e) {
  e.preventDefault();
  let image = $("#doggoDiv").find("img");
  if (image.length === 0) {
    $('#doggo').html(`<img src="https://picsum.photos/200/185" id="doggoImage" style="max-height: 200px; max-width: 185px;" alt="Picture of doggo">`)
  }
  axios.get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      $('#doggoImage').attr('src', response.data.message);
    });
    // debugger;
    resizeDoggo();
});

function resizeDoggo() {
  var contentHeight = $("#doggoDiv").find(".bor").outerHeight();
  $("#doggoDiv").height(contentHeight);
}