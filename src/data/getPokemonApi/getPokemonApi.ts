import { type PokemonResponse } from "../../types";

export const getPokemonApi = async (
  urlApi: string,
): Promise<PokemonResponse> => {
  const response = await fetch(urlApi);
  const pokemonsList = (await response.json()) as PokemonResponse;

  return pokemonsList;
};
