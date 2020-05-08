$("#addQuotes").on("click", function () {
  var element = document.getElementById("quoteDiv"); 
  if (!element) { 
    console.log("add Quotes");
    let quoteWidget = {
      title: "I need some inspiration.",
      divID: "quoteDiv",
      cardID: "quote",
      buttonID: "quoteButton",
      class: "quoteClose",
      buttonText: "Motivational quote",
    };
    let newQuoteWidget = renderWidgets(quoteWidget);
    grid.addWidget(newQuoteWidget);
  } else {
    alert("Widget already exists");
  };
});

$("#addBored").on("click", function () {
  var element = document.getElementById("boredDiv");
  if (!element) { 
    console.log("add Bored");
    let boredWidget = {
      title: "Today is my day off and I am bored.",
      divID: "boredDiv",
      cardID: "bored",
      buttonID: "boredButton",
      class: "boredClose",
      buttonText: "Find an activity",
    };
    let newBoredWidget = renderWidgets(boredWidget);
    grid.addWidget(newBoredWidget);
  } else {
    alert("Widget already exists");
  };
});

$("#addYeezy").on("click", function () {
  var element = document.getElementById("yeezyDiv");
  if (!element) { 
    console.log("add Ye");
    let yeezyWidget = {
      title: "I need Yeezus in my life.",
      divID: "yeezyDiv",
      cardID: "yeezy",
      buttonID: "yeezyButton",
      class: "yeezyClose",
      buttonText: "Give me Kanye",
    };
    let newYeezyWidget = renderWidgets(yeezyWidget);
    grid.addWidget(newYeezyWidget);
  } else {
  alert("Widget already exists");
  };
});

$("#addJoke").on("click", function () {
  var element = document.getElementById("jokeDiv");
  if (!element) { 
    console.log("add Jokes");
    let jokeWidget = {
      title: "I could use a laugh.",
      divID: "jokeDiv",
      cardID: "joke",
      buttonID: "jokeButton",
      class: "jokeClose",
      buttonText: "Tell me a joke",
    };
    let newJokeWidget = renderWidgets(jokeWidget);
    grid.addWidget(newJokeWidget);
  } else {
    alert("Widget already exists");
    };
});

$("#addAdvice").on("click", function () {
  var element = document.getElementById("adviceDiv");
  if (!element) { 
    console.log("add Advice");
    let adviceWidget = {
      title: "I really need some life advice.",
      divID: "adviceDiv",
      cardID: "advice",
      buttonID: "adviceButton",
      class: "adviceClose",
      buttonText: "Advise Me",
    };
    let newAdviceWidget = renderWidgets(adviceWidget);
    grid.addWidget(newAdviceWidget);
  } else {
    alert("Widget already exists");
    };
});

$("#addNews").on("click", function () {
  var element = document.getElementById("newsDiv");
  if (!element) { 
    console.log("add News");
    renderNews();
  } else {
    alert("Widget already exists");
    };
});

// $('#addAQ').on('click', function() {
//   let newsWidget = {
//     "title": "Local Air Quality.",
//     "divID": "aqDiv",
//     "cardID": "airQuality",
//     "class": "aqClose",
//   };
// });

$("#addCorona").on("click", function () {
  var element = document.getElementById("coronaDiv");
  if (!element) { 
    console.log("add Rona");
    axios
      .get("https://disease.sh/v2/countries/United%20States?yesterday=true#")
      .then((response) => {
        let coronaWidget = {
          title: "COVID-19 Daily News",
          divID: "coronaDiv",
          cardID: "corona",
          class: "coronaClose",
          stats: response,
        };
        let newCoronaWidget = renderRona(coronaWidget);
        grid.addWidget(newCoronaWidget);
      });
  } else {
    alert("Widget already exists");
    };
});

$("#addDoggo").on("click", function () {
  var element = document.getElementById("doggoDiv"); 
  if (!element) { 
    console.log("add Doggo");
    let doggoWidget = {
      title: "I want to see some doggos.",
      divID: "doggoDiv",
      cardID: "doggo",
      buttonID: "doggoButton",
      class: "doggoClose",
      buttonText: "Show me Doggo",
    };
    let newDoggoWidget = renderWidgets(doggoWidget);
    grid.addWidget(newDoggoWidget);
  } else {
    alert("Widget already exists");
  };
});