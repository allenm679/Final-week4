const pokemonContainer = document.querySelector('#pokemonContainer')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/fortune/`

const pokemonCallback = ({data: pokemon}) => displaypokemon(pokemon)
const errCallback = err => console.log(err.response.data)


const deletePokemon = id => axios.delete(`${baseURL}/${id}`).then(pokemonCallback).catch(errCallback)
const addPokemon = 
