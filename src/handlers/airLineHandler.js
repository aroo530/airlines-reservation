const { AirlineOperations } = require("../models/airLine");

const operations = new AirlineOperations();

const createAirline = async (req, res) => {
  try {
    const airline = {
      Airline_id: req.body.Airline_id,
      Airline_name: req.body.Airline_name,
      Airline_email: req.body.Airline_email,
      Airline_phone: req.body.Airline_phone,
    };
    console.log(airline);
    const result = await operations.createAirline(airline);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteAirlineById = async (req, res) => {
  //:trip_id
  try {
    await operations.deleteAirlineById(req.params.Airline_id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllAirlines = async (_req, res) => {
  try {
    const result = await operations.getAllAirlines();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAirlineById = async (req, res) => {
  //:trip_id
  try {
    const result = await operations.getAirlineById(req.params.Airline_id);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//updateAirline
const updateAirline = async (req, res) => {
  //:trip_id
  try {
    const airline = {
      Airline_id: req.body.Airline_id,
      Airline_name: req.body.Airline_name,
      Airline_email: req.body.Airline_email,
      Airline_phone: req.body.Airline_phone,
    };
    console.log(airline);
    const result = await operations.updateAirline(airline);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const airlineOperationsRouts = (app) => {
  app.post("/airlines/", createAirline);
  app.delete("/airlines/:Airline_id/", deleteAirlineById);
  app.get("/airlines/", getAllAirlines);
  app.get("/airlines/:Airline_id/", getAirlineById);
  app.put("/airlines/:Airline_id/", updateAirline);
};

exports.airlineOperationsRouts = airlineOperationsRouts;
