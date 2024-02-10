const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to capstone");
  })

const googleMapsController = require("./controllers/googleMapsController");
app.use("/googleMaps", googleMapsController);

module.exports = app;