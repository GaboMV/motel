// src/app/data/branchData.ts

export interface Branch {
  id: number;
  nombre: string;
  direccion: string;
  telefono1: string;
  telefono2?: string; // Opcional
  telefono3?: string; // Opcional
  motel: string;
  estado?: boolean;
}

export const BRANCH_DATA: Branch[] = [
  {
    id: 1,
    nombre: 'Sucursal Norte',
    direccion: 'Av. Principal 123',
    telefono1: '555-1234',
    telefono2: '555-5678',
    motel: 'Motel Paraíso',
    estado: true
  },
  {
    id: 2,
    nombre: 'Sucursal Sur',
    direccion: 'Calle Secundaria 456',
    telefono1: '555-9012',
    telefono3: '555-3456',
    motel: 'Motel Luna',
    estado: false
  },
];
