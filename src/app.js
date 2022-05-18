const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { userOperaionsRoutes } = require("./handlers/userHandler");
const { flightOperaionsRoutes } = require("./handlers/flightsHandler");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(bodyParser.json());
//localhost:3000/
app.get("/", (_req, res) => {
  res.status(200).send("Welcome to the Airline Reservation System");
});

userOperaionsRoutes(app);

flightOperaionsRoutes(app);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
