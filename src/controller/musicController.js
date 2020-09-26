const { request, response } = require("../app")
const musics = require("../model/musics.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(musics)
}

module.exports = {
    getAll
}