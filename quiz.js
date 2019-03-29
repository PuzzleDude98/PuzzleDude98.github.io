(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Where was Leonardo Born?",
      answers: {
        a: "The United States of America",
        b: "Italy",
        c: "France",
        d: "Mars"
      },
      correctAnswer: "b"
    },
    {
      question: "Who was he assistant and apprentice to?",
      answers: {
        a: "Andrea del Verrocchio",
        b: "Adalberto Cipriano",
        c: "Michalangelo",
        d: "John Cena"
      },
      correctAnswer: "a"
    },
    {
      question: "Whitch of the following did he NOT help invent(or at least this site did not mention)?",
      answers: {
        a: "Bycicles",
        b: "Helecopters",
        c: "Hang Gliders",
        d: "Machine Guns"
      },
      correctAnswer: "c"
    },
   {
      question: "What is the best site about leonardo da vinci?",
      answers: {
        a: "Wikipedia",
        b: "PuzzleDude98.github.io",
        c: "Biography.com",
        d: "Britannica"
      },
      correctAnswer: "b"
    },

    {
      question: "Where did I think he got his ideas?",
      answers: {
        a: "Just saw how things worked",
        b: "Sold ideas",
        c: "Aliens",
        d: "Childhood experiences"
      },
      correctAnswer: "a"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
