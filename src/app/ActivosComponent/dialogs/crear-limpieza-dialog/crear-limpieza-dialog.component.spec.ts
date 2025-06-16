import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLimpiezaDialogComponent } from './crear-limpieza-dialog.component';

describe('CrearLimpiezaDialogComponent', () => {
  let component: CrearLimpiezaDialogComponent;
  let fixture: ComponentFixture<CrearLimpiezaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearLimpiezaDialogComponent]
    });
    fixture = TestBed.createComponent(CrearLimpiezaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
