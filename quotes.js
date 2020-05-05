$('#quoteButton').on('click' , function(e) {
  e.preventDefault();
  axios.get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    .then(response => {
      console.log(response)
      $('#quote').html(response.data.quote.quoteText);
  });
});