import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainDashboardSectionComponent } from './admin-main-dashboard-section.component';

describe('AdminMainDashboardSectionComponent', () => {
  let component: AdminMainDashboardSectionComponent;
  let fixture: ComponentFixture<AdminMainDashboardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMainDashboardSectionComponent]
    });
    fixture = TestBed.createComponent(AdminMainDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
