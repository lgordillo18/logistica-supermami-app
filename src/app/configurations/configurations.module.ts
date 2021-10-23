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
import { UsersPage } from "./containers/user/user.page";

@NgModule({
  declarations: [ 
    ConfigurationsPage,
    UsersListPage,
    ListComponent,
    ItemListComponent,
    UsersPage,
    CreateUserComponent
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

export class ConfigurationsModule {}