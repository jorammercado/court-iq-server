const { getAllPlayers } = require("../queries/players")

const checkPlayers = async (req, res, next) => {
    const allPlayers = await getAllPlayers()
    if (allPlayers[0]) {
        return next()
    }
    else {
        res.status(500).json({ error: "server error in getAllPlayers, list validation failed" })
    }
}

const checkPlayerIndex = async (req, res, next) => {
    const allPlayers = await getAllPlayers()
    const { player_id } = req.params
    const ids = allPlayers.map(e => e.player_id)
    if (ids.includes(Number(player_id)))
        return next()
    else
        res.status(400).json({ error: "server error in checkPlayerIndex, player_id validation failed" })
}

const checkPlayerName = (req, res, next) => {
    if (req.body.player) {
        return next()
    }
    else {
        res.status(400).json({ error: "player name is required, name validation failed" })
    }
}


module.exports = {
    checkPlayers,
    checkPlayerIndex,
    checkPlayerName
}