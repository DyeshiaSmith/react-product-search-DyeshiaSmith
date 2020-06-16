import express from "express";

const app = express();
const PORT = 80;

app.get("/", (_, res) => res.end("<p>Hello from express</p>"));

app.listen(PORT, () => {
  console.info(`running a server on port: ${PORT}`);
});
