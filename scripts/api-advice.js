$(document).on('click', '#adviceButton', function(e) {
  e.preventDefault();
  axios.get("https://api.adviceslip.com/advice")
    .then(response => {
      console.log(response)
      $('#advice').html(response.data.slip.advice);
  });
});