import { TestBed } from '@angular/core/testing';

import { CompareCountryService } from './compare-country.service';

describe('CompareCountryService', () => {
  let service: CompareCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
