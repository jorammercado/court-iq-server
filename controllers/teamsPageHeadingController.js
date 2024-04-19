const express = require("express")
const heading = express.Router()
const {
    getHeading,
} = require("../queries/propsheading")


heading.get("/", async (req, res) => {
    try {
        const heading = await getHeading()
        res.status(200).json(heading)
    }
    catch (error) {
        res.status(400).json({ error: `${error}, error in getHeading controller path.` })
    }
})


module.exports = heading
