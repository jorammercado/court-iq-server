const db = require(`../db/dbConfig.js`)

const getAllPlayerImages = async () => {
    try {
        const allPlayerImages = await db.any(`SELECT * FROM playersimage`)
        return allPlayerImages
    }
    catch (err) {
        return { err: `${err}, sql query error - get all players images` }
    }
}

const getPlayerImageByName = async (player) => {
    try {
        const playerImage = await db.one(`SELECT * FROM playersimage WHERE player=${player.replace(/["]/g, "'")}`)
        return playerImage
    }
    catch (err) {
        return { err: `${err}, sql query error - get one player's image` }
    }
}

const deletePlayerImage = async (player) => {
    try {
        const playerImage = await db.any(`SELECT * FROM playersimage WHERE player=$1`,
            player)
        if (playerImage.length > 1)
            throw new error("more than 1 player with this name, need to update delete query")
        const deletedPlayerImage = await db.one(
            `DELETE FROM playersimage WHERE player=$1 RETURNING *`,
            player
        )
        return deletedPlayerImage
    }
    catch (err) {
        return { err: `${err}, sql query error - delete a players image` }
    }
}

const createPlayerImage = async (playerimage) => {
    try {
        const { player, birth_date, image_url } = playerimage
        const newPlayerImage = await db.one(
            `INSERT INTO playersimage(player, birth_date, image_url)` +
            ` VALUES($1, $2, $3) RETURNING *`,
            [player, birth_date, image_url]
        )
        return newPlayerImage
    }
    catch (err) {
        return { err: `${err}, sql query error - create a player image entry` }
    }
}

const updatePlayerImage = async (playerImageData) => {
    try {
        const playerImage = await db.any(`SELECT * FROM playersimage WHERE player=$1`,
            playerImageData.player)
        if (playerImage.length > 1)
            throw new error("more than 1 player with this name, need to update update query")
        const { player, birth_date, image_url } = playerImageData
        const updatedPlayerImage = await db.one(
            `UPDATE playersimage SET player=$1, birth_date=$2, image_url=$3,` +
            ` WHERE player=$4 RETURNING *`,
            [player, birth_date, image_url, player]
        )
        return updatedPlayerImage
    }
    catch (err) {
        return { err: `${err}, sql query error - update a player image` }
    }
}

module.exports = {
    getAllPlayerImages,
    getPlayerImageByName,
    deletePlayerImage,
    createPlayerImage,
    updatePlayerImage
}
