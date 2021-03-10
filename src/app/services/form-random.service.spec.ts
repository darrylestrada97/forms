import { TestBed } from '@angular/core/testing';

import { FormRandomService } from './form-random.service';

describe('FormRandomService', () => {
  let service: FormRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
