export const processTemperature = (raw: string) =>
  raw.replace(/^\+/, "").replace("°C", "").trim();
