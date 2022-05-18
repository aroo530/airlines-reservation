const pool = require("../database");

class UserOperations {
  
  async getUsers() {
    try {
      const connection = await pool.connect();
      const result = await connection.query("SELECT * FROM users");
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async getUser(name) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "SELECT * FROM users WHERE name = $1 ",
        [name]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async createUser(user) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "INSERT INTO users (name, password, email, address, phone, country) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [
          user.name,
          user.password,
          user.email,
          user.address,
          user.phone,
          user.country,
        ]
      );
      connection.release();
      // console.log("res", result);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

exports.UserOperations = UserOperations;
