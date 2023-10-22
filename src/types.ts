export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonName[];
}

export interface PokemonName {
  name: string;
  url: string;
}
