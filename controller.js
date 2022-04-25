let pokemonLink = require("./db.json")
let globalId = pokemon[pokemon.length - 1]. id + 1

module.exports = {
    getPokemon: (req, res) => {
        res.status(200).send(pokemonLink)
    },
    deletePokemon: (req,res) => {
        const {id} = req.params
        let index = pokemon.findIndex(poke => poke.id === +id)
        pokemon.splice(index, 1)
        res.status(200).send(pokemonLink)
    },
    addPokemon: (req,res) => {
        const{pokemon, type, color, size} = req.body
        let newPokemon = {
            pokemon,
            type,
            color,
            size,
            id: globalId
        }
            pokemon.push(newPokemon)
            res.status(200).send(pokemonLink)
            globalId++
    },
    updatePokemon: (req,res) => {
        const {id} = req.params
        const{pokemon,type,color,size} = req.body
        let updatePoke = {
            pokemon,
            type,
            color,
            size,
            id
        }
        let index = pokemon.findIndex(poke=> poke.id === +id)
        pokemon.splice(index, 1, updatePoke)
        res.status(200).send(pokemon)
    }
       
}
