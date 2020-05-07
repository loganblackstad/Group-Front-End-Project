$(document).on('click', '#jokeButton', function (e) {
  e.preventDefault();
  axios.get("https://sv443.net/jokeapi/v2/joke/Any?type=single")
    .then(response => {
      $('#joke').html(response.data.joke);
    });
});