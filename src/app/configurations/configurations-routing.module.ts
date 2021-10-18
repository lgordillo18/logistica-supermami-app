import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsPage } from './containers/configurations/configurations.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsPage
  },
  // {
  //   path: 'user-list',
  //   component: UserListPage
  // },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule {}
