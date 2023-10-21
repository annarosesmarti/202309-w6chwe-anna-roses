import { type PokemonsList } from "../../types";

export const getPokemonApi = async (
  urlApi: string,
  pokemonOffset: number,
): Promise<PokemonsList> => {
  const response = await fetch(`${urlApi}${pokemonOffset}`);
  const pokemonsList = (await response.json()) as PokemonsList;

  return pokemonsList;
};
