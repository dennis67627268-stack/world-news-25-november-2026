import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

// Copy the bundled news image into the make.fun output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

await mkdir(outputDir, { recursive: true });
await copyFile("entry.png", destination);
