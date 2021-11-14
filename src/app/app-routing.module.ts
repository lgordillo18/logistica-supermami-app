import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/containers/login/login.page';
import { TabsPage } from './shared/containers/tabs/tabs.page';
import { TicketsPage } from './tickets/containers/tickets/tickets.page';
import { TicketsModule } from './tickets/tickets.module';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'tabs', component: TabsPage, children: [
    {
      path: 'tickets',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('./tickets/tickets.module').then(m => m.TicketsModule)
        }
      ]
    },
    {
      path: 'reports',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('./reports/reports.module').then(m => m.ReportsModule)
        }
      ]
    },
    {
      path: 'configurations',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('./configurations/configurations.module').then(m => m.ConfigurationsModule)
        }
      ]
    },
  ]},
  {
    path: 'tickets',
    children: [
      {
        path: '',
        loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
