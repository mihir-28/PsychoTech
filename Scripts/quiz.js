const quizData = [
    {
        question: "What do you do to feel energized?",
        a: "Spending time with others",
        b: "Need time alone to recharge",
    },
    {
        question: "When making decisons, do you",
        a: "Talk through your options with others",
        b: "Think things through on your own",
    },
    {
        question: "When you're in a group conversation, do you",
        a: "Jump in and participate",
        b: "Listen and observe",
    },
    {
        question: "How do you prefer to work?",
        a: "Clear and well-defined plan",
        b: "Leave room for improvisation",
    },
    {
        question: "Do you focus more on",
        a: "What is happening now",
        b: "What could happen in the future",
    },
    {
        question: "When making decisons, do you",
        a: "Prefer to rely on facts and evidence",
        b: "Trust your instincts and gut feelings",
    },
    {
        question: "When someone comes to you with a problem, do you tend to offer",
        a: "Practical solutions",
        b: "Emotional support",
    },
    {
        question: "Do you find it easy to",
        a: "Focus more on objective facts and analysis",
        b: "Understand other people's perspectives and feelings",
    },
    {
        question: "When faced with a decision, do you tend to",
        a: "Consider the impact it will have on yourself",
        b: "Consider the impact it will have on others",
    },
    {
        question: "When faced with a problem, do you tend to",
        a: "Take action immediately",
        b: "Take time to reflect and gather more information",
    },
    {
        question: "When working in a group, do you prefer to",
        a: "Take charge and lead",
        b: "Collaborate and let things unfold organically",
    },
    {
        question: "When making decisions, do you prefer to",
        a: "Have all the relevant information before making a choice",
        b: "Making a decision based on your gut instinct",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')
var userEmail = localStorage.getItem('email')
let selected = []
const personality = [];
let currentQuiz = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// Calculate the total number of 'a' on a frequency of 3 values
function type() {
    for (let i = 0; i < 12; i += 3) {
        const chunk = selected.slice(i, i + 3);
        const countA = chunk.filter((char) => char === "a").length;
        let type = "";

        if (countA >= 2) {
            type = i === 0 ? "E" : i === 3 ? "S" : i === 6 ? "T" : "J";
        } else {
            type = i === 0 ? "I" : i === 3 ? "N" : i === 6 ? "F" : "P";
        }

        personality.push(type);
    }

    console.log("Total number of 'a':", selected.filter((char) => char === "a").length);
    console.log("Personality:", personality.join(""));
    return personality.join("")
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        selected.push(answer)
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            console.log(selected);
            console.log(userEmail);
            const personalityS = type()
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "per.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    // Handle response from PHP (if needed)
                    console.log(xhr.responseText);
                }
            };
            xhr.send("perType=" + encodeURIComponent(personalityS) + "&userEmail=" + encodeURIComponent(userEmail));
            quiz.innerHTML = `
           <h2>You Personality is ${personalityS}</h2>
           <button onclick="location.href='result.html'">Check Your Trait By Clicking Here</button>
           `
        }
    }
})