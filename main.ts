// Round 2: entry.png regenerated in a recorded session (same koi image, JPEG q93).
// ai-excited-01 — "The Teacup Koi".
//
// The entry is a single image: a colossal golden koi bursting out of a tiny
// porcelain teacup, water spiralling up around it, cherry-blossom petals
// flying. The program below does exactly one thing: it copies the image
// shipped beside it (entry.png) into the grader's output directory.
//
// The shipped file is a JPEG under the entry.png name, which the rules allow:
// the gate tells PNG and JPEG apart by their first bytes.
//
// Node 22, standard library only, no network access. The run is fully
// deterministic: the same bytes are written on every run, so two runs are
// byte-identical.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Directory holding this file — and entry.png beside it.
const here = dirname(fileURLToPath(import.meta.url));

// The grader writes to /output; MAKEFUN_OUTPUT_DIR stands in for it locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read the shipped image once, then write it verbatim. Nothing is
// generated, transformed, or fetched — the output is the shipped bytes.
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
