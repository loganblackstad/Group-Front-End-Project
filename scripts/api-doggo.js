$(document).on('click', '#doggoButton', async function (e) {
  e.preventDefault();
  axios.get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      $('#doggo').html(`<img src=${response.data.message} style="max-height: 200px" style="max-width: 185px" alt="Picture of doggo">`);
    });
    var contentHeight = $("#doggoDiv").find(".bor").outerHeight();
    $("#doggoDiv").height(contentHeight);
});