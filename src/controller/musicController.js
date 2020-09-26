const { request, response } = require("../app")
const musics = require("../model/musics.json")

const newMusicList = musics.map(music => {
    const newMusic = {
        id: music.id,
        nome: music.name,
        amostra: music.preview_url,
        nome_album: music.album.name,
        imagem: music.album.url,
        artista: music.artists.name
    }
    return newMusic
})

const getMusics = (request, response) => {
    console.log(request.url)
    response.status(200).send(newMusicList)
}

module.exports = {
    getMusics
}