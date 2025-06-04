export interface EmployeeInterface {
  id: number;
  nombre: string;
  ci: string;
  email: string;
  telefono1: string;
  telefono2?: string;
  password: string;
  estado: boolean;
  rol_id: number;
  sucursales_id: number;
}

export const employeeData: EmployeeInterface[] = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    ci: '1234567 LP',
    email: 'juan.perez@motel.com',
    telefono1: '555-123-4567',
    telefono2: '555-987-6543',
    password: 'hashed_password_123',
    estado: true,
    rol_id: 1,
    sucursales_id: 1
  },
  {
    id: 2,
    nombre: 'María García',
    ci: '7654321 SC',
    email: 'maria.garcia@motel.com',
    telefono1: '555-234-5678',
    telefono2: undefined,
    password: 'hashed_password_456',
    estado: true,
    rol_id: 2,
    sucursales_id: 2
  },
  {
    id: 3,
    nombre: 'Carlos López',
    ci: '9876543 CB',
    email: 'carlos.lopez@motel.com',
    telefono1: '555-345-6789',
    telefono2: '555-876-5432',
    password: 'hashed_password_789',
    estado: false,
    rol_id: 3,
    sucursales_id: 1
  },
  {
    id: 4,
    nombre: 'Ana Rodríguez',
    ci: '5678912 OR',
    email: 'ana.rodriguez@motel.com',
    telefono1: '555-456-7890',
    telefono2: '555-765-4321',
    password: 'hashed_password_012',
    estado: true,
    rol_id: 4,
    sucursales_id: 3
  },
  {
    id: 5,
    nombre: 'Luisa Martínez',
    ci: '3456789 PT',
    email: 'luisa.martinez@motel.com',
    telefono1: '555-567-8901',
    telefono2: undefined,
    password: 'hashed_password_345',
    estado: true,
    rol_id: 2,
    sucursales_id: 2
  }
];
