export function renderMistake(mistake) {
    const { question, choice } = mistake;
    return `<div style="margin-bottom: 24px;"><h3 style="font-size: 18pt; margin-bottom: 12px;">${question.text}</h3><p>You chose "${choice}", when the correct answer was "${question.answer}".</p></div>`;
  }