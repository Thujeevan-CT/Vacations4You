import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReservationSectionComponent } from './activity-reservation-section.component';

describe('ActivityReservationSectionComponent', () => {
  let component: ActivityReservationSectionComponent;
  let fixture: ComponentFixture<ActivityReservationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityReservationSectionComponent]
    });
    fixture = TestBed.createComponent(ActivityReservationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
