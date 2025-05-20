import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'http://localhost:3000/PokemonList'; // URL of the JSON server
  private localDbUrl = 'assets/db.json'; // Path to the local db.json file

  constructor(private http: HttpClient) {}

  // Fetch Pokémon data from the API
  /* Note: Make sure to run the JSON server with the command: json-server --watch db.json
   to serve the db.json file at http://localhost:3000/PokemonList */
  fetchPokemonList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Fetch Pokémon data from the local db.json file
  fetchLocalPokemonList(): Observable<any> {
    return this.http.get<any>(this.localDbUrl);
  }
}
