import { Link } from "react-router-dom";
import { getAllPokemons } from "../../services/pokemonsService";
import { useState, useEffect } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemonsData = async () => {
      const result = await getAllPokemons();
      setPokemons(result);
    };
    getAllPokemonsData();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon, idx) => {
        return (
          <Link key={idx} to={`/pokedex/${pokemon.name}`}>
            <h1 >{pokemon.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default Pokedex;
