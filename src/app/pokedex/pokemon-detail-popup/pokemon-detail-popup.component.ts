import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetail } from '../../models/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-detail-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail-popup.component.html',
  styleUrls: ['./pokemon-detail-popup.component.css']
})
export class PokemonDetailPopupComponent {
  @Input() pokemonDetail: PokemonDetail | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  formatIndex(index: number | undefined): string {
    if (index === undefined || index === null) {
      return '';
    }
    return `#${index.toString().padStart(4, '0')}`;
  }
}
