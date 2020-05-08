$(document).on('click', '#boredButton', function (e) {
  e.preventDefault();
  axios.get("https://www.boredapi.com/api/activity/")
    .then(response => {
      $('#bored').html(response.data.activity + "!");
    })
    .then(function () {
      var dragContainerHeight = $("#boredDiv").outerHeight();
      var contentHeight = $("#boredDiv").find(".bor").outerHeight();
      console.log("container: " + dragContainerHeight);
      console.log("content: " + contentHeight);
    })
    .then(function () {
      $("#boredDiv").height(contentHeight);
    });
});
