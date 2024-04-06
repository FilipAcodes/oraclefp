const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
