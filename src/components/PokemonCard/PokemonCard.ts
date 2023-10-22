import { type PokemonName as PokemonResponse } from "../../types";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  imageFromUrl: string;

  constructor(
    parentElement: Element,
    private readonly pokemon: PokemonResponse,
  ) {
    super(parentElement, "li", "pokemon-card");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <span class="pokemon-card__name">${this.pokemon.name}</span>
      <a href="" alt="pokemon ${this.pokemon.name} image" class="pokemon-card__url">${this.imageFromUrl}
      </a>
    `;
  }

  protected getImageFromUrl = (): void => {
    const imageId = Number(this.pokemon.url.split("/").at(-2)!);
    this.imageFromUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`;
  };
}

export default PokemonCard;
