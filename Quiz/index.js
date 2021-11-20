/* All answer options */
const options1 = document.querySelector('.option1'),
      options2 = document.querySelector('.option2'),
      options3 = document.querySelector('.option3'),
      options4 = document.querySelector('.option4');

/* All our answers */
const optionElements = document.querySelectorAll('.option');

/* Our question */
const question = document.getElementById('question');

const numberOfQuestion = document.getElementById('number-of-question'), //question number
      numberOfAllQuestions = document.getElementById('number-of-all-question'); //number of all questions

let indexOfQuestion, //current question index
    indexOfPage = 0; //page index

const btnNext = document.getElementById('btn-next'); // next button
const answersTracker = document.getElementById('answers-tracker'); // tracker wrapper

const modalWindow = document.querySelector('.quiz-over-modal'); // modal results window

const correctAnswer = document.getElementById('correct-answer'), //number of correct answers
      numberOfAllQuestions2 = document.getElementById('number-of-all-question-2'), //number of all questions in modal window
      btnTryAgain = document.getElementById('btn-try-again'); // button "start the quiz again"

let score = 0;

const questions = [
    {
        question: 'JavaScript File Has An Extension of:',
        options: [
            '.Java',
            '.js',
            '.javascript',
            '.xml',
        ],
        rightAnswer: 1
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        options: [
            'onclick',
            'onmouseover',
            'onmouseclick',
            'onchange',
        ],
        rightAnswer: 0
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if i = 5 then',
            'if (i == 5)',
        ],
        rightAnswer: 3
    }
];

numberOfAllQuestions.innerHTML = questions.length; //displaying the number of questions

const load = () =>{
    question.innerHTML = questions[indexOfQuestion].question; //display questions

    //mapping answers
    options1.innerHTML = questions[indexOfQuestion].options[0];
    options2.innerHTML = questions[indexOfQuestion].options[1];
    options3.innerHTML = questions[indexOfQuestion].options[2];
    options4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; //setting the current page number
    indexOfPage++; //increasing the page index
};

let completedAnswers = []; //array of already asked quesctions

const randomQuestion = () =>{
    let randomNumber = Math.floor(Math.random()*questions.length);
    let hitDuplicate = false; //anchor for checking the same questions

    if(indexOfPage == questions.length){
        quizOver();
    }else{
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item =>{
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion();
            }else{
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    }else{
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disableOptions();
};

for(option of optionElements){
    option.addEventListener('click', e => checkAnswer(e));
};

const disableOptions = () =>{
    for(item of optionElements){
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('correct');
        }
    }
};

const enableOptions = () =>{
    for(item of optionElements){
        item.classList.remove('disabled','correct','wrong');
    }
};

const answerTracker = () =>{
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status =>{
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () =>{
    if(!optionElements[0].classList.contains('disabled')){
        alert('You must choose one of the answer options!');
    }else{
        randomQuestion();
        enableOptions();
    }
};

btnNext.addEventListener('click', () =>{
    validate();
});

const quizOver = () =>{
    modalWindow.classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () =>{
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener('load', ()=>{
    randomQuestion();
    answerTracker();
    updateAnswerTracker();
});
