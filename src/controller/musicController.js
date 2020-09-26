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

const onlyArtist = musics.map(music => {
    const newArtist = {
        id: music.artists.id,
        name: music.artists.name
    }
    return newArtist
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

const getArtists = (request, response) => {
    console.log(request.url)
    response.status(200).send(onlyArtist)
}

const getArtistByName = (request,response) => {
    const artistName = request.params.artistName
    const searchArtist = onlyArtist.filter(item => item.name.toLowerCase().includes(artistName))

    if(searchArtist == false) {
        return response.status(404).send('Artista não encontrade.')
    }
    return response.status(200).send(searchArtist)
}

module.exports = {
    getMusics,
    getMusicById,
    getArtists,
    getArtistByName
}