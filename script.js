var questionBank = [
    "What is the world's most popular search engine?",
    "What famous British computer scientist helped to decode encrypted German messages during WWII?",
    "'And, Or, Not' are examples of operators in what kind of logic?"
];

var firstQuestionOptions = [
    "Google",
    "Bing",
    "AltaVista",
    "Ask Jeeves"
];

var secondQuestionOptions = [
    "Alan Turing",
    "Alan Greenspan",
    "Alan Alda",
    "Helena Bonham Carter"
];

var thirdQuestionOptions = [
    "Boolean Logic",
    "Coolean Logic",
    "I Pity the Foolean Logic",
    "Logic, famous rapper"
];

var questionOptionsBank = [
    firstQuestionOptions,
    secondQuestionOptions,
    thirdQuestionOptions
];

var startQuiz = document.querySelector("#start_quiz");

function rightChoiceTwo() {
    var initials = prompt("Please enter your initials to save your score.");
    document.getElementById("head").innerHTML = "Quiz Completed";
    document.getElementById("question_text").innerHTML = "Your Score Is: 2" + " " + initials.toString();
    var answerChoices = document.getElementById("answer_button_set");
    answerChoices.innerHTML = "";
    var displayIncorrectChoice = document.getElementById("incorrect_choice_area");
    displayIncorrectChoice.innerHTML = "";

}

function rightChoice() {
    var answerChoices = document.getElementById("answer_button_set");
    answerChoices.innerHTML = "";
    var incorrectText = document.getElementById("incorrect_choice_area");
    incorrectText.innerHTML = " ";
    document.getElementById("question_text").innerHTML = questionBank[1]
    document.getElementById("head").innerHTML = "Question 2";

    var answerButtonSet = document.getElementById('answer_button_set');

    var i;
    for (i = 0; i < 4; i++) {
        var questionOption = document.createElement("button");
        questionOption.type = "button";
        questionOption.innerHTML = secondQuestionOptions[i];
        questionOption.className = "btn";
        if (i == 0) {
            questionOption.id = "correct";
        }
        else {
            questionOption.id = "incorrect" + i.toString();
        }
        answerButtonSet.appendChild(questionOption);
    }

    var correctAnswer = document.getElementById("correct");
    var incorrectAnswer1 = document.getElementById("incorrect1");
    var incorrectAnswer2 = document.getElementById("incorrect2");
    var incorrectAnswer3 = document.getElementById("incorrect3");

    correctAnswer.addEventListener('click',rightChoiceTwo);
    incorrectAnswer1.addEventListener('click',wrongChoice);
    incorrectAnswer2.addEventListener('click',wrongChoice);
    incorrectAnswer3.addEventListener('click',wrongChoice);

}

function wrongChoice() {
    var displayIncorrectChoice = document.getElementById("incorrect_choice_area");
    displayIncorrectChoice.innerHTML = "Incorrect Answer";
}

function nextQuestion() {
    var startButton = document.getElementById("start_quiz");
    startButton.remove();

    document.getElementById("head").innerHTML = "Question 1";
    document.getElementById("question_text").innerHTML = "What is the world's most popular search engine?";

    var answerButtonSet = document.getElementById('answer_button_set');

    var i;
    for (i = 0; i < 4; i++) {
        var questionOption = document.createElement("button");
        questionOption.type = "button";
        questionOption.innerHTML = firstQuestionOptions[i];
        questionOption.className = "btn";
        if (i == 0) {
            questionOption.id = "correct";
        }
        else {
            questionOption.id = "incorrect" + i.toString();
        }
        answerButtonSet.appendChild(questionOption);
    }
    
    var correctAnswer = document.getElementById("correct");
    var incorrectAnswer1 = document.getElementById("incorrect1");
    var incorrectAnswer2 = document.getElementById("incorrect2");
    var incorrectAnswer3 = document.getElementById("incorrect3");

    correctAnswer.addEventListener('click',rightChoice);
    incorrectAnswer1.addEventListener('click',wrongChoice);
    incorrectAnswer2.addEventListener('click',wrongChoice);
    incorrectAnswer3.addEventListener('click',wrongChoice);

}



startQuiz.addEventListener('click',nextQuestion);

