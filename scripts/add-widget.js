$('#addQuotes').on('click', function() {
  let quoteWidget = {
    "title": "I need some inspiration.",
    "divID": "quoteDiv",
    "cardID": "quote",
    "buttonID": "quoteButton",
    "class": "quoteClose",
    "buttonText": "Motivational quote",
  };
  let newQuoteWidget = renderWidgets(quoteWidget);
  grid.addWidget(newQuoteWidget)
});

$('#addBored').on('click', function() {
  let boredWidget = {
    "title": "Today is my day off and I am bored.",
    "divID": "boredDiv",
    "cardID": "bored",
    "buttonID": "boredButton",
    "class": "boredClose",
    "buttonText": "Find an activity",
  };
  let newBoredWidget = renderWidgets(boredWidget);
  grid.addWidget(newBoredWidget)
});

$('#addYeezy').on('click', function() {
  let yeezyWidget = {
    "title": "I need Yeezus in my life.",
    "divID": "yeezyDiv",
    "cardID": "yeezy",
    "buttonID": "yeezyButton",
    "class": "yeezyClose",
    "buttonText": "Give me Kanye",
  };
  let newYeezyWidget = renderWidgets(yeezyWidget);
  grid.addWidget(newYeezyWidget)
});

$('#addJoke').on('click', function() {
  let jokeWidget = {
    "title": "I could use a laugh.",
    "divID": "jokeDiv",
    "cardID": "joke",
    "buttonID": "jokeButton",
    "class": "jokeClose",
    "buttonText": "Tell me a joke",
  };
  let newJokeWidget = renderWidgets(jokeWidget);
  grid.addWidget(newJokeWidget)
});

$('#addAdvice').on('click', function() {
  let adviceWidget = {
    "title": "I really need some life advice.",
    "divID": "adviceDiv",
    "cardID": "advice",
    "buttonID": "adviceButton",
    "class": "adviceClose",
    "buttonText": "Advise Me",
  };
  let newAdviceWidget = renderWidgets(adviceWidget);
  grid.addWidget(newAdviceWidget)
});

$('#addNews').on('click', function() {
  renderNews();
});

// $('#addAQ').on('click', function() {
//   let newsWidget = {
//     "title": "Local Air Quality.",
//     "divID": "aqDiv",
//     "cardID": "airQuality",
//     "class": "aqClose",
//   };
// });

$('#addCorona').on('click', function() {
  axios.get("https://disease.sh/v2/countries/United%20States?yesterday=true#")
  .then(response => {
    let coronaWidget = {
      "title": "COVID-19 Daily News",
      "divID": "coronaDiv",
      "cardID": "corona",
      "class": "coronaClose",
      "stats": response
    };
    let newCoronaWidget = renderRona(coronaWidget);
    grid.addWidget(newCoronaWidget)
  });
});