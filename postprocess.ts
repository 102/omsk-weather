import { readJSON, writeTXT } from "https://deno.land/x/flat@0.0.15/mod.ts";

const filename = Deno.args[0];
const json = await readJSON(filename);

const newFilename = "history.csv";

const wrapDescription = (description: string) => (description.includes(",") ? `"${description}"` : description);

await writeTXT(
  newFilename,
  [json.main.temp, wrapDescription(json.weather[0].main), new Date().toISOString()].join(",") + "\n",
  {
    append: true,
  }
);
