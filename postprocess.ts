import { readJSON, writeTXT } from "https://deno.land/x/flat@0.0.15/mod.ts";
import { stringify } from "jsr:@std/csv@1.0.6";

const filename = Deno.args[0];
const json = await readJSON(filename);

const newFilename = "history.csv";

await writeTXT(
  newFilename,
  stringify(
    [{ "temperature in °C": json.main.temp, description: json.weather[0].main, date: new Date().toISOString() }],
    { headers: false, columns: ["temperature in °C", "description", "date"] }
  ),
  { append: true }
);
