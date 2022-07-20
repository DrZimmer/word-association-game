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
let clicked = []


scoreDisplay.textContent = score

function populateQuestions() {
  //everything
  questions.forEach(question => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')

    const logoDisplay = document.createElement('h1')
    logoDisplay.textContent = "<=>"
    questionBox.append(logoDisplay)

    //second for each loop creating the quiz p elements/textContent
    question.quiz.forEach(tip => {
      const tipText = document.createElement('p')
      tipText.textContent = tip
      questionBox.append(tipText)
    })

    const questionButtons = document.createElement('div')
    questionButtons.classList.add('question-buttons')
    questionBox.append(questionButtons)

    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button')
      questionButton.classList.add('question-button')
      questionButton.textContent = option

      questionButton.addEventListener('click', () => checkanswer(questionBox, questionButton, option, optionIndex + 1, question.correct))

      questionButtons.append(questionButton)
    })


    const answerDisplay = document.createElement('div');
    answerDisplay.classList.add('answer-display')

    questionBox.append(answerDisplay)
    questionDisplay.append(questionBox)
  })
}

populateQuestions()

function checkanswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
  console.log("option ", option)
  console.log("option index ", optionIndex)

  if(optionIndex === correctAnswer) {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, "Correct!")
  } else {
    score--
    scoreDisplay.textContent = score
    addResult(questionBox, "Wrong!")
  }
  clicked.push(option)
  questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
  
}