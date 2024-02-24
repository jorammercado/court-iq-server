const db = require(`../db/dbConfig.js`)

const getAllSeasons = async (player_id) => {
    try {
        const allSeasons = await db.any(`SELECT * FROM seasons WHERE player_id=$1`,
            player_id)
        return allSeasons
    }
    catch (err) {
        return { err: `${err}, sql query error - get all seasons` }
    }
}

const getOneSeason = async (season_id) => {
    try {
        const oneSeason = await db.any(`SELECT * FROM seasons WHERE season_id=$1`, season_id)
        return oneSeason
    }
    catch (err) {
        return { err: `${err}, sql query error - get one season` }
    }
}

const deleteSeason = async (season_id) => {
    try {
        const deletedSeason = await db.one(`DELETE FROM seasons WHERE season_id=$1 RETURNING *`, season_id)
        return deletedSeason
    } catch (err) {
        return { err: `${err}, sql query error - delete a season` }
    }
}

const createSeason = async (seasonData) => {
    try {
        const { season, player, pos, age, experience, lg, tm, g, gs,
            mp_per_game, fg_per_game, fga_per_game, fg_percent, x3p_per_game,
            x3pa_per_game, x3p_percent, x2p_per_game, x2pa_per_game,
            x2p_percent, e_fg_percent, ft_per_game, fta_per_game,
            ft_percent, orb_per_game, drb_per_game, trb_per_game,
            ast_per_game, stl_per_game, blk_per_game, tov_per_game,
            pf_per_game, pts_per_game, player_id } = seasonData
        const newSeason = await db.one(`INSERT INTO seasons(season, player,` +
            ` pos, age, experience, lg, tm, g, gs,` +
            ` mp_per_game, fg_per_game, fga_per_game, fg_percent, x3p_per_game,` +
            ` x3pa_per_game, x3p_percent, x2p_per_game, x2pa_per_game,` +
            ` x2p_percent, e_fg_percent, ft_per_game, fta_per_game,` +
            ` ft_percent, orb_per_game, drb_per_game, trb_per_game,` +
            ` ast_per_game, stl_per_game, blk_per_game, tov_per_game,` +
            ` pf_per_game, pts_per_game,` +
            ` player_id)` +
            ` VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [season, player, pos, age, experience, lg, tm, g, gs,
                mp_per_game, fg_per_game, fga_per_game, fg_percent, x3p_per_game,
                x3pa_per_game, x3p_percent, x2p_per_game, x2pa_per_game,
                x2p_percent, e_fg_percent, ft_per_game, fta_per_game,
                ft_percent, orb_per_game, drb_per_game, trb_per_game,
                ast_per_game, stl_per_game, blk_per_game, tov_per_game,
                pf_per_game, pts_per_game, player_id]
        )
        return newSeason
    } catch (err) {
        return { err: `${err}, sql query error - create a season` }
    }
}

const updateSeason = async (season_id, seasonData) => {
    try {
        const { season, pos, age, experience, lg, tm, g, gs,
            mp_per_game, fg_per_game, fga_per_game, fg_percent, x3p_per_game,
            x3pa_per_game, x3p_percent, x2p_per_game, x2pa_per_game,
            x2p_percent, e_fg_percent, ft_per_game, fta_per_game,
            ft_percent, orb_per_game, drb_per_game, trb_per_game,
            ast_per_game, stl_per_game, blk_per_game, tov_per_game,
            pf_per_game, pts_per_game } = seasonData
        const updatedSeason = await db.one(`UPDATE seasons SET season=$1,` +
            ` pos=$2, age=$3, experience=$4, lg=$5, tm=$6, g=$7, gs=$8,`+
            ` mp_per_game=$9, fg_per_game=$10, fga_per_game=$11, fg_percent=$12, x3p_per_game=$13,` +
            ` x3pa_per_game=$14, x3p_percent=$15, x2p_per_game=$16, x2pa_per_game=$17,` +
            ` x2p_percent=$18, e_fg_percent=$19, ft_per_game=$20, fta_per_game=$21,` +
            ` ft_percent=$22, orb_per_game=$23, drb_per_game=$24, trb_per_game=$25,` +
            ` ast_per_game=$26, stl_per_game=$27, blk_per_game=$28, tov_per_game=$29,` +
            ` pf_per_game=$30, pts_per_game=$31,` +
            ` WHERE season_id=$32 RETURNING *`,
            [season, pos, age, experience, lg, tm, g, gs,
                mp_per_game, fg_per_game, fga_per_game, fg_percent, x3p_per_game,
                x3pa_per_game, x3p_percent, x2p_per_game, x2pa_per_game,
                x2p_percent, e_fg_percent, ft_per_game, fta_per_game,
                ft_percent, orb_per_game, drb_per_game, trb_per_game,
                ast_per_game, stl_per_game, blk_per_game, tov_per_game,
                pf_per_game, pts_per_game, season_id]
        )
        return updatedSeason
    } catch (err) {
        return { err: `${err}, sql query error - updated a season` }
    }
}


module.exports = {
    getAllSeasons,
    getOneSeason,
    deleteSeason,
    createSeason,
    updateSeason
}