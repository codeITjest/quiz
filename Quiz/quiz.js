// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Hyperlinks and Text Markup Language",
        choiceB : "Hypertext Markup Language",
        choiceC : "Home Tool markup Language",
        correct : "B"
    },{
        question : "Choose the correct HTML element for the largest heading:",
        imgSrc : "img/html.png",
        choiceA : "h1",
        choiceB : "head",
        choiceC : "heading",
        correct : "A"
    },{
        question : "What is the correct HTML element for inserting a line break?",
        imgSrc : "img/html.png",
        choiceA : "br",
        choiceB : "lb",
        choiceC : "break",
        correct : "A"
    },{
        question : "What character is used to indicate an end tag?",
        imgSrc : "img/html.png",
        choiceA : "/",
        choiceB : "<",
        choiceC : "*",
        correct : "A"
    },{
        question : "HTML tag should enclose in <>",
        imgSrc : "img/html.png",
        choiceA : "TRUE",
        choiceB : "FALSE",
        choiceC : "",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Cascading System Sheet",
        choiceB : "Capstone Style System",
        choiceC : "Cascading Style Sheet",
        correct : "C"
    },{
        question : "Which HTML attribute is used to define styles?",
        imgSrc : "img/css.png",
        choiceA : "font",
        choiceB : "style",
        choiceC : "class",
        correct : "B"
    },{
        question : "How do you insert a comment in a CSS file?",
        imgSrc : "img/css.png",
        choiceA : "//this is a comment",
        choiceB : "//this is a comment//",
        choiceC : "/* this is a comment */",
        correct : "C"
    },{
        question : "Which property is used to change the background color?",
        imgSrc : "img/css.png",
        choiceA : "bgcolor",
        choiceB : "background-color",
        choiceC : "color",
        correct : "B"
    },{
        question : "How do you select an element with id 'demo'",
        imgSrc : "img/css.png",
        choiceA : "#demo",
        choiceB : "demo",
        choiceC : ".demo",
        correct : "A"
    },{
        question : "How do you select an element with class 'test'",
        imgSrc : "img/css.png",
        choiceA : "#test",
        choiceB : "test",
        choiceC : ".test",
        correct : "C"
    }, {
        question : "How do you insert a link in HTML?",
        imgSrc : "img/html.png",
        choiceA : "a href=",
        choiceB : "link href=",
        choiceC : "a link=",
        correct : "A"
    } , {
        question : "How do you insert an image is HTML?",
        imgSrc : "img/html.png",
        choiceA : "image src=",
        choiceB : "img href=",
        choiceC : "img src=",
        correct : "C"
    }, {
        question : "How do you insert a border style in CSS",
        imgSrc : "img/css.png",
        choiceA : "style",
        choiceB : "border-style",
        choiceC : "bstyle",
        correct : "B"
    }, {
        question : "How do you specify the color of the background in CSS",
        imgSrc : "img/css.png",
        choiceA : "color-background",
        choiceB : "background-color",
        choiceC : "none of the above",
        correct : "B"
    }, {
        question : "How do you insert the image background in CSS",
        imgSrc : "img/css.png",
        choiceA : "background-image: url();",
        choiceB : "background-image: src=",
        choiceC : "img: url();",
        correct : "A"
    }, {
        question : "How do you specify the background position?",
        imgSrc : "img/css.png",
        choiceA : "position : scroll",
        choiceB : "background-attachment: scroll;",
        choiceC : "background-position: scroll;",
        correct : "B"
    }, {
        question : "How do you specify the text alignment in CSS?",
        imgSrc : "img/css.png",
        choiceA : "text-align",
        choiceB : "text-decoration",
        choiceC : ".text-transform",
        correct : "A"
    }, {
        question : "How do you specify uppercase and lowercase letters in a text in CSS",
        imgSrc : "img/css.png",
        choiceA : "text-align",
        choiceB : "text-decoration",
        choiceC : "text-transform",
        correct : "C"
    }, {
        question : "How do you specify the decoration of the text in CSS",
        imgSrc : "img/css.png",
        choiceA : "text-align",
        choiceB : "text-decoration",
        choiceC : ".text-transform",
        correct : "B"
    }  /*,{
        question : "How do you write 'Hello World' in an alert box?",
        imgSrc : "img/js.png",
        choiceA : "alert('Hello World');",
        choiceB : "alertBox('Hello World');",
        choiceC : "msg('Hello World');",
        correct : "A"
    },{
        question : "How do you create a function in JavaScript?",
        imgSrc : "img/js.png",
        choiceA : "function = myFunction()",
        choiceB : "function myFunction()",
        choiceC : "function:myFunction()",
        correct : "B"
    },{
        question : "How does a FOR loop start?",
        imgSrc : "img/js.png",
        choiceA : "for(i=0; <=5; i++)",
        choiceB : "for(i=0; <=5)",
        choiceC : "for(i <= 5; i++)",
        correct : "A"
    },{
        question : "WHow do you declare a javaScript variable?",
        imgSrc : "img/js.png",
        choiceA : "variable carName",
        choiceB : "v carName",
        choiceC : "var carName",
        correct : "C"
    } */
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    /*
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.jpg" :
              (scorePerCent >= 60) ? "img/4.jpg" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.jpg" :
              "img/1.jpg";
    
    scoreDiv.innerHTML = "<img src="+ img +">"; */
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















