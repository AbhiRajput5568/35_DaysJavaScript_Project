const questions = [
  {
    question:
      "What is the output of the following code? console.log(typeof null);",
    answear: [
      {
        text: "null",
        correct: false,
      },
      {
        text: "object",
        correct: true,
      },
      {
        text: "undefined",
        correct: false,
      },
      {
        text: "string",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which method is used to add one or more elements to the end of an array and return the new length of the array?",
    answear: [
      {
        text: "pop()",
        correct: false,
      },
      {
        text: "push()",
        correct: true,
      },
      {
        text: "shift()",
        correct: false,
      },
      {
        text: "unshift()",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the Array.prototype.reduce() method?",
    answear: [
      {
        text: "To filter elements from an array",
        correct: false,
      },
      {
        text: "To apply a function against an accumulator and each element in the array to reduce it to a single value",
        correct: true,
      },
      {
        text: "To map each element to a new array",
        correct: false,
      },
      {
        text: "To sort the elements of an array",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is true about the let keyword?",
    answear: [
      {
        text: "let allows variables to be declared without initialization",
        correct: false,
      },
      {
        text: "Variables declared with let are function-scoped",
        correct: false,
      },
      {
        text: "Variables declared with let are block-scoped",
        correct: true,
      },
      {
        text: "let is used to declare constants",
        correct: false,
      },
    ],
  },
  {
    question:
      "What will be the output of the following code? for (var i = 0; i < 3; i++) { setTimeout(function() { console.log(i); }, 1000); }",
    answear: [
      {
        text: "0 1 2",
        correct: false,
      },
      {
        text: "3 3 3",
        correct: true,
      },
      {
        text: "undefined undefined undefined",
        correct: false,
      },
      {
        text: "0 1 2 3",
        correct: false,
      },
    ],
  },
];
let questionElement = document.querySelector(".question");
let answearElement = document.querySelector(".ans");
let nextBtn = document.querySelector(".next");
let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  currentScore = 0;
  nextBtn.innerHTML = "Next";
  showData();
}
function showData() {
  resetData();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.answear.forEach(function (e) {
    let buttton = document.createElement("button");
    buttton.innerHTML = e.text;
    buttton.classList.add("btn");
    answearElement.appendChild(buttton);
    if (e.correct) {
      buttton.dataset.correct = e.correct;
      // currentScore++;
    }
    buttton.addEventListener("click", selectAnswear);
  });
}
function resetData() {
  nextBtn.style.display = "none";
  while (answearElement.firstChild) {
    answearElement.removeChild(answearElement.firstChild);
  }
}
function selectAnswear(e) {
  let selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answearElement.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
      currentScore++;
    }
    btn.disabled = true;
  });
  nextBtn.style.display = "block";
}
function showScore() {
  resetData();
  questionElement.innerHTML = `You scored ${currentScore} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}
function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showData();
  } else {
    showScore();
  }
}
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});
startQuiz();
