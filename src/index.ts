import type Pokemons from "./types";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const response = await fetch(urlApi);
const pokemons = (await response.json()) as Pokemons[];

console.log(pokemons);
