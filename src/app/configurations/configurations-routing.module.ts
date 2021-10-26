import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsPage } from './containers/configurations/configurations.page';
import { UsersListPage } from './containers/user-list/user-list.page';
import { VehicleListPage } from './containers/vehicle-list/vehicle-list.page';
import { UsersPage } from './containers/user/user.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsPage
  },
  {
    path: 'user-list',
    component: UsersListPage
  },
  {
    path: 'vehicle-list',
    component: VehicleListPage
  },
  {
    path: 'create-user',
    component: UsersPage
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
