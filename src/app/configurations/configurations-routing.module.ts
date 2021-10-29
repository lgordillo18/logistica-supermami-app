import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsPage } from './containers/configurations/configurations.page';
import { UsersListPage } from './containers/user-list/user-list.page';
import { VehicleListPage } from './containers/vehicle-list/vehicle-list.page';
import { VehiclePage } from './containers/vehicle/vehicle.page';
import { OfficeListPage } from './containers/office-list/office-list.page';

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
    path: 'office-list',
    component: OfficeListPage
  },
  {
    path: 'create-user',
    component: UsersPage
  },
  {
    path: 'create-vehicle',
    component: VehiclePage
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
