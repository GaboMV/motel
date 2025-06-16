import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOcuparcuartoDialogComponent } from './crear-ocuparcuarto-dialog.component';

describe('CrearOcuparcuartoDialogComponent', () => {
  let component: CrearOcuparcuartoDialogComponent;
  let fixture: ComponentFixture<CrearOcuparcuartoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearOcuparcuartoDialogComponent]
    });
    fixture = TestBed.createComponent(CrearOcuparcuartoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
