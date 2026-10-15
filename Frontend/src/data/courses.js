import Papa from "papaparse";
import csvText from "./sdsu_cs_curriculum.csv?raw";

const result = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: "greedy",
  transformHeader: (header) => header.trim(),
});

if (result.errors.length > 0) {
  console.error("Course CSV errors:", result.errors);
  throw new Error("Could not read the course CSV. Check the console.");
}

export const courses = result.data;