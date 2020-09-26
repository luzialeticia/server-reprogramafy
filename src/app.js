const express = require('express')
const app = express()

//rota
const music = require("./routes/musicRoute")
app.use("/", music)

module.exports = app