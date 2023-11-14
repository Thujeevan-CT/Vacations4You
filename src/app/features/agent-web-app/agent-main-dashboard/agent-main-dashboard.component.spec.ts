import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMainDashboardComponent } from './agent-main-dashboard.component';

describe('AgentMainDashboardComponent', () => {
  let component: AgentMainDashboardComponent;
  let fixture: ComponentFixture<AgentMainDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentMainDashboardComponent]
    });
    fixture = TestBed.createComponent(AgentMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
