const baseURL = `http://localhost:4000/api/fortune/`



const whoThatPokemon = document.getElementById("that-pokemon")
const editPokemon = document.getElementById("edit-pokemon")
const multiplyPokemon = document.getElementById("add-pokemon")


const pokemonDisplay = arr => {
    while(pokemonDisplay.childNodes.length > 0) {
        pokemonDisplay.removeChild(pokemonDisplay.lastChild)
    }

    for(let i = 0; i < arr.length; i++){
        pokemonDisplay(arr[i])
    }
}

const getPokemon = () => {
    axios .get("http://localhost:4000/api/fortune/")
    .then(res => {
        handleDisplay(res.data)
    })
    .catch(err => console.long(err))
}

const addPokemon = e => {
    e.preventDefault()
}

const newPokemon = {
    pokemon: document.getElementById("new-pokemon").value,
    type: document.getElementById("new-type").value,
    color: document.getElementById("new-color").value,
    size: document.getElementById("new-size").value
}

axios.post(`http://localhost:4000/api/fortune/`, newPokemon)
.then(res => {
    handleDisplay(res.data)
})
.catch(err => console.log(err))

document.getElementById("new-pokemon").value = ""
document.getElementById("new-type").value = ""
document.getElementById("new-color").value = ""
document.getElementById("new-size").value = ""


addForm.addEventListener("submit", addPokemon)


const pokemonEdit = poke => {

}
