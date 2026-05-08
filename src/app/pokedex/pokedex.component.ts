import { Component, OnInit, HostListener } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  standalone: false,
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];
  allPokemonEntries: Pokemon[] = [];
  allPokemonByGeneration: { generation: string; pokemons: Pokemon[] }[] = [];
  selectedPokemon: PokemonDetail | null = null;
  gridClass: string = 'three-columns';
  generations: string[] = ['Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'Gen6', 'Gen7', 'Gen8', 'Gen9'];
  selectedGeneration: string = 'Gen1';
  displayGenerationCount: number = 3;
  generationPage: number = 0;
  searchQuery: string = '';
  showScrollToTop: boolean = false;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData(): void {
    this.pokedexService.fetchLocalPokemonList().subscribe({
      next: (data) => {
        const generationsData = data.PokemonList.Generations;
        this.allPokemonByGeneration = Object.keys(generationsData).map((generation) => ({
          generation,
          pokemons: generationsData[generation]
        }));
        this.allPokemonEntries = this.allPokemonByGeneration.reduce((all, group) => all.concat(group.pokemons), [] as Pokemon[]);
        // Set initial pokemons to selected generation
        const selectedGroup = this.allPokemonByGeneration.find(group => group.generation === this.selectedGeneration);
        this.pokemons = selectedGroup ? selectedGroup.pokemons : [];
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

  showMoreInfo(pokemon: Pokemon): void {
    this.selectedPokemon = new PokemonDetail(pokemon);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeInfo(): void {
    this.selectedPokemon = null;
  }

  get isSearching(): boolean {
    return this.searchQuery.trim().length > 0;
  }

  get filteredPokemons(): Pokemon[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      return this.allPokemonEntries;
    }

    return this.allPokemonEntries.filter((pokemon) => {
      // Check name
      if (pokemon.name.toLowerCase().includes(query)) {
        return true;
      }

      // Check index (convert to string for comparison)
      if (pokemon.index.toString().includes(query)) {
        return true;
      }

      // Check types
      if (pokemon.type.some((type) => type.toLowerCase().includes(query))) {
        return true;
      }

      return false;
    });
  }

  updateGridColumns(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.gridClass = selectedValue === '3' ? 'three-columns' : 'four-columns';
  }

  switchGeneration(generation: string): void {
    this.selectedGeneration = generation;
    const generationIndex = this.generations.indexOf(generation);
    if (generationIndex >= 0) {
      this.generationPage = Math.floor(generationIndex / this.displayGenerationCount);
    }
    const selectedGroup = this.allPokemonByGeneration.find(group => group.generation === generation);
    this.pokemons = selectedGroup ? selectedGroup.pokemons : [];
  }

  get generationPageCount(): number {
    return Math.ceil(this.generations.length / this.displayGenerationCount);
  }

  get visibleGenerations(): string[] {
    const start = this.generationPage * this.displayGenerationCount;
    return this.generations.slice(start, start + this.displayGenerationCount);
  }

  prevGenerationPage(): void {
    if (this.generationPage > 0) {
      this.generationPage -= 1;
    }
  }

  nextGenerationPage(): void {
    if (this.generationPage < this.generationPageCount - 1) {
      this.generationPage += 1;
    }
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
