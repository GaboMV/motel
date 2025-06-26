import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoCuartoDialogComponent } from './crear-tipo-cuarto-dialog.component';

describe('CrearTipoCuartoDialogComponent', () => {
  let component: CrearTipoCuartoDialogComponent;
  let fixture: ComponentFixture<CrearTipoCuartoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTipoCuartoDialogComponent]
    });
    fixture = TestBed.createComponent(CrearTipoCuartoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
