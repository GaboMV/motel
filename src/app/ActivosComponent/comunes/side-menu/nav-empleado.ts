import { INavbarData } from './helper';

export const navbarDataEmpleado: INavbarData[] = [
  {
    //Admin, empleado, cliente final
    routeLink: '/dashboardmotel',
    icon: 'fal fa-home',
    label: 'Inicio',

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
];
