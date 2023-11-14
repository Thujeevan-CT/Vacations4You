import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseBookingSectionComponent } from './cruise-booking-section.component';

describe('CruiseBookingSectionComponent', () => {
  let component: CruiseBookingSectionComponent;
  let fixture: ComponentFixture<CruiseBookingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CruiseBookingSectionComponent]
    });
    fixture = TestBed.createComponent(CruiseBookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
