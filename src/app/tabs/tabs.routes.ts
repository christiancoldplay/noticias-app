import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'noticias',
        loadComponent: () => import('../pages/noticias/noticias.page').then((m) => m.NoticiasPage),
      },
      {
        path: 'agregar',
        loadComponent: () => import('../pages/agregar/agregar.page').then((m) => m.AgregarPage),
      },
      {
        path: '',
        redirectTo: '/tabs/noticias',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/noticias',
    pathMatch: 'full',
  },
];