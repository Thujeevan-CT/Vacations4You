import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainDashboardSectionComponent } from './user-main-dashboard-section.component';

describe('UserMainDashboardSectionComponent', () => {
  let component: UserMainDashboardSectionComponent;
  let fixture: ComponentFixture<UserMainDashboardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMainDashboardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMainDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
