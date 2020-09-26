const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/", controller.getMusics)
router.get("/:id", controller.getMusicById)

module.exports = router