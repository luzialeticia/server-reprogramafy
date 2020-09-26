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

const getMusicById = (request, response) => {
    const id = request.params.id
    const searchById = newMusicList.find(music => music.id == id)

    if(!searchById) {
        return response.status(404).send('Música não encontrada.')
    }
    return response.status(200).send(searchById)
}

module.exports = {
    getMusics,
    getMusicById
}