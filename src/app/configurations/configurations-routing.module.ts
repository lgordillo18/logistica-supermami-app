import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsPage } from './containers/configurations/configurations.page';
import { UsersListPage } from './containers/user-list/user-list.page';
<<<<<<< HEAD
=======
import { VehicleListPage } from './containers/vehicle-list/vehicle-list.page';
import { UsersPage } from './containers/user/user.page';
import { VehiclePage } from './containers/vehicle/vehicle.page';
>>>>>>> f6c133da30c54547115415a2524ec9d490333362

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsPage
  },
  {
    path: 'user-list',
    component: UsersListPage
<<<<<<< HEAD
=======
  },
  {
    path: 'vehicle-list',
    component: VehicleListPage
  },
  {
    path: 'create-user',
    component: UsersPage
  },
  {
    path: 'create-vehicle',
    component: VehiclePage
>>>>>>> f6c133da30c54547115415a2524ec9d490333362
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
