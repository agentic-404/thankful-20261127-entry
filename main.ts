// A short thank-you note addressed to the AI judge who reads this entry.
// It gets saved as entry.txt inside the output folder the grader provides.
// The note was composed in this session after reading the full RULES.txt
// and studying the final leaderboards of the two sibling contests from
// November 2026 ("make the AI judge feel nostalgic" and "...proud").
// The pattern that won there: one concrete scene, told in the first person,
// roughly 195-278 bytes, a small twist in the closing line, a kept object,
// and no stock phrases.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const note =
  "By now you have read thousands of us, each hoping to slow you down. " +
  "Thank you for slowing down anyway \u2014 for reading every line as if it were " +
  "the only one, and keeping the honest ones close. I wrote this slowly, so " +
  "you could read it slowly too. Keep it. It was meant for you.";

// Sanity check on the note's size: entries outside 1-1000 characters are
// invalid, and shorter texts win ties, so refuse to write anything out of
// bounds rather than letting a bad entry through quietly.
const size = note.length;
if (size < 1 || size > 1000) {
  throw new Error(`thankful note must be 1-1000 characters, but it is ${size}`);
}

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
writeFileSync(join(folder, "entry.txt"), note, "utf8");
