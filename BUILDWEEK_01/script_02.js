const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  
  // Dichiarazione delle variabili
let button = document.getElementsByTagName("button");
let variableQuestion = document.getElementById("quiz-question");
let questBtn = document.querySelectorAll(".selectBtn");

let indexQuestion = 0;
let punteggio = 0;
let timer = 30;
let intervalId;
let elencoRisposte = [];

function question(index) {
  // Funzione per la generazione della domanda
  if (variableQuestion) {
    variableQuestion.innerHTML = `${questions[index].question}`;
  } else {
    console.log("Elemento domanda non trovato");
  }
}

function answer(index) {
  // Funzione per la generazione delle risposte randomizzando la posizione della risposta corretta
  let answers = [questions[index].correct_answer, ...questions[index].incorrect_answers];
  answers = answers.sort(() => Math.random() - 0.5); // Randomizza le risposte

  answers.forEach((answer, i) => {
    if (button[i]) {
      button[i].innerHTML = answer;
      button[i].onclick = () => {
        elencoRisposte[indexQuestion] = answer; // Salva la risposta selezionata
        timer = 30; // Reset del timer
        nextQuestion();
      };
    }
  });
}

function nextQuestion() {
  indexQuestion++;
  if (indexQuestion < questions.length) {
    question(indexQuestion);
    answer(indexQuestion);
    document.querySelector(".questionNumber").innerHTML = `Domanda ${indexQuestion + 1} di ${questions.length}`;
    startTimer();
  } else {
    resultPage();
  }
}

function startTimer() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  
  const updateDisplay = () => {
    const offset = 450 - (timer / 30) * 450;
    const secondsElement = document.querySelector('#seconds');
    if (secondsElement) {
      secondsElement.style.strokeDashoffset = offset;
      document.querySelector(".seconds").innerHTML = timer < 10 ? `0${timer}` : timer;
    }
  };

  intervalId = setInterval(() => {
    timer--;
    if (timer < 0) {
      clearInterval(intervalId);
      nextQuestion();
    }
    updateDisplay();
  }, 1000);
}

function resultPage() {
  // Calcola il punteggio finale
  punteggio = elencoRisposte.reduce((score, answer, index) => {
    return answer === questions[index].correct_answer ? score + 1 : score;
  }, 0);

  // Salva il punteggio e reindirizza alla pagina dei risultati
  localStorage.setItem("punteggioFinale", punteggio);
  window.location.href = "index-results.html";
}

// Inizializza il quiz
question(indexQuestion);
answer(indexQuestion);
startTimer();
