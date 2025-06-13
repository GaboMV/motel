import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSucursalDialogComponent } from './crear-sucursal-dialog.component';

describe('CrearSucursalDialogComponent', () => {
  let component: CrearSucursalDialogComponent;
  let fixture: ComponentFixture<CrearSucursalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearSucursalDialogComponent]
    });
    fixture = TestBed.createComponent(CrearSucursalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
