import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayBookingSectionComponent } from './holiday-booking-section.component';

describe('HolidayBookingSectionComponent', () => {
  let component: HolidayBookingSectionComponent;
  let fixture: ComponentFixture<HolidayBookingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayBookingSectionComponent]
    });
    fixture = TestBed.createComponent(HolidayBookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
