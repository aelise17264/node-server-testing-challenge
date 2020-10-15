const db = require('../dbConfig')

module.exports = {
    create,
    remove,
    getCharacters
}

function create(newCharacter){
return db('characters').insert(newCharacter)    
}

function remove(id){
return db('characters').delete(id)
}

function getCharacters(){
    return db('characters')
}