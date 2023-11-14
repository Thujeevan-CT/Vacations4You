import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayReservationSectionComponent } from './holiday-reservation-section.component';

describe('HolidayReservationSectionComponent', () => {
  let component: HolidayReservationSectionComponent;
  let fixture: ComponentFixture<HolidayReservationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayReservationSectionComponent]
    });
    fixture = TestBed.createComponent(HolidayReservationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
