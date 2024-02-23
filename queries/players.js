const db = require(`../db/dbConfig.js`)

const getAllPlayers = async () => {
    try {
        const allPlayers = await db.any(`SELECT * FROM players`)
        return allPlayers
    }
    catch (err) {
        return { err: `${err}, sql query error - get all players` }
    }
}

const getOnePlayer = async (player_id) => {
    try {
        const onePlayer = await db.one(`SELECT * FROM players WHERE player_id=$1`, player_id)
        return onePlayer
    }
    catch (err) {
        return { err: `${err}, sql query error - get one player` }
    }
}

const deletePlayer = async (player_id) => {
    try {
        const deletedPlayer = await db.one(
            `DELETE FROM players WHERE player_id=$1 RETURNING *`,
            player_id
        )
        return deletedPlayer
    }
    catch (err) {
        return { err: `${err}, sql query error - delete a player` }
    }
}

const createPlayer = async (player) => {
    try {
        const { player, birth_year, age, season,
            experience, pos, tm } = player``
        const newPlayer = await db.one(
            `INSERT INTO players(player, birth_year, age, season,` +
            ` experience, pos, tm)` +
            ` VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [player, birth_year, age, season,
                experience, pos, tm]
        )
        return newPlayer
    }
    catch (err) {
        return { err: `${err}, sql query error - create a player` }
    }
}

const updatePlayer = async (player_id, player) => {
    try {
        const { player, birth_year, age, season,
            experience, pos, tm } = player
        const updatedPlayer = await db.one(
            `UPDATE players SET player=$1, birth_year=$2, age=$3,` +
            ` season=$4, experience=$5, pos=$6, tm=$7` +
            ` WHERE player_id=$8 RETURNING *`,
            [player, birth_year, age, season,
                experience, pos, tm, player_id]
        )
        return updatedPlayer
    }
    catch (err) {
        return { err: `${err}, sql query error - update a player` }
    }
}

module.exports = {
    getAllPlayers,
    getOnePlayer,
    deletePlayer,
    createPlayer,
    updatePlayer
}
