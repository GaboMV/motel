// src/app/servicios/data/roleData.ts
export interface TransaccionInterface {
  id: number;
  fecha: Date;
  horaEntrada: Date;
  horaSalida: Date;
  ticket: string;
  nombre: string;
  cuarto: string;
  empleado: string;
  monto: string;
  estado: boolean;
  
}

export const transaccionData: TransaccionInterface[] = [
   {
    id: 1,
    fecha: new Date('2025-06-01'),
    horaEntrada: new Date('2025-06-01T14:00:00'),
    horaSalida: new Date('2025-06-01T16:00:00'),
    ticket: 'TCK-001',
    nombre: 'Juan Pérez',
    cuarto: 'Suite 101',
    empleado: 'Carlos López',
    monto: '250.00',
    estado: true
  },
  {
    id: 2,
    fecha: new Date('2025-06-01'),
    horaEntrada: new Date('2025-06-01T16:30:00'),
    horaSalida: new Date('2025-06-01T18:00:00'),
    ticket: 'TCK-002',
    nombre: 'María García',
    cuarto: 'Simple Privado 102',
    empleado: 'Ana Torres',
    monto: '150.00',
    estado: true
  },
  {
    id: 3,
    fecha: new Date('2025-06-02'),
    horaEntrada: new Date('2025-06-02T10:00:00'),
    horaSalida: new Date('2025-06-02T12:00:00'),
    ticket: 'TCK-003',
    nombre: 'Luis Mendoza',
    cuarto: 'Temático 201',
    empleado: 'Jorge Ramírez',
    monto: '300.00',
    estado: false
  },
  {
    id: 4,
    fecha: new Date('2025-06-02'),
    horaEntrada: new Date('2025-06-02T12:30:00'),
    horaSalida: new Date('2025-06-02T14:00:00'),
    ticket: 'TCK-004',
    nombre: 'Lucía Fernández',
    cuarto: 'Dungeon 202',
    empleado: 'Carlos López',
    monto: '280.00',
    estado: true
  }
];
