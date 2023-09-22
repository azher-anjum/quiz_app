const dataOfQuiz = [{
    question: "The web is based on?",
    a: "Image",
    b: "Text",
    c: "Information",
    d: "HTML",
    correct: "d",
},
{
    question: "JavaScript is the programming language of the _____?",
    a: "Desktop",
    b: "Mobile",
    c: "Web",
    d: "Server",
    correct: "c",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: " Which type of JavaScript language is _____?",
    a: "Object-oriented",
    b: "Object-based",
    c: "Functional programming",
    d: "All of the above",
    correct: "b",
},
{
    question: "JavaScript code can be written in ____.",
    a: "JavaScript file (.js file)",
    b: "HTML document directly",
    c: "JavaScript file and in HTML document directly",
    d: "In style sheets (.css file)",
    correct: "c",
},
{
    question: "Which symbol is used separate JavaScript statements?",
    a: "Comma (,)",
    b: "Colon (:)",
    c: "Hyphen (_)",
    d: "Semicolon (;)",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = dataOfQuiz.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const questionLoad = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = dataOfQuiz[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = dataOfQuiz[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    questionLoad()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
questionLoad(index);