import { Component, OnInit, HostListener, signal, computed, WritableSignal, Signal } from '@angular/core';
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
  pokemons: WritableSignal<Pokemon[]> = signal([]);
  allPokemonEntries: WritableSignal<Pokemon[]> = signal([]);
  allPokemonByGeneration: WritableSignal<{ generation: string; pokemons: Pokemon[] }[]> = signal([]);
  selectedPokemon: WritableSignal<PokemonDetail | null> = signal(null);
  gridClass: WritableSignal<string> = signal('three-columns');
  readonly generations: string[] = ['Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'Gen6', 'Gen7', 'Gen8', 'Gen9'];
  selectedGeneration: WritableSignal<string> = signal('Gen1');
  readonly displayGenerationCount = 3;
  generationPage: WritableSignal<number> = signal(0);
  searchQuery: WritableSignal<string> = signal('');
  showScrollToTop: WritableSignal<boolean> = signal(false);

  readonly isSearching: Signal<boolean> = computed(() => this.searchQuery().trim().length > 0);
  readonly filteredPokemons: Signal<Pokemon[]> = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.allPokemonEntries();
    }

    return this.allPokemonEntries().filter((pokemon) => {
      if (pokemon.name.toLowerCase().includes(query)) {
        return true;
      }
      if (pokemon.index.toString().includes(query)) {
        return true;
      }
      if (pokemon.type.some((type) => type.toLowerCase().includes(query))) {
        return true;
      }
      return false;
    });
  });
  readonly generationPageCount: Signal<number> = computed(() => Math.ceil(this.generations.length / this.displayGenerationCount));
  readonly visibleGenerations: Signal<string[]> = computed(() => {
    const start = this.generationPage() * this.displayGenerationCount;
    return this.generations.slice(start, start + this.displayGenerationCount);
  });

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData(): void {
    this.pokedexService.fetchLocalPokemonList().subscribe({
      next: (data) => {
        const generationsData = data.PokemonList.Generations;
        const generationGroups = Object.keys(generationsData).map((generation) => ({
          generation,
          pokemons: generationsData[generation]
        }));
        this.allPokemonByGeneration.set(generationGroups);
        this.allPokemonEntries.set(generationGroups.reduce((all, group) => all.concat(group.pokemons), [] as Pokemon[]));
        const selectedGroup = generationGroups.find(group => group.generation === this.selectedGeneration());
        this.pokemons.set(selectedGroup ? selectedGroup.pokemons : []);
      },
      error: (error) => {
        console.error('Error fetching Pokémon data:', error);
      }
    });
  }

  formatIndex(index: number): string {
    return `#${index.toString().padStart(4, '0')}`;
  }

  showMoreInfo(pokemon: Pokemon): void {
    this.selectedPokemon.set(new PokemonDetail(pokemon));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeInfo(): void {
    this.selectedPokemon.set(null);
  }

  updateGridColumns(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.gridClass.set(selectedValue === '3' ? 'three-columns' : 'four-columns');
  }

  switchGeneration(generation: string): void {
    this.selectedGeneration.set(generation);
    const generationIndex = this.generations.indexOf(generation);
    if (generationIndex >= 0) {
      this.generationPage.set(Math.floor(generationIndex / this.displayGenerationCount));
    }
    const selectedGroup = this.allPokemonByGeneration().find(group => group.generation === generation);
    this.pokemons.set(selectedGroup ? selectedGroup.pokemons : []);
  }

  prevGenerationPage(): void {
    if (this.generationPage() > 0) {
      this.generationPage.set(this.generationPage() - 1);
    }
  }

  nextGenerationPage(): void {
    if (this.generationPage() < this.generationPageCount() - 1) {
      this.generationPage.set(this.generationPage() + 1);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.showScrollToTop.set(scrollPosition > 1000);
  }
}
