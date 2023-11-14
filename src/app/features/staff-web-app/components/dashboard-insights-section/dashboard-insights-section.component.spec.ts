import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInsightsSectionComponent } from './dashboard-insights-section.component';

describe('DashboardInsightsSectionComponent', () => {
  let component: DashboardInsightsSectionComponent;
  let fixture: ComponentFixture<DashboardInsightsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardInsightsSectionComponent]
    });
    fixture = TestBed.createComponent(DashboardInsightsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
