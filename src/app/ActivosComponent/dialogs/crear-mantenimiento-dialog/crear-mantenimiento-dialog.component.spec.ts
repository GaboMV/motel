import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMantenimientoDialogComponent } from './crear-mantenimiento-dialog.component';

describe('CrearMantenimientoDialogComponent', () => {
  let component: CrearMantenimientoDialogComponent;
  let fixture: ComponentFixture<CrearMantenimientoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMantenimientoDialogComponent]
    });
    fixture = TestBed.createComponent(CrearMantenimientoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
