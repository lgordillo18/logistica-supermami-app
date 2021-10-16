import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/containers/login/login.page';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: '**', pathMatch: 'full', redirectTo: ''},
  {
    path: 'configurations',
    children: [
      {
        path: '',
        loadChildren: () => import('./configurations/configurations.module').then(m => m.ConfigurationsModule)
      }
    ]
  },
  {
    path: 'tickets',
    children: [
      {
        path: '',
        loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
      }
    ]
  },
  {
    path: 'reports',
    children: [
      {
        path: '',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
