var readlinesync = require('readline-sync')
var rightans = 0
var wrongans = 0
var j = 0
var questionsone = {
  question: 'Who is the writer of the Marvel comics? ',
  answer: 'Stan Lee'
}
var questiontwo = {
  question: 'Who is the first Avenger in marvels movies? ',
  answer: 'Captain America'
}
var questionthree = {
  question: 'What is the name of Captain America? ',
  answer: 'Steve Rogers'
}
var questionfour = {
  question: 'What is the name of Hulk? ',
  answer: 'Bruce Banner'
}
var questionfive = {
  question: 'What is the name of Thors first hammer? ',
  answer: 'Mjollnir'
}
var questionsix = {
  question: 'What is the name of Strongest Avenger? ',
  answer: 'Thor'
}
var questionseven = {
  question: 'How many stones are in the Avengers movie? ',
  answer: '6'
}
var questioneight = {
  question: 'Who is the brother of Thor? ',
  answer: 'Loki'
}
var questionnine = {
  question: 'Who is daughter of thanos? ',
  answer: 'Gamors'
}

var questionten = {
  question: "What is name of Black Panther's city? ",
  answer: 'Wakanda'
}
questions = [questionsone, questiontwo, questionthree, questionfour, questionfive, questionsix, questionseven, questioneight, questionnine, questionten]
username = readlinesync.question('May I know your name? ')
console.log('Hi ' + username)
console.log('The topic of quiz is Marvel Comics ')
console.log('This quiz contains 10 questions')
console.log("Let's begin the quiz")
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

for (var i = 0; i < questions.length; i++) {
  console.log('Question:-', ++j)
  userans = readlinesync.question(questions[i].question)
  play(userans, questions[i].answer)
}
function play(userans, answer) {
  if (userans.toLowerCase() == answer.toLowerCase()) {
    console.log('You are right')
    rightans++
    // console.log('your Score is :-',score)
  } else {
    console.log('You are wrong')
    wrongans++
    // console.log('your Score is :-',score)
  }
  console.log('-----------------------------------------')
}
console.log('x----x----x----x----x----x----x----x----x----x----x')
console.log('Right answers:- ', rightans)
console.log('Wrong ANswer', wrongans)
console.log('x----x----x----x----x----x----x----x----x----x----x')
