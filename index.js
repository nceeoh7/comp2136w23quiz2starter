const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
});
