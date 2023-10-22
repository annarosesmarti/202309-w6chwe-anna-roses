import Component from "../Component/Component";

class PokemonsList extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "ul", "pokemon-list");
  }

  protected populate(): void {
    throw new Error("Method not implemented.");
  }
}

export default PokemonsList;
