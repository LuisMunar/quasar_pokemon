export interface PokemonsResponseInterface {
  count: number;
  next: string;
  previous?: any;
  results: PokemonsInterface[];
}

export interface PokemonsInterface {
  name: string;
  url: string;
}