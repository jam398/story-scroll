import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "out");

await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, ".nojekyll"), "", "utf8");