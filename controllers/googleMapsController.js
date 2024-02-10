const express = require("express");
require("dotenv").config();
const axios = require("axios");
const googleMaps = express.Router();
const API_KEY = process.env.API_KEY;
const BASE_API_URL = process.env.BASE_API_URL;


googleMaps.post("/", async (req, res) => {
    const timestamp = new Date();
    console.log("post request received at " + timestamp, " looking for " + req.body.query);
    try {
        const { location, distance, query } = req.body;
        const queryString = `${BASE_API_URL}?location=${encodeURIComponent(location)}&radius=` +
            `${distance}&keyword=${encodeURIComponent(query)}&key=${API_KEY}&loading=async&callback=initMap`;
        const mapsData = await axios.get(queryString);
        res.status(200).json(mapsData.data);
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }

});

module.exports = googleMaps;