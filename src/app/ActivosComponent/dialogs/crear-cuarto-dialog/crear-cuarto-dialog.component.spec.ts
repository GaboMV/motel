import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuartoDialogComponent } from './crear-cuarto-dialog.component';

describe('CrearCuartoDialogComponent', () => {
  let component: CrearCuartoDialogComponent;
  let fixture: ComponentFixture<CrearCuartoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuartoDialogComponent]
    });
    fixture = TestBed.createComponent(CrearCuartoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
