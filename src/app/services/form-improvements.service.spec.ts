import { TestBed } from '@angular/core/testing';

import { FormImprovementsService } from './form-improvements.service';

describe('FormImprovementsService', () => {
  let service: FormImprovementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormImprovementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
