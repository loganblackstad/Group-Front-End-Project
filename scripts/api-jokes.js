$('#jokeButton').on('click' , function(e) {
  e.preventDefault();
  axios.get("https://sv443.net/jokeapi/v2/joke/Any?type=single")
    .then(response => {
      console.log(response)
      $('#joke').html(response.data.joke);
  });
});