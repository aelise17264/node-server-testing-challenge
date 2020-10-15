const express = require('express');

 const Characters = require('../data/characters/model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: 'up and running'})
})

server.get('/characters', (req, res) => {
    Characters.getCharacters()
    .then(character => {
        res.status(200).json(character)
    })
    .catch(error => {
        res.status(500).json({message: 'Make sure your purchased tickets for the opera'})
    })
})


module.exports = server;