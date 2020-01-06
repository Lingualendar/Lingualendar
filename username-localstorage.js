// Sets a username and stores it in localStorage

try {
  // Check if local storage is enabled
  if (window.localStorage) {
    // Color Array
    var colorArray = ["Blue", "Red", "Green", "Yellow", "Orange", "Purple"];

    var emotionArray = [
      "Ticklish",
      "Thoughtful",
      "Loving",
      "Happy",
      "Playful",
      "Dancing",
      "Singing",
      "Greatful",
      "Humorous",
      "Forgiving",
      "Brave",
      "Curious"
    ];

    var animalArray = [
      "Elephant",
      "Rhino",
      "Hippopotamus",
      "Dragonfly",
      "Owl",
      "Walrus",
      "Grasshopper",
      "Cheetah",
      "Dolphin",
      "Donkey",
      "Rooster",
      "Raven"
    ];

    var locationArray = [
      "Sirius",
      "Canopus",
      "Arcturus",
      "Rigil Kentaurus",
      "Vega",
      "Capella",
      "Rigel",
      "Procyon",
      "Achernar",
      "Betelgeuse",
      "Hadar",
      "Altair"
    ];

    // Assign random values from arrays
    var randomEmotion =
      emotionArray[Math.floor(Math.random() * emotionArray.length)];
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    var randomAnimal =
      animalArray[Math.floor(Math.random() * animalArray.length)];
    var randomLocation =
      locationArray[Math.floor(Math.random() * locationArray.length)];

    // Concatenate random values from arrays
    var uniqueUserName = randomEmotion.concat(
      " " + randomColor,
      " " + randomAnimal
    );
    var welcomeMessage =
      "Welcome visitor, you shall be known as the: " +
      " " +
      uniqueUserName +
      " " +
      " from " +
      " " +
      randomLocation;

    // Check if localStorage has existing visitor-count
    if (!localStorage.getItem("visitor-count")) {
      populateLocalStorage();
    } else {
      setVisitorCount();
    }

function populateLocalStorage() {
      // Date object
      var localStorageTime = new Date();
      var pageCountTime = localStorageTime.getTime();
      localStorage.setItem("local-time", pageCountTime);
      localStorage.setItem("user-name", uniqueUserName);
      localStorage.setItem("user-location", randomLocation);
      document.getElementById("local-storage").textContent = welcomeMessage;
      localStorage.setItem("visitor-count", "1");
      var currentPageView = localStorage.getItem("visitor-count");
    }

function setVisitorCount() {
      // Date object
      var localStorageTime = new Date();
      var pageCountTime = localStorageTime.getTime();
      var lastPageTime = localStorage.getItem("local-time");

      localStorage.setItem("local-time", pageCountTime);

      //View counter
      var currentPageView = localStorage.getItem("visitor-count");
      var addAPageView = ++currentPageView;
      localStorage.setItem("visitor-count", currentPageView);

      var secondsSinceVisit = (pageCountTime - lastPageTime) / 1000;
      var minutesSinceVisit = Number.parseFloat(secondsSinceVisit / 60).toFixed(
        2
      );

      document.getElementById("local-storage").textContent =
        "Welcome back " +
        localStorage.getItem("user-name") +
        ". This is visit number: " +
        currentPageView +
        ". It has been " +
        (pageCountTime - lastPageTime) / 1000 +
        " seconds since lasting visit us from " +
        localStorage.getItem("user-location") +
        "  " +
        minutesSinceVisit +
        " minutes ";
    }
  } else {
    document.getElementById("local-storage").textContent =
      "Local Storage: Disabled";
  }
} catch (e) {
  // Statement to for errors
  document.getElementById("local-storage").textContent =
    "Local storage is disabled.";
}
