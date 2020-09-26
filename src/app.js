const express = require('express')
const app = express()

//rotas
const music = require("./routes/musicRoute")
//app.use("/music", music)
app.use("/", music)