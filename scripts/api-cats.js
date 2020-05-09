$(document).on('click', '#catButton', function (e) {
  e.preventDefault();
  axios.get(`https://cat-fact.herokuapp.com/facts/random`)
    .then(response => {
      $('#cat').html(response.data.text);
      var contentHeight = $("#catDiv").find(".bor").outerHeight();
      $("#catDiv").height(contentHeight);
    });
});