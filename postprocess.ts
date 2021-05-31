import {
  readCSV,
  readJSON,
  writeCSV,
} from "https://deno.land/x/flat@0.0.10/mod.ts";

const filename = Deno.args[0];
const json = await readJSON(filename);

const newFilename = "history.csv";
const history = await readCSV(newFilename);

const processTemperature = (raw: string) => raw.replace(/^+/, "");

await writeCSV(newFilename, [{
  temperature: processTemperature(json.temperature),
  description: json.description,
  date: new Date().toISOString(),
}, ...history]);
