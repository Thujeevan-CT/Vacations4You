import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBookingSectionComponent } from './activity-booking-section.component';

describe('ActivityBookingSectionComponent', () => {
  let component: ActivityBookingSectionComponent;
  let fixture: ComponentFixture<ActivityBookingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityBookingSectionComponent]
    });
    fixture = TestBed.createComponent(ActivityBookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
