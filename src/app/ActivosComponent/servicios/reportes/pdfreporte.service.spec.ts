import { TestBed } from '@angular/core/testing';

import { PdfreporteService } from './pdfreporte.service';

describe('PdfreporteService', () => {
  let service: PdfreporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfreporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
