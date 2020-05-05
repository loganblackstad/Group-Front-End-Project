$('#boredButton').on('click' , function(e) {
  e.preventDefault();
  axios.get("https://www.boredapi.com/api/activity/")
    .then(response => {
      console.log(response)
      $('#bored').html(response.data.activity + "!");
  });
});