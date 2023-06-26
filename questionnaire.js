// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;

    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
        // If you add more choices and outcomes, you must add another if statement below.
      }
    }

    // Find out which choice got the highest score.
    // If you add more choices and outcomes, you must add the variable here.
    var maxscore = Math.max(c1score,c2score,c3score,c4score);

    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You are a Zinnia! You are friendly and have the most comfort being around people. You like to socialize and also have great will power. When faced with a problem you will create a game plan of how you can past the situation. ";
    }
    if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You are a Lilac! You have a more reserved personality and enjoy the company of yourself most days. Being alone is your strong suit as you are a very independent person. You are also a bit more sensitive but greatly intune with your emotions.";
    }
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You are a Rose! You are what they call an adrenaline-junkie. You seek and crave adventure! You also like to keep busy by going to the gym and welll known for being a huge optimist. You are also very bold and a trendsetter like quality about you. ";
    }
    if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You are a Daisy! You are very simple and humble. You are very sensitive at times and you are unsure at times. You are still a bit immature but it's okay.";
    }
    // If you add more choices, you must add another response below.
  }

  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }
