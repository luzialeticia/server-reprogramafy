const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/musics", controller.getMusics)
router.get("/musics/:id", controller.getMusicById)
router.get("/artists", controller.getArtists)
router.get("/artists/:artistName", controller.getArtistByName)

module.exports = router