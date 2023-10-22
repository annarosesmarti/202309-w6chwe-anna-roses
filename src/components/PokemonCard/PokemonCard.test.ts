import PokemonCard from "./PokemonCard.js";

describe("Given a PokemonCard component", () => {
  describe("When it receives a section element", () => {
    test("Then it should show a span with the class pokemon-card__name", () => {
      const expectedName = "charmander";
      const pokemonName = {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon-form/4/",
      };

      const div = document.createElement("div");

      const card = new PokemonCard(div, pokemonName);
      card.render();

      const span = div.querySelector(".pokemon-card__name")!;
      expect(span.textContent).toBe(expectedName);
    });
  });
});
