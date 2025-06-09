import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    //Admin
    routeLink: '/actividadusuarios',
    icon: 'fal fa-users',
    label: 'Actividad',

  },
  {
    //Admin, empleado, cliente final
    routeLink: '/dashboardmotel',
    icon: 'fal fa-home',
    label: 'Inicio',

  },
  { 
    //Admin
    routeLink: '/cuartos',
    icon: 'fal fa-cube',
    label: 'Cuartos',

  },
  {
    //Admin
    routeLink: '/empleados',
    icon: 'fal fa-user',
    label: 'Empleados',

  },

  {
    //Admin, empleado
    routeLink: '/productos',
    icon: 'fal fa-warehouse',
    label: 'Productos',
  },
  {
    //Admin, empleado
    routeLink: '/reservas',
    icon: 'fal fa-list',
    label: 'Reservas',
  },
  {
    //Admin
    routeLink: '/roles',
    icon: 'fal fa-id-card',
    label: 'Roles',
  },
  {
    //Admin
    routeLink: '/sucursales',
    icon: 'fal fa-city',
    label: 'Sucursales',
  },
  {
    //Admin
    routeLink: '/tipocuartos',
    icon: 'fal fa-cubes',
    label: 'Tipos de cuartos',
  },
  {
    //Admin
    routeLink: '/transacciones',
    icon: 'fal fa-dollar-sign',
    label: 'Transacciones',
  },
];
