import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImprovementsPagedComponent } from './form-improvements-paged.component';

describe('FormImprovementsPagedComponent', () => {
  let component: FormImprovementsPagedComponent;
  let fixture: ComponentFixture<FormImprovementsPagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImprovementsPagedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImprovementsPagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
