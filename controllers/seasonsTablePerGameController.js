const express = require("express")
const seasons = express.Router({ mergeParams: true })
const { getOnePlayer } = require("../queries/players")

const { getAllSeasons,
    getOneSeason,
    deleteSeason,
    createSeason,
    updateSeason
} = require("../queries/seasons")
const { checkSeasons,
    checkPlayerIndex,
    checkSeasonIndex,
    checkSeasonName
} = require("../validations/checkSeasons.js")

seasons.get("/", checkSeasons, checkPlayerIndex, async (req, res) => {
    try {
        const orderUp = ["asc", "asc_pos", "asc_age", "asc_experience", "asc_tm", "asc_g",
            "asc_gs", "asc_mp_per_game", "asc_fg_per_game", "asc_fga_per_game",
            "asc_fg_percent", "asc_x3p_per_game", "asc_x3pa_per_game", "asc_x3p_percent",
            "asc_x2p_per_game", "asc_x2pa_per_game", "asc_x2p_percent", "asc_e_fg_percent",
            "asc_ft_per_game", "asc_fta_per_game", "asc_ft_percent", "asc_orb_per_game",
            "asc_drb_per_game", "asc_drb_per_game", "asc_trb_per_game", "asc_ast_per_game",
            "asc_stl_per_game", "asc_blk_per_game", "asc_tov_per_game", "asc_pf_per_game",
            "asc_pts_per_game"]
        const orderDown = ["desc", "desc_pos", "desc_age", "desc_experience", "desc_tm", "desc_g",
            "desc_gs", "desc_mp_per_game", "desc_fg_per_game", "desc_fga_per_game",
            "desc_fg_percent", "desc_x3p_per_game", "desc_x3pa_per_game", "desc_x3p_percent",
            "desc_x2p_per_game", "desc_x2pa_per_game", "desc_x2p_percent", "desc_e_fg_percent",
            "desc_ft_per_game", "desc_fta_per_game", "desc_ft_percent", "desc_orb_per_game",
            "desc_drb_per_game", "desc_drb_per_game", "desc_trb_per_game", "desc_ast_per_game",
            "desc_stl_per_game", "desc_blk_per_game", "desc_tov_per_game", "desc_pf_per_game",
            "desc_pts_per_game"]
        const { player_id } = req.params
        const player = await getOnePlayer(player_id)
        let allSeasons = await getAllSeasons(player_id)
        if (req.query.order) {
            allSeasons.sort((a, b) => {
                if (req.query.order === "asc" || req.query.order === "desc") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
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
                else if (req.query.order === "asc_age" || req.query.order === "desc_age") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_experience" || req.query.order === "desc_experience") {
                    if (Number(a.experience) < Number(b.experience))
                        return -1
                    else if (Number(a.experience) > Number(b.experience))
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
                if (req.query.order === "asc_g" || req.query.order === "desc_g") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_gs" || req.query.order === "desc_gs") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_mp_per_game" || req.query.order === "desc_mp_per_game") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_fg_per_game" || req.query.order === "desc_fg_per_game") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_fga_per_game" || req.query.order === "desc_fga_per_game") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_fg_percent" || req.query.order === "desc_fg_percent") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_x3p_per_game" || req.query.order === "desc_x3p_per_game") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_x3pa_per_game" || req.query.order === "desc_x3pa_per_game") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                if (req.query.order === "asc_x3p_percent" || req.query.order === "desc_x3p_percent") {
                    if (Number(a.season) < Number(b.season))
                        return -1
                    else if (Number(a.season) > Number(b.season))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_x2p_per_game" || req.query.order === "desc_x2p_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_x2pa_per_game" || req.query.order === "desc_x2pa_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_x2p_percent" || req.query.order === "desc_x2p_percent") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_e_fg_percent" || req.query.order === "desc_e_fg_percent") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_ft_per_game" || req.query.order === "desc_ft_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_fta_per_game" || req.query.order === "desc_fta_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_ft_percent" || req.query.order === "desc_ft_percent") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_orb_per_game" || req.query.order === "desc_orb_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_drb_per_game" || req.query.order === "desc_drb_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_drb_per_game" || req.query.order === "desc_drb_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_trb_per_game" || req.query.order === "desc_trb_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_ast_per_game" || req.query.order === "desc_ast_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_stl_per_game" || req.query.order === "desc_stl_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_blk_per_game" || req.query.order === "desc_blk_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_tov_per_game" || req.query.order === "desc_tov_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_pf_per_game" || req.query.order === "desc_pf_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
                else if (req.query.order === "asc_pts_per_game" || req.query.order === "desc_pts_per_game") {
                    if (Number(a.age) < Number(b.age))
                        return -1
                    else if (Number(a.age) > Number(b.age))
                        return 1
                    else
                        return 0
                }
            })
            if (orderUp.includes(req.query.order))
                res.status(200).json({ ...player, allSeasons })
            else if (orderDown.includes(req.query.order)) {
                allSeasons = allSeasons.reverse()
                res.status(200).json({ ...player, allSeasons })
            }
            else
                res.status(400).json({
                    error: `Order query error` +
                        ` in index path for seasons.`
                })
        }
        else {
            res.status(200).json({ ...player, allSeasons })
        }
    }
    catch (error) {
        res.status(400).json({
            error: `${error}, error in index` +
                ` controller path for seasons.`
        })
    }
})

seasons.get("/:season_id", checkPlayerIndex, checkSeasonIndex, async (req, res) => {
    try {
        const { player_id, season_id } = req.params
        const season = await getOneSeason(season_id)
        res.status(200).json(season)
    }
    catch (error) {
        res.status(400).json({
            error: `${error}, error in show` +
                ` controller path for artworks`
        })
    }
})

seasons.delete("/:season_id", checkPlayerIndex, checkSeasonIndex, async (req, res) => {
    try {
        const { season_id } = req.params
        const deletedSeason = await deleteSeason(season_id)
        if (deletedSeason) {
            res.status(200).json(deletedSeason)
        } else {
            res.status(404).json({ error: "Season not found." })
        }
    }
    catch (error) {
        res.status(400).json({
            error: `${error}, error in delete` +
                ` controller path for seasons`
        })
    }
})

seasons.post("/", checkPlayerIndex,
    checkSeasonName, async (req, res) => {
        try {
            const { player_id } = req.params
            const player = await getOnePlayer(player_id)
            const seasonData = req.body
            seasonData.player = player.player
            seasonData.player_id = player_id
            const newSeason = await createSeason(seasonData)
            res.status(200).json(newSeason)
        }
        catch (error) {
            res.status(400).json({
                error: `${error}, error in new` +
                    ` controller path for seasons`
            })
        }
    }
)

seasons.put("/:season_id", checkPlayerIndex,
    checkSeasonName,
    checkSeasonIndex, async (req, res) => {
        try {
            const { season_id } = req.params
            const updatedSeasonData = req.body
            const updatedSeason = await updateSeason(season_id, updatedSeasonData)
            res.status(200).json(updatedSeason)
        }
        catch (error) {
            res.status(400).json({
                error: `${error}, error in update` +
                    ` controller path for seasons`
            })
        }
    }
)


module.exports = seasons