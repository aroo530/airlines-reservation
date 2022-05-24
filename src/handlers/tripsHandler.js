const { TripOperations } = require("../models/trip");
const { verifyToken } = require("../middleware/verifyToken");

const operations = new TripOperations();

const createFlight = async (req, res) => {
  try {
    const trip = {
      Price: req.body.Price,
      Trip_id: req.body.Trip_id,
      Airline_id: req.body.Airline_id,
      Departure_date: req.body.Departure_date,
      Daparture_time: req.body.Daparture_time,
      Arrival_date: req.body.Arrival_date,
      Arrival_time: req.body.Arrival_time,
      Source: req.body.Source,
      Destination: req.body.Destination,
      Departure_airport: req.body.Departure_airport,
      Arrival_aiport: req.body.Arrival_aiport,
    };
    console.log(trip);
    const result = await operations.createFlight(trip);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFlightById = async (req, res) => {
  //:trip_id
  try {
    await operations.deleteFlightById(req.params.trip_id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFlights = async (_req, res) => {
  try {
    const result = await operations.getAllFlights();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFlightById = async (req, res) => {
  //:trip_id
  try {
    const result = await operations.getFlightById(req.params.trip_id);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSubFlights = async (req, res) => {
  //:source/:distination
  try {
    //query params
    //localhost:3000/flights/?source=delhi&destination=mumbai
    const source = req.query.source;
    const destination = req.query.destination;
    console.log(source, destination);
    const result = await operations.getSubFlights(source, destination);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const flightOperaionsRoutes = (app) => {
  //localhost:3000/flights/20
  app.post("/flights/", createFlight);
  app.delete("/flights/:trip_id/", deleteFlightById);
  // app.get("/flights/", getAllFlights);
  app.get("/flights/:trip_id/",verifyToken, getFlightById);
  app.get("/flights/",verifyToken, getSubFlights);
};

exports.flightOperaionsRoutes = flightOperaionsRoutes;
