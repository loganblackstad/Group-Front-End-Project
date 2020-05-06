
function saveToWidgetlist(widget) {
  let widgetListJSON = localStorage.getItem('widgetList');
  let widgetList = JSON.parse(widgetListJSON);
  if (widgetList == null) {
    widgetList = []
  }
  widgetList.push(widget);
  widgetListJSON = JSON.stringify(widgetList);
  localStorage.setItem('widgetList', widgetListJSON);
}

$('#addQuotes').on('click', function() {
  // e.preventDefault();
  console.log("hello world")
  let widget = {
    "title": "Quote",
  };
  let newWidget = renderWidgets(widget);
  grid.addWidget(newWidget)
});

function renderWidgets(widget) {
    let renderedWidget = (`
      <div class="grid-stack-item border border-dark" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2" id="quoteDiv">
        <div class="grid-stack-item-content">
          <div class="d-flex"><p>${widget.title}</p><span class="ml-auto quoteClose">✖️</span></div>
          <div id="bored" class="card mt-1"></div>
          <div><button class="d-flex btn btn-dark mt-3" id="boredButton">My new widget</button></div>
        </div>
      </div>
    `);
    return renderedWidget;
};