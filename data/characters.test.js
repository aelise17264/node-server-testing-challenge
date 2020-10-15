const { create, remove, getCharacters} = require('./characters/model')

describe('getCharacters', () => {
    it('should return the list of characters', () => {
        const characterList = getCharacters()
        expect.objectContaining(characterList)
    })
})

