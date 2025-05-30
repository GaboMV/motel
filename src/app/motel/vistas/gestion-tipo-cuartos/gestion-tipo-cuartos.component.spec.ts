import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTipoCuartosComponent } from './gestion-tipo-cuartos.component';

describe('GestionTipoCuartosComponent', () => {
  let component: GestionTipoCuartosComponent;
  let fixture: ComponentFixture<GestionTipoCuartosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionTipoCuartosComponent]
    });
    fixture = TestBed.createComponent(GestionTipoCuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
