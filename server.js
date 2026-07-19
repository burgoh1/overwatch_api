import http from "node:http";
import { handleGet } from "./handlers/routeHandlers.js";
import { handlePostQuery } from "./handlers/routeHandlers.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    return handleGet(res);
  } else if (req.url.startsWith("/api?") && req.method === "POST") {
    return handlePostQuery(req, res);
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
