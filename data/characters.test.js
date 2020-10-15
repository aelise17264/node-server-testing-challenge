const { create, remove, getCharacters} = require('./characters/model')

const db = require('./dbConfig')

describe('getCharacters', () => {
    it('should return the list of characters', () => {
        const characterList = getCharacters()
        expect.objectContaining(characterList)
    })
})

describe('create new character', () => {
    it('should add a character to the list', async () => {
       await create ({name: 'Cesar'})
       const characters = await db('characters')
        expect(characters).toHaveLength(1)
    })
})

describe('remove a character', () => {
    it('should remove a character from the list', async () => {
        await remove ({name: 'Cesar'})
        const characters = await db('characters')
        expect(characters).toHaveLength(0)
    })
})