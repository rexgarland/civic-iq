import { readFileSync, writeFileSync } from "fs";
import { buildQuestions } from "./buildQuestions";

const file = process.argv[2];
const text = readFileSync(file, "utf8");

const questions = buildQuestions(text);

const json = JSON.stringify(questions);
const javascript = `questions = ${json}`;
console.log(javascript);
