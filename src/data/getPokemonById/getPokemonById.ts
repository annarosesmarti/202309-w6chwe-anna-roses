import { type PokemonName as PokemonResponse } from "../../types";

const getPokemonById = async (pokemonUrl: string): Promise<PokemonResponse> => {
  const response = await fetch(pokemonUrl);
  const pokemonPromise = (await response.json()) as PokemonResponse;

  const filteredPokemonData: PokemonResponse = {
    name: pokemonPromise.name,
    url: pokemonPromise.url,
  };

  return filteredPokemonData;
};

export default getPokemonById;
