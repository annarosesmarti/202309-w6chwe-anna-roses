import { getPokemonApi } from "./getPokemonApi.js";
import mockFetch from "../mockFetch.js";
import mockData from "../mockData.json";

describe("Given a getPokemonApi() function", () => {
  describe("When it receives an 'https://pokeapi.co/api/v2/pokemon/'", () => {
    test("Then it should return 1 pokemon name", async () => {
      const urlApi = "https://pokeapi.co/api/v2/pokemon/";
      const testName = "bulbasaur";
      window.fetch = mockFetch(mockData);

      const pokemonInfo = await getPokemonApi(urlApi);
      expect(pokemonInfo.results[0].name).toBe(testName);
    });
  });
});
