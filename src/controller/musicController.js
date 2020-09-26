const { request, response } = require("../app")
const musics = require("../model/musics.json")

const getMusics = (request, response) => {
    console.log(request.url)
    response.status(200).send(musics)
}

const newMusicList = (request, response) => {

}

module.exports = {
    getMusics
}