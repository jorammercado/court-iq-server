const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Insight Wager");
  })

const googleMapsController = require("./controllers/googleMapsController");
app.use("/googleMaps", googleMapsController);

const usersController = require("./controllers/usersController.js")
app.use("/users", usersController)

const playersTablePerGameController = require("./controllers/playersTablePerGameController.js")
app.use("/playerstablepergame", playersTablePerGameController)

const playersImageController = require("./controllers/playersImageController.js")
app.use("/playerimages", playersImageController)

const flaskController = require("./controllers/flaskController.js")
app.use("/flask", flaskController)

const teamsPropsHeadingController = require("./controllers/teamsPageHeadingController.js")
app.use("/teamspagepropsheading", teamsPropsHeadingController)

const teamsPropsController = require("./controllers/teamsPagePropsController.js")
app.use("/teamspageprops", teamsPropsController)

module.exports = app;