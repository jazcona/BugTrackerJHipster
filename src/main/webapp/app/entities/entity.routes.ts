import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'bugTrackerJHipsterApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'project',
    data: { pageTitle: 'bugTrackerJHipsterApp.project.home.title' },
    loadChildren: () => import('./project/project.routes'),
  },
  {
    path: 'label',
    data: { pageTitle: 'bugTrackerJHipsterApp.label.home.title' },
    loadChildren: () => import('./label/label.routes'),
  },
  {
    path: 'ticket',
    data: { pageTitle: 'bugTrackerJHipsterApp.ticket.home.title' },
    loadChildren: () => import('./ticket/ticket.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
