import { Pokemon } from './pokemon.model';

export class PokemonDetail {
  index: number;
  name: string;
  type: string[];
  evolution: string;
  description: string;
  abilities?: string[];
  baseStats?: { [key: string]: number };
  imagePath: string;

  constructor(pokemon: Pokemon) {
    this.index = pokemon.index;
    this.name = pokemon.name;
    this.type = pokemon.type;
    this.evolution = pokemon.evolution;
    this.description = pokemon.description;
    this.abilities = pokemon.abilities;
    this.baseStats = pokemon.baseStats;
    this.imagePath = pokemon.imagePath;
  }
}
