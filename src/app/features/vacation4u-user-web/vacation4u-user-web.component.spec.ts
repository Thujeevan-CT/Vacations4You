import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacation4uUserWebComponent } from './vacation4u-user-web.component';

describe('Vacation4uUserWebComponent', () => {
  let component: Vacation4uUserWebComponent;
  let fixture: ComponentFixture<Vacation4uUserWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vacation4uUserWebComponent]
    });
    fixture = TestBed.createComponent(Vacation4uUserWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
