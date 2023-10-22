import getPokemonById from "../../data/getPokemonById/getPokemonById.js";
import { type PokemonName } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonsList extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemons: PokemonName[],
  ) {
    super(parentElement, "section", "pokemon-list");
  }

  protected populate(): void {
    this.pokemons.forEach(async (pokemon: PokemonName) => {
      const pokemonData = await getPokemonById(pokemon.url);
      const pokemonCard = new PokemonCard(this.element, pokemonData);
      pokemonCard.render();
    });
  }
}

export default PokemonsList;
