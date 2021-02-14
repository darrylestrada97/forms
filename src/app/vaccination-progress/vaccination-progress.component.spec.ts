import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaccinationProgressComponent } from './vaccination-progress.component';

describe('VaccinationProgressComponent', () => {
  let component: VaccinationProgressComponent;
  let fixture: ComponentFixture<VaccinationProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
