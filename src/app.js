const express = require('express')
const app = express()

//rota
const music = require("./routes/musicRoute")
app.use("/musics", music)

module.exports = app