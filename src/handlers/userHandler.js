const { UserOperations } = require("../models/users");
const { verifyToken } = require("../middleware/verifyToken");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const ROUNDS = Number(process.env.SALT_ROUNDS);
const BCRYPT_PASSWORD = String(process.env.BCRYPT_PASSWORD);

const operations = new UserOperations();
const changePassword = async (req, res) => {
  try {
    const { name, password } = req.body;
    const result = await operations.changePassword(name, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const result = await operations.getUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const result = await operations.getUser(req.params.name);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    let tempUser = req.body;

    tempUser.password = await bcrypt.hash(
      tempUser.password + BCRYPT_PASSWORD,
      ROUNDS
    );
    //we pass the user object to the createUser function to save user in the database
    const newUser = await operations.createUser(tempUser);
    // console.log(tempUser);
    // console.log(newUser);
    res.status(201).json(await createToken(newUser));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    //find user
    const result = await operations.getUsers();

    const userFound = result.find((user) => {
      return user.name === name;
    });

    // console.log(userFound);
    if (userFound) {
      //send the token if the password is correct
      const isPasswordCorrect = bcrypt.compareSync(
        password + BCRYPT_PASSWORD,
        userFound.password
      );
      // console.log(isPasswordCorrect);
      if (isPasswordCorrect) {
        res.status(200).json(await createToken(userFound));
      } else {
        res.status(401).json("Password is incorrect");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const userOperaionsRoutes = (app) => {
  //localhost:3000/users/ahmed
  app.get("/users/:name", verifyToken, getUser);
  app.get("/users", verifyToken, getUsers);
  app.put("/users/changepassword/:name", verifyToken, changePassword);
  app.post("/users/signup", createUser);
  app.post("/users/login", login);
};

exports.userOperaionsRoutes = userOperaionsRoutes;

const createToken = async (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET);
};
