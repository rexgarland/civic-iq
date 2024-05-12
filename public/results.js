import { questions } from "./questions.js";

function problem(msg) {
  alert(`Error: ${msg}\nPlease contact maintainers to fix.`);
}

function getAnswersFromWindowURL() {
  var url = new URL(window.location);
  const data = url.searchParams.get("data");
  if (data === null) {
    problem("Could not find quiz answers within URL.");
    return;
  }

  try {
    return JSON.parse(atob(data));
  } catch {
    problem("Could not parse quiz answers.");
  }
}

function findMistakes(questions, answers) {
  const mistakes = [];

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const chosenIndex = answers[i];
    const chosenOption = question.options[chosenIndex];

    if (chosenOption !== question.answer) {
      mistakes.push({
        question,
        choice: chosenOption,
      });
    }
  }

  return mistakes;
}

function renderMistake(mistake) {
  const { question, choice } = mistake;
  return `<div style="margin-bottom: 24px;"><h3 style="font-size: 18pt; margin-bottom: 12px;">${question.text}</h3><p>You chose "${choice}", when the correct answer was "${question.answer}".</p></div>`;
}

function renderMistakeBreakdownIn(div, mistakes) {
  if (mistakes.length === 0) {
    return;
  }

  const header = document.createElement("h2");
  header.innerHTML = "These questions were incorrect:";
  div.appendChild(header);

  for (const mistake of mistakes) {
    div.innerHTML += renderMistake(mistake);
  }
}

// main

const answers = getAnswersFromWindowURL();

const total = questions.length;
if (!answers) {
  problem("Could not find all answers for calculating quiz results.");
}
if (answers.length !== total) {
  problem(`${answers.length} answers found for quiz of length ${total}.`);
}

const mistakes = findMistakes(questions, answers);
const score = total - mistakes.length;

document.getElementById("score").innerHTML =
  `You got ${score}/${total} (${Math.round((score / total) * 100)}%) correct!`;

const breakdown = document.getElementById("breakdown");

renderMistakeBreakdownIn(breakdown, mistakes);
