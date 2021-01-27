import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublishingComponent } from './form-publishing.component';

describe('FormPublishingComponent', () => {
  let component: FormPublishingComponent;
  let fixture: ComponentFixture<FormPublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPublishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
