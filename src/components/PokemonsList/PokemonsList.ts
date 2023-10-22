import Component from "../Component/Component";
import { type PokemonName } from "../../types";

class PokemonsList extends Component {
  constructor(parentElement: Element, pokemon: PokemonName[]) {
    super(parentElement, "ul", "pokemon-list");
    this.pokemon = pokemon;
  }
}

export default PokemonsList;
