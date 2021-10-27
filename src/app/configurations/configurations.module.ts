import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { ListComponent } from "./components/list/list.component";
import { CreateUserComponent } from "./components/user/user.component";
import { ConfigurationsRoutingModule } from "./configurations-routing.module";
import { ConfigurationsPage } from "./containers/configurations/configurations.page";
import { UsersListPage } from "./containers/user-list/user-list.page";
import { VehicleListPage } from './containers/vehicle-list/vehicle-list.page';
import { UsersPage } from "./containers/user/user.page";
import { VehiclePage } from "./containers/vehicle/vehicle.page";
import { CreateVehicleComponent } from "./components/vehicle/vehicle.component";

@NgModule({
  declarations: [
    ConfigurationsPage,
    UsersPage,
    VehiclePage,
    UsersListPage,
    VehicleListPage,
    UsersPage,
    CreateUserComponent,
    CreateVehicleComponent,
    ListComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    ConfigurationsRoutingModule,
    SharedModule
  ]
})

export class ConfigurationsModule { }