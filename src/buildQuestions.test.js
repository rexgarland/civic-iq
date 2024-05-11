import { buildQuestions } from "./buildQuestions";

describe("building question objects from markdown input", () => {
  it("should throw error when a question is missing an answer", () => {
    // a "finished" question is marked with a proper header "# ..."
    const md = `# text
- option1
- option2`;

    const builder = () => buildQuestions(md);

    expect(builder).toThrow();
  });
});
