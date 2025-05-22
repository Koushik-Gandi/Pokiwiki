import { Component, OnInit, HostListener } from '@angular/core';
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
  gridClass: string = 'three-columns';
  generations: string[] = ['Gen1', 'Gen2', 'Gen3', 'Gen4'];
  selectedGeneration: string = 'Gen1';
  showScrollToTop: boolean = false;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData(): void {
    // Fetch Pokémon data from the local JSON file
    this.pokedexService.fetchLocalPokemonList().subscribe({
      next: (data) => {        
        const generationsData = data.PokemonList.Generations;
        const generationIndex = this.generations.indexOf(this.selectedGeneration);
        if (generationIndex !== -1) {
          this.pokemons = generationsData[this.selectedGeneration];          
        }
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

  updateGridColumns(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.gridClass = selectedValue === '3' ? 'three-columns' : 'four-columns';
  }

  switchGeneration(generation: string): void {
    this.selectedGeneration = generation;
    this.fetchPokemonData();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.showScrollToTop = scrollPosition > 1000;
  }
}
