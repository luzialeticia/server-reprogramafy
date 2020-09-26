const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/music", controller.getAll)

module.exports = router