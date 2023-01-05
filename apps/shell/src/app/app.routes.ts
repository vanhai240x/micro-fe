import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'discount',
    loadChildren: () =>
      import('discount/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('product/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'user',
    loadChildren: () => import('user/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'order',
    loadChildren: () => import('order/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'discount',
    loadChildren: () =>
      import('discount/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('product/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
