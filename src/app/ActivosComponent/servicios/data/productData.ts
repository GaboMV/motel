// src/app/servicios/data/productoData.ts
export interface ProductoInterface {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string | null;
  estado: boolean;
  categoria_id: number;
  creado_en?: Date;
  actualizado_en?: Date;
}

export const productoData: ProductoInterface[] = [
  {
    id: 1,
    nombre: 'Laptop Elite',
    precio: 1200.99,
    stock: 15,
    descripcion: 'Laptop de última generación con 16GB RAM',
    estado: true,
    categoria_id: 1,
    creado_en: new Date('2023-06-10'),
    actualizado_en: new Date('2023-07-15')
  },
  {
    id: 2,
    nombre: 'Smartphone Pro',
    precio: 899.50,
    stock: 30,
    descripcion: 'Teléfono inteligente con cámara de 48MP',
    estado: true,
    categoria_id: 1,
    creado_en: new Date('2023-05-20'),
    actualizado_en: new Date('2023-06-25')
  },
  {
    id: 3,
    nombre: 'Auriculares Inalámbricos',
    precio: 129.99,
    stock: 45,
    descripcion: null, // Ejemplo de descripción nula
    estado: true,
    categoria_id: 2,
    creado_en: new Date('2023-07-01'),
    actualizado_en: new Date('2023-07-01')
  },
  {
    id: 4,
    nombre: 'Teclado Mecánico',
    precio: 75.25,
    stock: 0, // Ejemplo de producto sin stock
    descripcion: 'Teclado mecánico con retroiluminación RGB',
    estado: false, // Producto desactivado
    categoria_id: 2,
    creado_en: new Date('2023-04-15'),
    actualizado_en: new Date('2023-06-30')
  },
  {
    id: 5,
    nombre: 'Monitor 27"',
    precio: 249.99,
    stock: 8,
    descripcion: 'Monitor QHD de 27 pulgadas',
    estado: true,
    categoria_id: 3,
    creado_en: new Date('2023-03-10'),
    actualizado_en: new Date('2023-05-20')
  }
];