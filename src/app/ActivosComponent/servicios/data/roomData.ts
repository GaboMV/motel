// src/app/servicios/data/cuartoData.ts
export interface CuartoInterface {
  id: number;
  nombre: string;
  ocupado: string;
  estado: boolean;
  descripcion: string | null;
  sucursales_id: number;
  tipo_cuarto_id: number;
  creado_en?: Date;
  actualizado_en?: Date;
}

export const cuartoData: CuartoInterface[] = [
  {
    id: 1,
    nombre: 'Suite Presidencial',
    ocupado: 'Libre',
    estado: true,
    descripcion: 'Suite de lujo con jacuzzi y vista al mar',
    sucursales_id: 1,
    tipo_cuarto_id: 1,
    creado_en: new Date('2023-01-10'),
    actualizado_en: new Date('2023-06-15')
  },
  {
    id: 2,
    nombre: 'Habitación Ejecutiva',
    ocupado: 'Ocupado',
    estado: true,
    descripcion: 'Amplia habitación con escritorio ejecutivo',
    sucursales_id: 1,
    tipo_cuarto_id: 2,
    creado_en: new Date('2023-02-05'),
    actualizado_en: new Date('2023-06-20')
  },
  {
    id: 3,
    nombre: 'Habitación Doble',
    ocupado: 'Reservado',
    estado: true,
    descripcion: null, // Ejemplo de descripción nula
    sucursales_id: 2,
    tipo_cuarto_id: 3,
    creado_en: new Date('2023-03-15'),
    actualizado_en: new Date('2023-05-10')
  },
  {
    id: 4,
    nombre: 'Habitación Individual',
    ocupado: 'Mantenimiento',
    estado: false, // Habitación desactivada
    descripcion: 'Habitación económica para una persona',
    sucursales_id: 2,
    tipo_cuarto_id: 4,
    creado_en: new Date('2023-04-01'),
    actualizado_en: new Date('2023-06-01')
  },
  {
    id: 5,
    nombre: 'Suite Familiar',
    ocupado: 'Limpieza',
    estado: true,
    descripcion: 'Amplio espacio para familias con 2 habitaciones',
    sucursales_id: 3,
    tipo_cuarto_id: 1,
    creado_en: new Date('2023-05-20'),
    actualizado_en: new Date('2023-06-18')
  }
];