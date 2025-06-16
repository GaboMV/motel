import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCheckoutDialogComponent } from './crear-checkout-dialog.component';

describe('CrearCheckoutDialogComponent', () => {
  let component: CrearCheckoutDialogComponent;
  let fixture: ComponentFixture<CrearCheckoutDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCheckoutDialogComponent]
    });
    fixture = TestBed.createComponent(CrearCheckoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
