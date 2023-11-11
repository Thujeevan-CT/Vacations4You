import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListSectionComponent } from './service-list-section.component';

describe('ServiceListSectionComponent', () => {
  let component: ServiceListSectionComponent;
  let fixture: ComponentFixture<ServiceListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceListSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
