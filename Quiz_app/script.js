const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Transfer Machine Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to add JavaScript in HTML?",
        options: ["<script>", "<js>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Styling Syntax"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#"],
        answer: "//"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["let", "dim", "varr"],
        answer: "let"
    },
    {
        question: "What is the output of 2 + '2' in JavaScript?",
        options: ["22", "4", "NaN"],
        answer: "22"
    },
    {
        question: "Which method is used to print in the console?",
        options: ["print()", "log()", "console.log()"],
        answer: "console.log()"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Mode", "Design Object Manager"],
        answer: "Document Object Model"
    },
    {
        question: "Which method adds an item to an array?",
        options: ["push()", "add()", "insert()"],
        answer: "push()"
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["const", "var", "static"],
        answer: "const"
    }
];

let question = document.getElementById("question");
let nextButton=document.getElementById("nextButton");


let index = 0;
let score = 0;

function loadData() {
    let Quiz = quizData[index];
    question.innerText = Quiz.question;

    let optionlist = document.getElementById("optionlist");
    optionlist.innerHTML = "";

    Quiz.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        optionlist.appendChild(button);
        button.onclick = () => (checkAnswer(option));

    })


  

    function checkAnswer(option){
        let correctAnswer=Quiz.answer;
        if(option==correctAnswer){
            score++;
           
        }
    }

   



}
  nextButton.addEventListener("click",function(){
        index++;
        loadData();
    })
loadData()
