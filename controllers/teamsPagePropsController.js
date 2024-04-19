const express = require("express")
const props = express.Router()
const {
    getProps,
} = require("../queries/props")


props.get("/", async (req, res) => {
    try {
        const heading = await getProps()
        res.status(200).json(heading)
    }
    catch (error) {
        res.status(400).json({ error: `${error}, error in getProps controller path.` })
    }
})


module.exports = props
