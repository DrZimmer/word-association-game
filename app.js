const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

const questions = [
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['jury','assess'],
    correct: 2
  },
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['jury','assess'],
    correct: 2
  },
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['jury','assess'],
    correct: 2
  },
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['jury','assess'],
    correct: 2
  },

]

let score = 0
scoreDisplay.textContent = score

function populateQuestions() {
  questions.forEach(question => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')
    questionBox.innerHTML = "BOX!"
    questionDisplay.append(questionBox)
  })
}

populateQuestions()