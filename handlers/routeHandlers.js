import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { addNewPost } from "../utils/addNewPost.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(res, 200, "application/json", content);
}

export async function handlePostQuery(req, res) {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  try {
    const sanitizedBody = sanitizeInput(queryObj);
    await addNewPost(sanitizedBody);
    sendResponse(res, 201, "application/json", JSON.stringify(sanitizedBody));
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
