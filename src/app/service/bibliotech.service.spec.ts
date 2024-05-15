import { TestBed } from '@angular/core/testing';

import { BibliotechService } from './bibliotech.service';

describe('BibliotechService', () => {
  let service: BibliotechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
