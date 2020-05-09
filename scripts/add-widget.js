$("#addQuotes").on("click", function () {
  var element = document.getElementById("quoteDiv"); 
  if (!element) { 
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
    alert("Quotes Widget already exists");
  };
});

$("#addBored").on("click", function () {
  var element = document.getElementById("boredDiv");
  if (!element) { 
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
    alert("Bored Widget already exists!");
  };
});

$("#addYeezy").on("click", function () {
  var element = document.getElementById("yeezyDiv");
  if (!element) { 
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
  alert("Yeezy Widget already exists!");
  };
});

$("#addJoke").on("click", function () {
  var element = document.getElementById("jokeDiv");
  if (!element) { 
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
    alert("Jokes Widget already exists!");
    };
});

$("#addAdvice").on("click", function () {
  var element = document.getElementById("adviceDiv");
  if (!element) { 
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
    alert("Advice Widget already exists!");
    };
});

$("#addNews").on("click", function () {
  var element = document.getElementById("newsDiv");
  if (!element) { 
    renderNews();
  } else {
    alert("News Widget already exists!");
    };
});

$("#addCorona").on("click", function () {
  var element = document.getElementById("coronaDiv");
  if (!element) { 
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
    alert("CoronaVirus Widget already exists!");
    };
});

$("#addDoggo").on("click", function () {
  var element = document.getElementById("doggoDiv"); 
  if (!element) { 
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
    alert("Doggo Widget already exists!");
  };
});

$("#addCats").on("click", function () {
  var element = document.getElementById("catsDiv"); 
  if (!element) { 
    let catWidget = {
      title: "Tell me all about cats!",
      divID: "catDiv",
      cardID: "cat",
      buttonID: "catButton",
      class: "catClose",
      buttonText: "😸",
    };
    let newCatWidget = renderWidgets(catWidget);
    grid.addWidget(newCatWidget);
  } else {
    alert("Cat Widget already exists!");
  };
});