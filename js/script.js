const Question = [{
    'que': 'Which of the following is the markup language ?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'javaScript',
    'd': 'pHp',
    'correct': 'a'
},
{
    'que': 'In which year javaScript was launched ?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que': 'what does css stands for ?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading style sheet',
    'c': 'coding styling',
    'd': 'none of the these',
    'correct': 'b'
}
];
let index = 0;
let total = Question.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
  
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = Question[index]

    quesBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = Question[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer=input.value;
            
            }
        }
    )
return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("main").innerHTML= `
    <h1 style="text-align:center; padding-top:200px;">Thank you for playing the quiz !!</h1>
    <h1 style="text-align:center;padding-top:50px;">${right}/${total} are correct</h1>`
}
loadQuestion();