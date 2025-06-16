import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHabilitarDialogComponent } from './crear-habilitar-dialog.component';

describe('CrearHabilitarDialogComponent', () => {
  let component: CrearHabilitarDialogComponent;
  let fixture: ComponentFixture<CrearHabilitarDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearHabilitarDialogComponent]
    });
    fixture = TestBed.createComponent(CrearHabilitarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
