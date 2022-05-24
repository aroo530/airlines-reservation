const pool = require("../database");

class UserOperations {
  async changePassword(user) {
    try {
      const { name, password } = user;
      const result = await pool.query(
        "UPDATE Person SET password = $1 WHERE name = $2",
        [password, name]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      const connection = await pool.connect();
      const result = await connection.query("SELECT * FROM Person");
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async getUser(name) {
    try {
      const connection = await pool.connect();
      const result = await connection.query(
        "SELECT * FROM Person WHERE name = $1 ",
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
        "INSERT INTO Person (SSN, name, password, email, address, phone, country) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
          user.SSN,
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
