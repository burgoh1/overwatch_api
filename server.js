import http from "node:http";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return handleGet(res);
    } else if (req.method === "POST") {
      // handlePost(req, res)
    }
  } else if (req.url !== "/api") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Route Not Found: Please use the api/products endpoint",
      }),
    );
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
