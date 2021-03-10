import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountryPagedComponent } from './form-country-paged.component';

describe('FormCountryPagedComponent', () => {
  let component: FormCountryPagedComponent;
  let fixture: ComponentFixture<FormCountryPagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCountryPagedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCountryPagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
