const { getAllPlayerImages } = require("../queries/playersImages")

const checkPlayerImages = async (req, res, next) => {
    const allPlayerImages = await getAllPlayerImages()
    if (allPlayerImages[0]) {
        return next()
    }
    else {
        res.status(500).json({ error: "server error in getAllPlayerImages, list validation failed" })
    }
}

const checkPlayerImageName = async (req, res, next) => {
    const allPlayerImages = await getAllPlayerImages()
    const { player } = req.params
    const names = allPlayerImages.map(e => e.player)
    if (names.includes(player))
        return next()
    else
        res.status(400).json({ error: "server error in checkPlayerImageName, no player with given name" })
}

const checkPlayerImageNameExists = (req, res, next) => {
    if (req.body.player) {
        return next()
    }
    else {
        res.status(400).json({ error: "player name is required, name validation failed" })
    }
}

module.exports = {
    checkPlayerImages,
    checkPlayerImageName,
    checkPlayerImageNameExists
}