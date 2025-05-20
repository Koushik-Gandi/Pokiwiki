import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  standalone: false,
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData(): void {

    // Fetch Pokémon data from the local db.json file
    this.pokedexService.fetchLocalPokemonList().subscribe({
      next: (data) => {
        this.pokemons = data.PokemonList.Generations[0].Generation1;
      },
      error: (error) => {
        console.error('Error fetching Pokémon data:', error);
      }
    });

    // Uncomment the following lines to fetch data from the API instead of the local file

    // this.pokedexService.fetchPokemonList().subscribe({
    //   next: (data) => {
    //     this.pokemons = data.Generations[0].Generation1;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching Pokémon data:', error);
    //   }
    // });
  }

  formatIndex(index: number): string {
    return `#${index.toString().padStart(4, '0')}`;
  }
}
