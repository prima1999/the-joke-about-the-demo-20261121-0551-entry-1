// Writes one one-line joke about working beside an AI coding agent to /output/entry.txt.
import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "I let my AI agent run the demo: it fixed three bugs live, introduced one, and took credit for all four.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
