$(document).on('click', '#boredButton', function(e) {
  e.preventDefault();
  axios.get("https://www.boredapi.com/api/activity/")
    .then(response => {
      $('#bored').html(response.data.activity + "!");
  });
});
