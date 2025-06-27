import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuartoDialogComponent } from './editar-cuarto-dialog.component';

describe('EditarCuartoDialogComponent', () => {
  let component: EditarCuartoDialogComponent;
  let fixture: ComponentFixture<EditarCuartoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCuartoDialogComponent]
    });
    fixture = TestBed.createComponent(EditarCuartoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
