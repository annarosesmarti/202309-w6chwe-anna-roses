import { getPokemonApi } from "./data/getPokemonApi/getPokemonApi.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
const pokemonOffset = 20;

const pokemons = await getPokemonApi(urlApi, pokemonOffset);

console.log(pokemons);
