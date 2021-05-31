import { readCSV, writeCSV } from "https://deno.land/x/flat@0.0.10/mod.ts";
import { processTemperature } from "./utils.ts";

const INPUT = "./history.csv";
const OUTPUT = "./history.csv";

const input = await readCSV(INPUT);

await writeCSV(
  OUTPUT,
  input.map((inputRow) => ({
    temperature: processTemperature(inputRow.temperature as string),
    description: inputRow.description,
    date: inputRow.date,
  })),
);
