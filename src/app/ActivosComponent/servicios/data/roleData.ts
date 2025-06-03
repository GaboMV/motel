// src/app/servicios/data/roleData.ts
export interface RoleInterface {
  id: number;
  nombre: string;
  descripcion: string;
  permisos: string[];
  creado_en: Date;
  actualizado_en: Date;
  estado: boolean;
}

export const roleData: RoleInterface[] = [
  {
    id: 1,
    nombre: 'Administrador',
    descripcion: 'Acceso completo al sistema',
    permisos: ['crear', 'leer', 'actualizar', 'eliminar', 'gestionar_usuarios'],
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
  {
    id: 2,
    nombre: 'Recepcionista',
    descripcion: 'Gestiona reservas y clientes',
    permisos: ['crear_reservas', 'ver_reservas', 'actualizar_reservas', 'gestionar_clientes'],
    creado_en: new Date('2023-02-10'),
    actualizado_en: new Date('2023-04-15'),
    estado: true
  },
  {
    id: 3,
    nombre: 'Limpieza',
    descripcion: 'Gestiona estado de habitaciones',
    permisos: ['ver_habitaciones', 'actualizar_estado_habitaciones'],
    creado_en: new Date('2023-03-05'),
    actualizado_en: new Date('2023-03-05'),
    estado: true
  },
  {
    id: 4,
    nombre: 'Mantenimiento',
    descripcion: 'Gestiona reportes de mantenimiento',
    permisos: ['ver_reportes', 'crear_reportes', 'actualizar_reportes'],
    creado_en: new Date('2023-03-20'),
    actualizado_en: new Date('2023-05-10'),
    estado: true
  },
  {
    id: 5,
    nombre: 'Inactivo',
    descripcion: 'Rol desactivado',
    permisos: [],
    creado_en: new Date('2022-12-01'),
    actualizado_en: new Date('2023-01-30'),
    estado: false
  }
];
