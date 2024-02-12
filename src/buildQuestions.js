import { findQuestions } from "./helpers.js";
import { readFileSync } from "fs";

const file = process.argv[2];
const text = readFileSync(file, "utf8");
const questions = findQuestions(text);
const json = JSON.stringify(questions);
const javascript = `questions = ${json}`;
console.log(javascript);
