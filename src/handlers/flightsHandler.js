const { verifyToken } = require("../middleware/verifyToken");
const { FlightOperaions } = require("../models/flights");

const operations = new FlightOperaions();

const createFlight = async (req, res) => {
  try {
    const flight = req.body;
    const result = await operations.createFlight(flight);
    //201 - created
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFlightByDest = async (req, res) => {
  try {
    const { to, from } = req.body;
    const result = await operations.getFlightByDest(from, to);
    // 200 - ok
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getFlights = async (req, res) => {
  try {
    const result = await operations.getFlights();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// localhost:3000/flights/
const flightOperaionsRoutes = (app) => {
  app.get("/flight/destination", verifyToken, getFlightByDest); // params are from and where
  app.get("/flight", verifyToken, getFlights);
  app.post("/flight/", createFlight);
};

exports.flightOperaionsRoutes = flightOperaionsRoutes;
