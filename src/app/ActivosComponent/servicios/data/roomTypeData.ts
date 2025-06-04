// src/app/servicios/data/roleData.ts
export interface RoleInterface {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  creado_en: Date;
  actualizado_en: Date;
  estado: boolean;
}

export const roleData: RoleInterface[] = [
  {
    id: 1,
    nombre: 'tematico',
    descripcion: 'Cuarto tematico con indumentaria',
    precio: 120.5,
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
   {
    id: 2,
    nombre: 'Dungeon',
    descripcion: 'Cuarto tipo dungeon con moviliario acorde',
    precio: 102.5,
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
  {
    id: 3,
    nombre: 'simple compartido',
    descripcion: 'Cuarto simple con baño compartido',
    precio: 70.,
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
  {
    id: 4,
    nombre: 'simple privado',
    descripcion: 'Cuarto simple con baño privado',
    precio: 90.,
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
];
