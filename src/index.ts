import App from "./components/App/App.js";
import PokemonsList from "./components/PokemonsList/PokemonsList.js";
import { getPokemonApi } from "./data/getPokemonApi/getPokemonApi.js";
import { type PokemonResponse } from "./types.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";

const pokemons = await getPokemonApi(urlApi);

const body = document.querySelector("body")!;
const app = new App(body);
app.render();

const section = document.querySelector("section")!;

const pokemonList = new PokemonsList(section, pokemons.results);
pokemonList.render();

export const getNextPokemons = async (): Promise<PokemonResponse> =>
  getPokemonApi(pokemons.next);

export const getPreviousPokemons = async (): Promise<PokemonResponse> =>
  getPokemonApi(pokemons.previous);
