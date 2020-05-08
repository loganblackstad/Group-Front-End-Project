$(document).on('click', '#adviceButton', function (e) {
  e.preventDefault();
  axios.get("https://api.adviceslip.com/advice")
    .then(response => {
      $('#advice').html(response.data.slip.advice);
      var contentHeight = $("#adviceDiv").find(".bor").outerHeight();
      $("#adviceDiv").height(contentHeight);
    });
});