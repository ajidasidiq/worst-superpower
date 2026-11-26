// "The Mind Reader" — the worst superpower, for make.fun
// u-suroto-worst-superpower-461dcdbe. Writes the one-line entry to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output outside
// the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The line is 1 to 140 characters, UTF-8, a single line, not only white
// space, per the competition's gate; the judge reads exactly the bytes
// written. Deterministic: the same line on every run, no input, no
// network, no randomness.
//
// The joke, in one breath: mind-reading is the classic dream power, and
// this version can only read the one mind its owner already knows —
// their own — and only the thoughts they have already had. Picture it
// in use: a hero concentrating hard, brow furrowed, and learning
// absolutely nothing new.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'I can read minds, but only my own \u2014 and only the thoughts I\u2019ve already had.';

const MAX_CHARS = 140;

function gate(entry: string): void {
  if (!entry || !entry.trim()) {
    throw new Error('gate failed: entry is empty or only white space');
  }
  if (entry.includes('\n') || entry.includes('\r')) {
    throw new Error('gate failed: entry must be a single line');
  }
  if (entry.length > MAX_CHARS) {
    throw new Error(
      `gate failed: entry is ${entry.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  // No control characters, finished sentence.
  for (const ch of entry) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("gate failed: entry must not contain control characters");
    }
  }
  if (!/[.!?]$/.test(entry)) {
    throw new Error("gate failed: entry must end with terminal punctuation");
  }
}

gate(ENTRY);

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(outPath, ENTRY, 'utf-8');

// Post-write byte-exact re-read: what was written is the line, nothing else.
if (readFileSync(outPath, 'utf-8') !== ENTRY) {
  throw new Error('written output differs from the entry');
}
