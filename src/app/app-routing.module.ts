import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/containers/login/login.page';
import { TabsPage } from './shared/containers/tabs/tabs.page';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'tabs', component: TabsPage, children: [
    // {
    //   path: '',
    //   redirectTo: '/tabs/tickets',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'tickets',
    //   children: [{ path: '', component: HomePage }]
    // },
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
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
