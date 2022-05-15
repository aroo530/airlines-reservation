const pool = require("../database");

class FlightOperaions {
  async createFlight(flight) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "INSERT INTO flights (from_airport, to_airport, date, time, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          flight.from_airport,
          flight.to_airport,
          flight.date,
          flight.time,
          flight.price,
        ]
      );
      connection.release();
      // console.log("res", result);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  async getFlights() {
    try {
      const connection = await pool.connect();
      const result = await connection.query("SELECT * FROM flights");
      connection.release();
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async getFlightByDest(from, to) {
    try {
      console.log("from", from);
      console.log("to", to);
      const connection = await pool.connect();
      const result = await connection.query(
        "SELECT * FROM flights WHERE from_airport = $1 AND to_airport = $2",
        [from, to]
      );
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

exports.FlightOperaions = FlightOperaions;
