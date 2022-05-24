const pool = require("../database");

class TripOperations {
    async createTrip(trip) {
        try {
            const connection = await pool.connect();
            const result = await connection.query(
                "INSERT INTO Trips (Trip_id, Airline_id, Departure_date, Daparture_time, Arrival_date, Arrival_time, Source, Destination, Departure_airport, Arrival_aiport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
                [
                    trip.Trip_id,
                    trip.Airline_id,
                    trip.Departure_date,
                    trip.Daparture_time,
                    trip.Arrival_date,
                    trip.Arrival_time,
                    trip.Source,
                    trip.Destination,
                    trip.Departure_airport,
                    trip.Arrival_aiport,    
                ]
            );
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
        
    async deleteTripById(Trip_id) {
        try {
            const connection = await pool.connect();
            const result = await connection.query(
              "Delete From Trips where Trip_id = $1",
              [Trip_id]
            );
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllTrips(source, destination) {
        try {
            const connection = await pool.connect();
            let query = "SELECT * FROM Trips";
            if(source && destination)
                query += " where Source Like $1 And Destination like $2";
            query += " Order by Departure_date,Daparture_time,Arrival_date,Arrival_time";

            const result = await connection.query(
                query,
                (source && destination)? [ source, destination ]: []
            );
            connection.release();
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
    
    async getTripById(Trip_id) {
        try {
            const connection = await pool.connect();
            const result = await connection.query(
              "SELECT * FROM Trips WHERE Trip_id = $1 ",
              [Trip_id]
            );
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.TripOperations = TripOperations;