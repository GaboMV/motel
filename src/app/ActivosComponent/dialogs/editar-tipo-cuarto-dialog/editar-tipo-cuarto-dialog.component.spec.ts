import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoCuartoDialogComponent } from './editar-tipo-cuarto-dialog.component';

describe('EditarTipoCuartoDialogComponent', () => {
  let component: EditarTipoCuartoDialogComponent;
  let fixture: ComponentFixture<EditarTipoCuartoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTipoCuartoDialogComponent]
    });
    fixture = TestBed.createComponent(EditarTipoCuartoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
