var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
  res.json(["Teste"]);
});

app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port 3000");
});