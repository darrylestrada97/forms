import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompareComponent } from './manage-compare.component';

describe('ManageCompareComponent', () => {
  let component: ManageCompareComponent;
  let fixture: ComponentFixture<ManageCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
