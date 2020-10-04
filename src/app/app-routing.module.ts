import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./public/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'admin/users',
    loadChildren: () =>
      import('./admin/pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./public/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled', // Se restaura el scroll cuando cambia de componente
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
