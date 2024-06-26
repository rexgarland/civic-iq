import { Question } from "./Question.js";

function splitTextByDoubleNewlines(text) {
  return text.split("\n\n").map((t) => t.trim());
}

function isParseableQuestionString(s) {
  const firstLine = s.split("\n")[0];
  if (!firstLine) return false;
  return firstLine.startsWith("# ");
}

function trimPrecedingCheckMark(listItem) {
  if (listItem.startsWith("[x] ")) return listItem.slice(4);
  return listItem;
}

function findListItems(text) {
  const lines = text.split("\n");
  const listItems = [];
  let inList = false;
  for (const line of lines) {
    if (isListItem(line)) {
      listItems.push(line);
      inList = true;
    } else if (inList) {
      break;
    }
  }
  const listItemTexts = listItems.map((l) => l.slice(2).trim());
  return listItemTexts;
}

function isListItem(line) {
  return line.startsWith("- ") || line.match(/^[0-9]+\. /);
}

function removeHashtags(s) {
  const without = s.replaceAll(/#[a-z]+/g, "");
  return without;
}

function findText(text) {
  const firstLine = text.split("\n")[0];
  if (!firstLine && firstLine.startsWith("# ")) return;
  const afterHash = firstLine.slice(2);
  const withoutHashtags = removeHashtags(afterHash);
  return withoutHashtags.trim();
}

function findOptions(text) {
  return findListItems(text).map(trimPrecedingCheckMark);
}

function findAnswer(text) {
  const listItems = findListItems(text);
  const answers = listItems
    .filter((listItem) => listItem.startsWith("[x] "))
    .map((listItem) => listItem.slice(4));
  if (answers.length > 1)
    throw new Error("Multiple choice answers are not supported as of yet.");

  return answers[0];
}

export function parseQuestion(data) {
  const title = findText(data);
  const options = findOptions(data);
  const answer = findAnswer(data);
  return new Question(title, options, answer);
}

export function findQuestions(text) {
  const splits = splitTextByDoubleNewlines(text);
  const parseableQuestionStrings = splits.filter(isParseableQuestionString);
  const questions = parseableQuestionStrings.map(parseQuestion);
  return questions;
}
