import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImprovementsComponent } from './form-improvements.component';

describe('FormImprovementsComponent', () => {
  let component: FormImprovementsComponent;
  let fixture: ComponentFixture<FormImprovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImprovementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImprovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
