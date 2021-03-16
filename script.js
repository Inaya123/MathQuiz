const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("The Game Is Started!!");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  //   clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart The Quiz";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  //Question 1
  {
    question: "What is 5500 + 769?",
    answers: [
      { text: "6269", correct: true },
      { text: "5780", correct: false },
      { text: "8095", correct: false },
      { text: "4800", correct: false },
    ],
  },
  //Question 2
  {
    question: "What is 7794 ÷ 45?",
    answers: [
      { text: "170.2", correct: false },
      { text: "173.2", correct: true },
      { text: "160.2", correct: false },
      { text: "185.2", correct: false },
    ],
  },
  //Question 3
  {
    question: "What is 2692 × 57?",
    answers: [
      { text: "199550", correct: false },
      { text: "179368", correct: false },
      { text: "138406", correct: false },
      { text: "153444", correct: true },
    ],
  },
  //Question 4
  {
    question: "What is 6638 - 699?",
    answers: [
      { text: "7000", correct: false },
      { text: "6480", correct: false },
      { text: "5939", correct: true },
      { text: "5582", correct: false },
    ],
  },
  //Question 5
  {
    question: "What is 11834 + 292?",
    answers: [
      { text: "15293", correct: false },
      { text: "23268", correct: false },
      { text: "12126", correct: true },
      { text: "17934", correct: false },
    ],
  },
  //Question 6
  {
    question: "What is 9426 ÷ 30?",
    answers: [
      { text: "314.2", correct: true },
      { text: "592.2", correct: false },
      { text: "430.2", correct: false },
      { text: "698.2", correct: false },
    ],
  },
  //Question 7
  {
    question: "What is 4892 - 3894?",
    answers: [
      { text: "422", correct: false },
      { text: "801", correct: false },
      { text: "681", correct: false },
      { text: "998", correct: true },
    ],
  },
  //Question 8
  {
    question: "What is 3891 × 10?",
    answers: [
      { text: "45528", correct: false },
      { text: "38910", correct: true },
      { text: "39910", correct: false },
      { text: "12190", correct: false },
    ],
  },
  //Question 9
  {
    question: "What is 2230 × 15?",
    answers: [
      { text: "33450", correct: true },
      { text: "85911", correct: false },
      { text: "31610", correct: false },
      { text: "12110", correct: false },
    ],
  },
  //Question 10
  {
    question: "What is 4804 + 328?",
    answers: [
      { text: "6824", correct: false },
      { text: "9146", correct: false },
      { text: "3700", correct: false },
      { text: "5132", correct: true },
    ],
  },
];
