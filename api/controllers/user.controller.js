const bCrypt = require("bcrypt");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ data: users, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `Error: ${error}`, code: 500 });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bCrypt.hash(req.body.PASSWORD, 10);

    const user = new userModel({
      ...req.body,
      PASSWORD: hashedPassword,
    });

    const result = await user.save();

    if (result) {
      res.json({
        message: `User ${req.body.USERNAME} created successfully`,
        code: 201,
      });
    } else {
      res.json({ message: "Error during creation", code: 500 });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ message: "An error occurred during user creation", code: 500 });
  }
};

const login = async (req, res) => {
  const { USERNAME, PASSWORD } = req.body;

  try {
    const user = await userModel.findOne({ USERNAME });

    if (!user) {
      return res.json({ message: "User not found", code: 404 });
    }

    const passwordMatch = await bCrypt.compare(PASSWORD, user.PASSWORD);

    if (passwordMatch) {
      res.json({
        data: {
          userId: user._id,
          token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          }),
        },
        code: 200,
        message: "ok",
      });
    } else {
      res.json({ message: "Invalid credentials", code: 401 });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.json({ message: "An error occurred during login", code: 500 });
  }
};

const updateUser = async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated successfully", code: 204 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.json({ data: user, message: "ok", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  login,
};
