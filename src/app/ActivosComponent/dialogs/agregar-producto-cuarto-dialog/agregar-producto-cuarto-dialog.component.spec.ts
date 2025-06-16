import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoCuartoDialogComponent } from './agregar-producto-cuarto-dialog.component';

describe('AgregarProductoCuartoDialogComponent', () => {
  let component: AgregarProductoCuartoDialogComponent;
  let fixture: ComponentFixture<AgregarProductoCuartoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProductoCuartoDialogComponent]
    });
    fixture = TestBed.createComponent(AgregarProductoCuartoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
