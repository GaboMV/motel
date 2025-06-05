// src/app/servicios/data/roleData.ts
export interface RoomInterface {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  creado_en: Date;
  actualizado_en: Date;
  estado: boolean;
}

export const roomData: RoomInterface[] = [
  {
    id: 1,
    nombre: 'tematico',
    descripcion: 'Cuarto tematico con indumentaria',
    tipo: "dungeon",
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
   {
    id: 2,
    nombre: 'Dungeon',
    descripcion: 'Cuarto tipo dungeon con moviliario acorde',
    tipo: "simple compartido",
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
  {
    id: 3,
    nombre: 'simple compartido',
    descripcion: 'Cuarto simple con baño compartido',
    tipo: "suite",
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
  {
    id: 4,
    nombre: 'simple privado',
    descripcion: 'Cuarto simple con baño privado',
    tipo: "simple privado",
    creado_en: new Date('2023-01-15'),
    actualizado_en: new Date('2023-05-20'),
    estado: true
  },
];
