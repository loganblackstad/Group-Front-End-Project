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

$('#addWeather').on('click', function() {
  let weatherWidget = {
    "title": "Daily Forecast.",
    "divID": "weatherDiv",
    "cardID": "weather",
    "class": "weatherClose",
  };
  let newWeatherWidget = renderNoButton(weatherWidget);
  grid.addWidget(newWeatherWidget)
});

$('#addNews').on('click', function() {
  let newsWidget = {
    "title": "News.",
    "divID": "newsDiv",
    "cardID": "card-news",
    "class": "newsClose",
  };
  let newNewsWidget = renderNoButton(newsWidget);
  grid.addWidget(newNewsWidget)
});

$('#addAQ').on('click', function() {
  let newsWidget = {
    "title": "Local Air Quality.",
    "divID": "aqDiv",
    "cardID": "airQuality",
    "class": "aqClose",
  };
  let newNewsWidget = renderNoButton(newsWidget);
  grid.addWidget(newNewsWidget)
});