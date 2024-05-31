import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../services/pokemonsService";
import { useState, useEffect } from "react";

function PokemonInfo() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    const getPokemonData = async () => {
      const result = await getPokemonByName(pokemonName);
      setPokemon(result);
    };
    getPokemonData();
  }, [pokemonName]);

  return (
    <div>
      {/* {
            pokemon && (
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="" />
                </>
            )
        } */}
      {pokemon ? (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="" />
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default PokemonInfo;
