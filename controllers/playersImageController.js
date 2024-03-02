const express = require("express")
const playerimage = express.Router()
const {
    getAllPlayerImages,
    getPlayerImageByName,
    deletePlayerImage,
    createPlayerImage,
    updatePlayerImage
} = require("../queries/playersImages")
const {
    checkPlayerImages,
    checkPlayerImageName,
    checkPlayerImageNameExists,
} = require("../validations/checkPlayerImages")

playerimage.get("/", checkPlayerImages, async (req, res) => {
    try {
        const allPlayerImages = await getAllPlayerImages()
        res.status(200).json(allPlayerImages)
    }
    catch (error) {
        res.status(400).json({ error: `${error}, error in index controller path.` })
    }
})

playerimage.get("/:player", checkPlayerImageName, async (req, res) => {
    try {
        const { player } = req.params
        const playerImage = await getPlayerImageByName(player)
        res.status(200).json(playerImage)
    }
    catch (error) {
        res.status(400).json({ error: `${error}, error in show controller path -v by name` })
    }
})

playerimage.delete("/:player", checkPlayerImageName, async (req, res) => {
    try {
        const { player } = req.params;
        const deletedPlayerImage = await deletePlayerImage(player)
        if (deletedPlayerImage)
            res.status(200).json({ success: true, deletedPlayerImage })
        else
            res.status(404).json({ error: `PlayerImage not found.` })

    } catch (error) {
        res.status(400).json({ error: `${error}, error in delete controller path` })
    }
})

playerimage.post("/", checkPlayerImageNameExists, async (req, res) => {
    try {
        const playerimage = req.body;
        playerimage.birth_date = !playerimage.birth_date ? 'unknown' : playerimage.birth_date
        playerimage.image_url = !playerimage.image_url ? 'unknown' : playerimage.image_url
        const playerImageAdded = await createPlayerImage(playerimage)
        res.status(200).json(playerImageAdded)
    }
    catch (error) {
        res.status(400).json({ error: `${error},  error in new controller path` })
    }
}
)

playerimage.put("/:player", checkPlayerImageNameExists,
    checkPlayerImageName,
    async (req, res) => {
        try {
            const playerImageData = req.body
            playerImageData.birth_year = !playerImageData.birth_year ? 0 : playerImageData.birth_year
            playerImageData.death_year = !playerImageData.death_year ? 0 : playerImageData.death_year
            const updatedPlayerImage = await updatePlayerImage(playerImageData)
            if (updatedPlayerImage.player_id) {
                res.status(200).json(updatedPlayerImage)
            } else {
                res.status(400).json({ error: `Player Image data not found.` })
            }
        }
        catch (error) {
            res.status(400).json({ error: `${error}, error in update controller path` })
        }
    }
)


module.exports = playerimage
