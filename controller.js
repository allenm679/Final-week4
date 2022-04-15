let pokemonLink = require("./db.json")

module.exports = {
    pokemon: (req, res) => {
        res.status(200).send(pokemonLink)
    },
    deletePokemon: (req,res) => {
        let index = movies.findIndex(elem => elem.id === + req.params.id)
        pokemon.splice(index, 1)
        res.status(200).send(pokemonLink)
    }
}