import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';

describe('PokedexService', () => {
  let service: PokedexService;
    TestBed.configureTestingModule({
      providers: [PokedexService]
    });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
