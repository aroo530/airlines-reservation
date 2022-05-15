const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(" ")[1];
    // console.log(token);
    res.status(200);
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    // console.log(err);
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }
};
exports.verifyToken = verifyToken;
