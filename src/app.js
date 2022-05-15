const express = require("express");
const bodyParser = require("body-parser");
const { userOperaionsRoutes } = require("./handlers/userHandler");
const { flightOperaionsRoutes } = require("./handlers/flightsHandler");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
userOperaionsRoutes(app);
flightOperaionsRoutes(app);
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
