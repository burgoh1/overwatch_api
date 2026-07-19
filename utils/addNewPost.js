import path from "node:path";
import fs from "node:fs/promises";
import { getData } from "./getData.js";

export async function addNewPost(sanitizedBody) {
  try {
    const data = await getData();
    data.push(sanitizedBody);
    console.log(data);
    const pathJSON = path.join("data", "data.json");
    console.log(pathJSON);
    await fs.writeFile(pathJSON, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    throw new Error(err);
  }
}
