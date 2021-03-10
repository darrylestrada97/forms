import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVaccinationComponent } from './manage-vaccination.component';

describe('ManageVaccinationComponent', () => {
  let component: ManageVaccinationComponent;
  let fixture: ComponentFixture<ManageVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
