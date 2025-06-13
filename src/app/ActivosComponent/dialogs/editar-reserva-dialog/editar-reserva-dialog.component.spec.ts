import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservaDialogComponent } from './editar-reserva-dialog.component';

describe('EditarReservaDialogComponent', () => {
  let component: EditarReservaDialogComponent;
  let fixture: ComponentFixture<EditarReservaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservaDialogComponent]
    });
    fixture = TestBed.createComponent(EditarReservaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
