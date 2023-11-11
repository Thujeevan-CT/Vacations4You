import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingSectionComponent } from './service-booking-section.component';

describe('ServiceBookingSectionComponent', () => {
  let component: ServiceBookingSectionComponent;
  let fixture: ComponentFixture<ServiceBookingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBookingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
