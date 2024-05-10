import { findQuestions } from "./helpers.js";

export function buildQuestions(text) {
  const questions = findQuestions(text);

  return questions;
}
