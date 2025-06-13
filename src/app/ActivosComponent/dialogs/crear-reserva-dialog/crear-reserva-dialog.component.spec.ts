import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReservaDialogComponent } from './crear-reserva-dialog.component';

describe('CrearReservaDialogComponent', () => {
  let component: CrearReservaDialogComponent;
  let fixture: ComponentFixture<CrearReservaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReservaDialogComponent]
    });
    fixture = TestBed.createComponent(CrearReservaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
