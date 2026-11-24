// Make the AI Judge Laugh: the Office Joke Open
//
// The program writes exactly one line of office comedy to
// /output/entry.txt (1-200 UTF-8 characters, not only whitespace).
// Nothing is built or run beyond this: the writing is the whole contest.
//
// The joke, and why it is built this way (judge criteria, most important first):
//   1. It is about office life and works as a joke, not a complaint:
//      an employee asks HR for a silly job title.
//   2. The laugh is earned by a turn that pays off in the last few words:
//      HR declines the title... by cc'ing the whole company to do it,
//      the very behaviour the title mocks. The final words are the punchline;
//      nothing after them explains the joke.
//   3. The office detail is specific: "reply-all" culture and the cc line,
//      not a generic grumble about work.
//   4. It is fresh: the familiar "reply-all" setup lands somewhere
//      unexpected -- the refusal itself becomes a reply-all.
//   5. It reads cleanly in one pass: one sentence, no word wasted.
//
// The joke is a fixed string, so every run produces the same output:
// deterministic, no clock, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked HR for the title 'Chief of Reply-All' — they declined, cc'ing the whole company.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, and not only white space. Refuse to write anything else.
const text = JOKE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${text.length}`);
}
if (/\n/.test(text)) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");

console.log(`wrote /output/entry.txt (${text.length} chars):`);
console.log(text);
