import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCuartosComponent } from './gestion-cuartos.component';

describe('GestionCuartosComponent', () => {
  let component: GestionCuartosComponent;
  let fixture: ComponentFixture<GestionCuartosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCuartosComponent]
    });
    fixture = TestBed.createComponent(GestionCuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
