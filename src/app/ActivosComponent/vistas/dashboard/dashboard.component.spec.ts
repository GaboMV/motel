import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMotelComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardMotelComponent;
  let fixture: ComponentFixture<DashboardMotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMotelComponent]
    });
    fixture = TestBed.createComponent(DashboardMotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
