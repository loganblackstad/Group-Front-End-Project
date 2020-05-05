$('#quoteButton').on('click' , function(e) {
  e.preventDefault();
  axios.get("https://favqs.com/api/qotd")
    .then(response => {
      $('#quote').html((`
        <div>${response.data.quote.body}</div>
        <div>-${response.data.quote.author}</div>
      `));
  });
});