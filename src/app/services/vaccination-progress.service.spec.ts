import { TestBed } from '@angular/core/testing';

import { VaccinationProgressService } from './vaccination-progress.service';

describe('VaccinationProgressService', () => {
  let service: VaccinationProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
