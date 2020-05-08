$(document).on('click', '#jokeButton', function (e) {
  e.preventDefault();
  axios.get("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single")
    .then(response => {
      $('#joke').html(response.data.joke);
    })
    .then(function () {
      var dragContainerHeight = $("#jokeDiv").outerHeight();
      var contentHeight = $("#jokeDiv").find(".bor").outerHeight();
      console.log("container: " + dragContainerHeight);
      console.log("content: " + contentHeight);
    })
    .then(function () {
      $("#jokeDiv").height(contentHeight);
    });
});