import { bench, run } from "mitata";
import { join } from "path";

const code = require("fs").readFileSync(process.argv[2] || join(import.meta.dir, "../../node_modules/typescript/lib/tsc.js"));

const transpiler = new Bun.Transpiler({ minify: true });

bench("transformSync", () => {
  transpiler.transformSync(code);
});

await run();
