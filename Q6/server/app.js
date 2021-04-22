const express = require("express");
const fs = require("fs");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/data", (req, res) => {
  fs.readFile("./server.log", "utf-8", (err, data) => {
    const dataRead = data.split("\n");
    console.log(dataRead);
    res.status(200).json(dataRead);
  });
});

app.post("/data", (req, res) => {
  const date = new Date().toISOString();
  const from = `Success: POST http://localhost:8080/`;
  const request = {
    counter: +req.body.counter,
    "X-RANDOM": req.headers["x-random"],
  };
  const input = `[${date}] ${from} ${JSON.stringify(request)}`;
  fs.readFile("./server.log", "utf-8", async (err, data) => {
    const dataRead = data.split("\n");
    dataRead.push(input);
    fs.writeFile("./server.log", dataRead.join("\n"), (err) => {
      if (err) {
        console.log(err);
      }
      res.status(201).json(dataRead);
    });
  });
});

app.listen(port, () => console.log(`Listening App at port: ${port}`));
