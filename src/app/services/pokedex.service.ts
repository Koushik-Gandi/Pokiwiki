import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'http://localhost:3000/PokemonList';

  constructor(private http: HttpClient) {}

  fetchPokemonList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
