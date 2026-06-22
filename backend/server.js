const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});


// REGISTER

app.post("/api/register", async (req, res) => {
  try {
    const { fullName, email, phone, course, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      phone,
      course,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ message: "Registration successful ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN (PROPER VERSION)

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1d" });

    //  IMPORTANT: send fullName (NOT name)
    res.json({
      message: "Login successful ✅",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        course: user.course,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DB
mongoose
  .connect("mongodb://127.0.0.1:27017/courseDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
