export interface CategoriaInterface {
    id: number;
    nombre: string;
    estado: boolean;
    description?: string; // Opcional por ser NULL en la tabla
}

export const categoriaData: CategoriaInterface[] = [
    {
        id: 1,
        nombre: 'Electrónicos',
        estado: true,
        description: 'Dispositivos electrónicos y gadgets'
    },
    {
        id: 2,
        nombre: 'Ropa',
        estado: true,
        description: 'Prendas de vestir para hombres, mujeres y niños'
    },
    {
        id: 3,
        nombre: 'Hogar',
        estado: true,
        description: 'Artículos para el hogar y decoración'
    },
    {
        id: 4,
        nombre: 'Deportes',
        estado: true,
        description: 'Equipamiento deportivo y fitness'
    },
    {
        id: 5,
        nombre: 'Juguetes',
        estado: true,
        description: 'Juguetes y juegos para todas las edades'
    },
    {
        id: 6,
        nombre: 'Alimentos',
        estado: true
        // description omitido a propósito para demostrar que es opcional
    },
    {
        id: 7,
        nombre: 'Libros',
        estado: false, // Categoría inactiva
        description: 'Libros de todos los géneros'
    },
    {
        id: 8,
        nombre: 'Belleza',
        estado: true,
        description: 'Productos de cuidado personal y belleza'
    },
    {
        id: 9,
        nombre: 'Automotriz',
        estado: true,
        description: 'Accesorios y repuestos para vehículos'
    },
    {
        id: 10,
        nombre: 'Jardinería',
        estado: true,
        description: 'Herramientas y plantas para jardín'
    },
    {
        id: 11,
        nombre: 'Mascotas',
        estado: true
        // description omitido a propósito
    },
    {
        id: 12,
        nombre: 'Oficina',
        estado: true,
        description: 'Suministros y muebles de oficina'
    }
];