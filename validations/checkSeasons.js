const { getAllSeasons } = require("../queries/seasons")
const { getAllPlayers } = require("../queries/players")

const checkSeasons = async (req, res, next) => {
    const { player_id } = req.params
    const allSeasons = await getAllSeasons(player_id)
    if (allSeasons[0]) {
        return next()
    }
    else {
        res.status(500).json({
            error: `server error in getAllSeasons,` +
                ` list validation failed, no seasons`
        })
    }
}

const checkPlayerIndex = async (req, res, next) => {
    const allPlayers = await getAllPlayers()
    const { player_id } = req.params
    const ids = allPlayers.map(e => e.player_id)
    if (ids.includes(Number(player_id)))
        return next()
    else
        res.status(400).json({
            error: `server error in checkPlayerIndex,` +
                ` id validation failed`
        })
}

const checkSeasonIndex = async (req, res, next) => {
    const { player_id, season_id } = req.params
    const allSeasons = await getAllSeasons(player_id)
    const ids = allSeasons.map(e => e.id)
    if (ids.includes(Number(season_id)))
        return next()
    else
        res.status(400).json({
            error: `server error in checkSeasonIndex,` +
                ` id validation failed for seasons`
        })
}

const checkSeasonName = (req, res, next) => {
    if (req.body.season) {
        return next()
    }
    else {
        res.status(400).json({
            error: `season year is required,` +
                ` name validation failed for season data`
        })
    }
}


module.exports = {
    checkSeasons,
    checkPlayerIndex,
    checkSeasonIndex,
    checkSeasonName
}
