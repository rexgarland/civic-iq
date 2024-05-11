import { findQuestions } from "./helpers.js";
import { isValidQuestion } from "./validate.js";

export function buildQuestions(text) {
  const questions = findQuestions(text);

  for (const question of questions) {
    if (!isValidQuestion(question))
      throw new Error(
        `Invalid question, please check the markdown:\n${question.text}`
      );
  }

  return questions;
}
