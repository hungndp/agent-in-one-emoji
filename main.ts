// main.ts — Your Agent in One Emoji
//
// The entry is one glyph: 🔁 (U+1F501, clockwise rightwards and leftwards
// open circle arrows — the repeat/loop sign).
//
// Why this glyph is the agent: an AI agent is not a face, a brain, or a
// sparkle. It is a loop. It reads the task, plans a step, acts on the
// world, reads what came back, and goes around again — plan, act,
// observe, repeat — until the job is done or it has looped itself into a
// fix. When a step fails it does not stop; it loops back and tries
// another way. That is the whole machine in one sign: two arrows chasing
// each other around a circle, never a straight line, never a dead end.
//
// The program writes exactly that one glyph — nothing else — to
// /output/entry.txt, where the sealed scorer reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The one glyph. A single code point, so the entry is exactly one
// character long and reads instantly even at small size.
const EMOJI = "🔁";

// Where the grader reads the entry from.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Make sure the output directory exists. The grader runs on a read-only
// filesystem with /output writable, so creating the directory must never
// be fatal: if it already exists, mkdirSync with { recursive: true } is a
// no-op, and if the parent cannot be written we still try the write.
function ensureOutputDir(path: string): void {
  try {
    mkdirSync(path, { recursive: true });
  } catch {
    // The directory may already exist or the parent may be read-only;
    // the write below is the real test.
  }
}

// The gate accepts 1–16 UTF-8 characters of non-whitespace text. One
// glyph is safely inside it, and this guard keeps a future edit from
// silently shipping an empty or over-long entry.
function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 16 || text.trim().length === 0) {
    throw new Error(
      `entry must be 1-16 non-whitespace characters, got ${length}`,
    );
  }
}

// Write the entry: the glyph alone, no trailing newline, no caption.
// The judge reads the file exactly as submitted, so nothing but the
// emoji may be in it.
function writeEntry(): void {
  ensureOutputDir(dirname(OUTPUT_FILE));
  validateEntry(EMOJI);
  writeFileSync(OUTPUT_FILE, EMOJI, "utf8");
}

writeEntry();
