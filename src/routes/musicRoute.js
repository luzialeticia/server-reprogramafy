const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/musics", controller.getMusics)
router.get("/musics/:id", controller.getMusicById)

module.exports = router