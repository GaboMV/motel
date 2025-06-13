import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleInterface } from '../../servicios/data/roleData';

@Component({
  selector: 'app-editar-rol-dialog',
  templateUrl: './editar-rol-dialog.component.html',
  styleUrls: ['./editar-rol-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditarRolDialogComponent {
  rol: RoleInterface;
  permisosDisponibles = [
    { nombre: 'crear', seleccionado: false },
    { nombre: 'leer', seleccionado: false },
    { nombre: 'actualizar', seleccionado: false },
    { nombre: 'eliminar', seleccionado: false },
    { nombre: 'gestionar_usuarios', seleccionado: false },
    { nombre: 'gestionar_roles', seleccionado: false }
  ];

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarRolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { rol: RoleInterface }
  ) {
    this.rol = { ...data.rol };
    this.actualizarPermisosUI();
  }

  actualizarPermisosUI() {
    this.permisosDisponibles.forEach(permiso => {
      permiso.seleccionado = this.rol.permisos.includes(permiso.nombre);
    });
  }

  actualizarPermisos() {
    this.rol.permisos = this.permisosDisponibles
      .filter(p => p.seleccionado)
      .map(p => p.nombre);
  }

  guardarCambios() {
    if (!this.rol.nombre || !this.rol.descripcion) {
      this._snackBar.open('Nombre y descripción son requeridos', 'Cerrar', { duration: 2000 });
      return;
    }

    this.rol.actualizado_en = new Date();
    this.dialogRef.close(this.rol);
    this._snackBar.open('Rol actualizado correctamente', 'Cerrar', { duration: 2000 });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
