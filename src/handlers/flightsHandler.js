const { TripOperations } = require("../models/flights");

const operations = new TripOperations();

const createFlight = async (req, res) => {
    try {
        const trip = { 
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
        const result = await operations.createFlight(trip);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteFlightById = async (req, res) => { //:trip_id
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

const getFlightById = async (req, res) => { //:trip_id
    try {
        const result = await operations.getFlightById(req.params.trip_id);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSubFlights = async (req, res) => { //:source/:distination
    try {
        // const { source, destination } = req.params;
        const source = req.params.source;
        const destination = req.params.destination;
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
    app.get("/flights/", getAllFlights);
    app.get("/flights/:trip_id/", getFlightById);
    app.get("/flights/:source/:destination", getSubFlights);
};

exports.flightOperaionsRoutes = flightOperaionsRoutes;
