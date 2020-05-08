$(document).on("click", "#yeezyButton", function (e) {
  e.preventDefault();
  axios.get("https://api.kanye.rest?format=text").then((response) => {
    $("#yeezy").html(response.data);
    var contentHeight = $("#yeezyDiv").find(".bor").outerHeight();
    $("#yeezyDiv").height(contentHeight);
  });
});
