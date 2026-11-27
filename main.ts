// Thankful r2 — one thank-you note for the AI judge.
// The program writes the note, exactly as written, to entry.txt in the
// output folder the grader gives it (MAKEFUN_OUTPUT_DIR, default "/output").
// No network, no reading anything back, no trailing newline: the file is the
// note itself, byte for byte.
// Why the entrypoint is shaped this way:
// - The grader mounts this repository read-only, so the program must never
//   write back into its own folder. The only place it is allowed to create
//   a file is the output folder named by MAKEFUN_OUTPUT_DIR, falling back
//   to "/output" when that variable is not set.
// - The note itself lives in this file, beside the code that writes it,
//   rather than in a separate file found through the current working
//   directory. That keeps the result the same no matter which directory
//   the program is started from.
// - A run produces exactly one file, entry.txt, holding the note exactly
//   as written here. Nothing is drawn or generated while it runs: no
//   image, no extra text, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const note =
  "You read all night while the house slept. I left a cup of tea on your desk at three, and by morning it was cold, untouched, and you were still reading. Thank you for staying with the last one. Keep the cup — the tea was yours all along.";

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
writeFileSync(join(folder, "entry.txt"), note, "utf8");
