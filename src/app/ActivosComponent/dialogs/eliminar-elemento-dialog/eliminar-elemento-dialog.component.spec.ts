import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarElementoDialogComponent } from './eliminar-elemento-dialog.component';

describe('EliminarElementoDialogComponent', () => {
  let component: EliminarElementoDialogComponent;
  let fixture: ComponentFixture<EliminarElementoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarElementoDialogComponent]
    });
    fixture = TestBed.createComponent(EliminarElementoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
