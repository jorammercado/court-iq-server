const express = require("express")
const players = express.Router()
const {
    getAllPlayers,
    getOnePlayer,
    deletePlayer,
    createPlayer,
    updatePlayer
} = require("../queries/players")
const {
    checkPlayers,
    checkPlayerIndex,
    checkPlayerName,
} = require("../validations/checkPlayers")

const seasonsController = require("./seasonsController.js")
players.use("/:player_id/seasons", seasonsController)

players.get("/", checkPlayers, async (req, res) => {
    try {
        const allPlayers = await getAllPlayers()
        if (req.query.order) {
            allPlayers.sort((a, b) => {
                if (req.query.order === "asc" || req.query.order === "desc") {
                    if (a.player.toLowerCase() < b.player.toLowerCase())
                        return -1
                    else if (a.player.toLowerCase() > b.player.toLowerCase())
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_birthyear" || req.query.order === "desc_birthyear") {
                    if (Number(a.birth_year) < Number(b.birth_year))
                        return -1
                    else if (Number(a.birth_year) > Number(b.birth_year))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_age" || req.query.order === "desc_age") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_season" || req.query.order === "desc_season") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_experience" || req.query.order === "desc_experience") {
                    if (Number(a.experience) < Number(b.experience))
                        return -1
                    else if (Number(a.experience) > Number(b.experience))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_pos" || req.query.order === "desc_pos") {
                    if (a.pos.toLowerCase() < b.pos.toLowerCase())
                        return -1
                    else if (a.pos.toLowerCase() > b.pos.toLowerCase())
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_tm" || req.query.order === "desc_tm") {
                    if (a.tm.toLowerCase() < b.tm.toLowerCase())
                        return -1
                    else if (a.tm.toLowerCase() > b.tm.toLowerCase())
                        return 1
                    else
                        return 0
                }
            })
            if (req.query.order === "asc" || req.query.order === "asc_birthyear" ||
                req.query.order === "asc_age" || req.query.order === "asc_season" ||
                req.query.order === "asc_experience" || req.query.order === "asc_pos" ||
                req.query.order === "asc_tm")
                res.status(200).json(allPlayers)
            else if (req.query.order === "desc" || req.query.order === "desc_birthyear" ||
                req.query.order === "desc_age" || req.query.order === "desc_season" ||
                req.query.order === "desc_experience" || req.query.order === "desc_pos" ||
                req.query.order === "desc_tm")
                res.status(200).json(allPlayers.reverse())
            else
                res.status(400).json({ error: `Order query error in index path.` })
        }
        else
            res.status(200).json(allPlayers)
    }
    catch (error) {
        res.status(400).json({ error: `${error}, error in index controller path.` })
    }
})

players.get("/:id", checkPlayerIndex, async (req, res) => {
    try {
        const { player_id } = req.params
        const player = await getOnePlayer(player_id)
        res.status(200).json(player)
    }
    catch (error) {
        res.status(400).json({ error: `${error}, error in show controller path` })
    }
})

players.delete("/:id", checkPlayerIndex, async (req, res) => {
    try {
        const { player_id } = req.params;
        const deletedPlayer = await deletePlayer(player_id)
        if (deletedPlayer)
            res.status(200).json({ success: true, deletedPlayer })
        else
            res.status(404).json({ error: `Player not found.` })

    } catch (error) {
        res.status(400).json({ error: `${error}, error in delete controller path` })
    }
})

players.post("/", checkPlayerName, async (req, res) => {
        try {
            const player = req.body;
            const playerAdded = await createPlayer(player)
            res.status(200).json(playerAdded)
        }
        catch (error) {
            res.status(400).json({ error: `${error},  error in new controller path` })
        }
    }
)

players.put("/:id", checkPlayerName,
    checkPlayerIndex, async (req, res) => {
        try {
            const { player_id } = req.params
            const player = req.body
            const updatedPlayer = await updatePlayer(player_id, player)
            if (updatedPlayer.player_idid) {
                res.status(200).json(updatedPlayer)
            } else {
                res.status(400).json({ error: `Player not found.` })
            }
        }
        catch (error) {
            res.status(400).json({ error: `${error}, error in update controller path` })
        }
    }
)


module.exports = players
