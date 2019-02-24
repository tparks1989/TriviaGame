var questions = [
  {
    ques: "Who has more MVP's?",
    ans: ["Jordan", "Lebron", "Kobe", "Kareem Abdul Jabbar"],
    name: "mvp",
    correct: "Kareem Abdul Jabbar",
    divClass: ".mvp"
  },
  {
    ques: "Which team has the most Super Bowl's?",
    ans: [
      "Philadelphia Eagles",
      "Dallas Cowboys",
      "New England Patriots",
      "New Orleans Saints"
    ],
    name: "superBowls",
    correct: "New England Patriots",
    divClass: ".superBowls"
  },
  {
    ques: "Which player was a number one overall pick?",
    ans: ["Kobe", "Steph Curry", "KD", "Lebron"],
    name: "firstPick",
    correct: "Lebron",
    divClass: ".firstPick"
  },
  {
    ques: "Which team has the most NBA championships?",
    ans: ["Lakers", "Knicks", "Warriors", "Clippers"],
    name: "championships",
    correct: "Lakers",
    divClass: ".championships"
  },
  {
    ques: "Which player has the most career passing yards?",
    ans: ["Tom Brady", "Brett Favre", "Peyton Manning", "Drew Brees"],
    name: "passing",
    correct: "Drew Brees",
    divClass: ".passing"
  },
  {
    ques: "Which player has the most career points scored?",
    ans: ["The Mailman", "Kobe", "Jordan", "Lebron"],
    name: "points",
    correct: "The Mailman",
    divClass: ".points"
  },
  {
    ques: "Which boxer has the best record?",
    ans: ["Mike Tyson", "Floyd Mayweather", "Muhammed Ali", "Roy Jones Jr"],
    name: "boxing",
    correct: "Floyd Mayweather",
    divClass: ".boxing"
  },
  {
    ques: "Which player has the most home runs?",
    ans: ["Barry Bonds", "Ken Griffey Jr.", "Alex Rodriguez", "Albert Pujols"],
    name: "homeRuns",
    correct: "Barry Bonds",
    divClass: ".homeRuns"
  },
  {
    ques: "Which player was given the first signature shoe with Nike?",
    ans: ["Kyrie", "Jordan", "Lebron", "Penny"],
    name: "shoe",
    correct: "Jordan",
    divClass: ".shoe"
  },
  {
    ques: "Which player has the most career rushing yards?",
    ans: ["Adrian Peterson", "Marshall Faulk", "Barry Sanders", "Tiki Barber"],
    name: "rushing",
    correct: "Barry Sanders",
    divClass: ".rushing"
  }
];

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on("click", function() {
  $(this)
    .parent()
    .hide();
  $(".container").show();
  countdown(60);
  questionDisplay();
});

var questionDisplay = function() {
  $(".questions :not('#sub-but')").empty();
  for (var j = 0; j < 10; j++) {
    $(".questions").prepend('<div class="' + questions[j].name + '"></div>');
    $(questions[j].divClass).append(
      '<div class ="ques-title">' + questions[j].ques + "</div>"
    );
    // loops through answers for each radio button
    for (var i = 0; i <= 3; i++) {
      $(questions[j].divClass).append(
        '<input type="radio"  name="' +
          questions[j].name +
          '" value="' +
          questions[j].ans[i] +
          '"/><label for="' +
          labels[i] +
          '">' +
          questions[j].ans[i] +
          "</label>"
      );
    }
    $(".questions").prepend("<hr />");
  }
};

var countdown = function(seconds) {
  var timer = setInterval(function() {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);

    if (seconds <= 0) {
      $(".container").fadeOut(500);
      var correctAnswers = 0;
      var wrongAnswers = 0;
      var unAnswered = 0;

      for (var i = 0; i < 10; i++) {
        if (
          $('input:radio[name="' + questions[i].name + '"]:checked').val() ===
          questions[i].correct
        ) {
          correctAnswers++;
          console.log("this is correct! number:" + i);
        } else {
          wrongAnswers++;
          console.log("this is wrong! number:" + i);
        }
      }
      $("#correctTimesUp").append(correctAnswers);
      $("#wrongTimesUp").append(wrongAnswers);
      $("#timesUp")
        .fadeIn(1000)
        .show();

      clearInterval(timer);
      return;
    }
  }, 1000);

  $("#sub-but").on("click", function() {
    clearInterval(timer);
  });
};

var gradeQuiz = $("#sub-but").on("click", function() {
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  for (var i = 0; i < 10; i++) {
    if (
      $('input:radio[name="' + questions[i].name + '"]:checked').val() ===
      questions[i].correct
    ) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
  }

  countdown();
  $(".container").fadeOut(500);
  $("#answerScreen").show();
  $("#correctScreen").append(correctAnswers);
  $("#wrongScreen").append(wrongAnswers);
});
