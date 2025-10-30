import { readJSON, writeCSV } from "https://deno.land/x/flat@0.0.15/mod.ts";
import { stringify } from "jsr:@std/csv@1.0.6";

const filename = Deno.args[0];
const json = await readJSON(filename);

const newFilename = "history.csv";

await writeCSV(
  newFilename,
  await stringify([{ temp: json.main.temp, desc: json.weather[0].main, date: new Date().toISOString() }], {
    headers: false,
    columns: ["temp", "desc", "date"],
  }),
  { append: true }
);
