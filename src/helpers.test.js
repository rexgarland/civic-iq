import { findQuestions, parseQuestion } from "./helpers.js";

const dummyQuestion = `# title
- [x] good
- bad`;

describe("question", () => {
  describe("finding", () => {
    it("should count questions starting with #", () => {
      const questions = findQuestions(dummyQuestion);
      expect(questions.length).toBe(1);
    });

    it("should ignore draft questions without an h1 yet", () => {
      // No prefixed '# '
      const questions = findQuestions(`Dummy question
- example
- answers`);
      expect(questions.length).toBe(0);
    });

    it("should ignore citation blocks, denoted by lines starting with [<number>]", () => {
      const text = `# First question
- [x] answer [1]

[1] citation`;
      const questions = findQuestions(text);
      expect(questions.length).toBe(1);
    });
  });

  describe("parsing", () => {
    it("should get the question text", () => {
      expect(parseQuestion(dummyQuestion).text).toBe("title");
    });

    it("should remove hashtags from the title", () => {
      const question = parseQuestion(`# title #hashtag`);
      expect(question.text).toBe("title");
    });

    it("should find the answer marked with [x]", () => {
      const question = parseQuestion(`# question
- [x] good`);
      expect(question.answer).toBe("good");
    });

    it("should find all options", () => {
      const question = parseQuestion(dummyQuestion);
      expect(question.options).toEqual(["good", "bad"]);
    });

    it("should parse the explanation separately from options", () => {
      const question = parseQuestion(`# question
- option1
- option2
\`\`\`
some explanation
- with a list item
\`\`\``);
      expect(question.options.length).toBe(2);
    });

    it("should parse numbered lists as options", () => {
      const question = parseQuestion(`# question
1. option1
2. option2`);
      expect(question.options.length).toBe(2);
    });

    it("should throw on multiple answers", () => {
      const parser = () =>
        parseQuestion(`# question
- [x] answer1
- [x] answer2`);

      expect(parser).toThrow();
    });
  });
});
