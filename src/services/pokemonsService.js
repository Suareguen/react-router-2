import api from "./config";

const getAllPokemons = async () => {
    try {
        const { data } = await api.get('pokemon')
        return data.results
    } catch (error) {
        console.log(error)
    }
}

const getPokemonByName = async (pokemonName) => {
    try {
        const { data } = await api.get(`pokemon/${pokemonName}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllPokemons,
    getPokemonByName
}