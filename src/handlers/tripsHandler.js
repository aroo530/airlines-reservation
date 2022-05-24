const { TripOperations } = require("../models/trip");

const operations = new TripOperations();

const createTrip = async (req, res) => {
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
        const result = await operations.createTrip(trip);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTripById = async (req, res) => { //:trip_id
    try {
        await operations.deleteTripById(req.params.trip_id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllTrips = async (req, res) => { // /?source=""&destination=""
    try {
        const { source, destination } = req.query;
        let result;
        if (!source && !destination)
            result = await operations.getAllTrips();
        else
            result = await operations.getSubTrips(source, destination);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTripById = async (req, res) => { //:trip_id
    try {
        const result = await operations.getTripById(req.params.trip_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const tripsOperaionsRoutes = (app) => {
    //localhost:3000/trips/20
    app.post("/trips/", createTrip);
    app.delete("/trips/:trip_id/", deleteTripById);
    app.get("/trips/", getAllTrips);
    app.get("/trips/:trip_id/", getTripById);
};

exports.tripsOperaionsRoutes = tripsOperaionsRoutes;
