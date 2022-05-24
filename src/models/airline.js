const pool = require("../database");
//id email phone name
class AirlineOperations {
  //create airline
  async createAirline(airline) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "INSERT INTO Airline (Airline_id, Airline_name, Airline_email, Airline_phone) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          airline.Airline_id,
          airline.Airline_name,
          airline.Airline_email,
          airline.Airline_phone,
        ]
      );
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  //delete airline
  async deleteAirlineById(Airline_id) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "Delete From Airlines where Airline_id = $1",
        [Airline_id]
      );
      connection.release();
      return result;
    } catch (error) {
      throw error;
    }
  }
  //get all airlines
  async getAllAirlines() {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "SELECT * FROM Airlines Order by Airline_name"
      );
      connection.release();
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  //get airline by id
  async getAirlineById(Airline_id) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "SELECT * FROM Airlines WHERE Airline_id = $1 ",
        [Airline_id]
      );
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  //update airline
  async updateAirline(airline) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "UPDATE Airlines SET Airline_name = $1, Airline_email = $2, Airline_phone = $3 WHERE Airline_id = $4 RETURNING *",
        [
          airline.Airline_name,
          airline.Airline_email,
          airline.Airline_phone,
          airline.Airline_id,
        ]
      );
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}
exports.AirlineOperations = AirlineOperations;
