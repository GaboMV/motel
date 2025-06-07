export interface ReservaInterface {
  id: number;
  horaInicio: Date;
  horaFin: Date;
  detalles: string;
  estado: string; // 'pendiente', 'confirmada', 'en-curso', 'completada', 'cancelada'
  pagado: boolean;
  nombreCuarto: string;
  nombreCliente: string;
  carnetCliente?: string; // Opcional
  creado_en: Date;
  actualizado_en: Date;
}

export const reservaData: ReservaInterface[] = [
  {
    id: 1,
    horaInicio: new Date('2023-06-15T14:00:00'),
    horaFin: new Date('2023-06-15T16:00:00'),
    detalles: 'Reserva para aniversario de bodas',
    estado: 'confirmada',
    pagado: true,
    nombreCuarto: 'Suite Presidencial',
    nombreCliente: 'Juan Pérez',
    carnetCliente: '1234567LP',
    creado_en: new Date('2023-06-01'),
    actualizado_en: new Date('2023-06-01')
  },
  {
    id: 2,
    horaInicio: new Date('2023-06-16T18:00:00'),
    horaFin: new Date('2023-06-17T10:00:00'),
    detalles: 'Estancia nocturna',
    estado: 'en-curso',
    pagado: false,
    nombreCuarto: 'Habitación Ejecutiva',
    nombreCliente: 'María García',
    carnetCliente: '7654321SC',
    creado_en: new Date('2023-06-10'),
    actualizado_en: new Date('2023-06-15')
  },
  {
    id: 3,
    horaInicio: new Date('2023-06-20T10:00:00'),
    horaFin: new Date('2023-06-20T12:00:00'),
    detalles: 'Reunión de negocios',
    estado: 'pendiente',
    pagado: false,
    nombreCuarto: 'Sala de Conferencias',
    nombreCliente: 'Empresa XYZ S.A.',
    creado_en: new Date('2023-06-05'),
    actualizado_en: new Date('2023-06-05')
  },
  {
    id: 4,
    horaInicio: new Date('2023-06-18T20:00:00'),
    horaFin: new Date('2023-06-19T08:00:00'),
    detalles: '',
    estado: 'completada',
    pagado: true,
    nombreCuarto: 'Habitación Estándar',
    nombreCliente: 'Carlos López',
    carnetCliente: '8912345CB',
    creado_en: new Date('2023-05-28'),
    actualizado_en: new Date('2023-06-19')
  },
  {
    id: 5,
    horaInicio: new Date('2023-06-22T15:00:00'),
    horaFin: new Date('2023-06-22T17:00:00'),
    detalles: 'Cancelada por cliente',
    estado: 'cancelada',
    pagado: false,
    nombreCuarto: 'Suite Ejecutiva',
    nombreCliente: 'Ana Rodríguez',
    carnetCliente: '3456789OR',
    creado_en: new Date('2023-06-12'),
    actualizado_en: new Date('2023-06-14')
  }
];
