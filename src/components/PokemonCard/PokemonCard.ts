import { type PokemonName } from "../../types";
import Component from "../Component/Component";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: PokemonName,
  ) {
    super(parentElement, "li", "pokemon-card");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <span class="pokemon-card__name" height="309" width="842">${this.pokemon.name}
      </span>
      <a href="" alt="pokemon ${this.pokemon.name} image" class="pokemon-card__url">${this.pokemon.url}
      </a>
    `;
  }
}

export default PokemonCard;
