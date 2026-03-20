
/*

1. You should create an array named questions.
2. The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
3. The category key should have the value of a string representing a question category.
4. The question key should have the value of a string representing a question.
5. The choices key should have the value of an array containing three strings different from each other.
6. The answer key should have the value of a string.
7. The value of answer should be included in the choices array.
8. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
9. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
10. You should have a function named getResults.
11. Your getResults function should take the question object as the first parameter and the computer's choice as the second parameter.
12. If the computer choice matches the answer, getResults should return The computer's choice is correct!
13. If the computer choice doesn't match the answer, getResults should return The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
14. Your getResults function should use exact equality comparison, not substring matching.

*/

/* Stage questions */
const questions = [];

const question1 = {
  category: "Personal",
  question: "How tall are you?",
  choices: ["5'8\"", "5'9\"", "5'10\""],
  answer: "5'8\"",
};

const question2 = {
  category: "Home",
  question: "What machine makes the coffee?",
  choices: ["Coffee Maker", "Refridgerator", "Stove"],
  answer: "Coffee Maker",
};

const question3 = {
  category: "Sports",
  question: "What is the best sport?",
  choices: ["Football", "Soccer", "Baseball"],
  answer: "Football",
};

const question4 = {
  category: "Video Games",
  question: "Which Diablo is the best?",
  choices: ["Diablo 2", "Diablo 3", "Diablo 4"],
  answer: "Diablo 4",
};

const question5 = {
  category: "Pets",
  question: "Who is the best pet?",
  choices: ["Rosco", "Chloe Bear", "Roxy"],
  answer: "Roxy",
};

/* Create array of questions */
questions.push(question1, question2, question3, question4, question5);

/* Choose random question */
function getRandomQuestion(questionsArr) {
  let minNum = 0
  let maxNum = questionsArr.length - 1;
  let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  let randomQuestion = questions[randomNum];
  return randomQuestion;
}

/* Select random choice */
function getRandomComputerChoice(choicesArr) {
    let minNum = 0;
    let maxNum = choicesArr.length - 1;
    let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    let randomChoice = choicesArr[randomNum];  
    return randomChoice;
};

/* Compare answers provided and return readable result */
function getResults(questionObj, aiChoice) {
  let questionAnswer = questionObj.answer
  if (questionAnswer == aiChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionAnswer}`;
  }
};
