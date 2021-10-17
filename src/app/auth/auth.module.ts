import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { LoginPage } from "./containers/login/login.page";

@NgModule({
  declarations: [
    LoginComponent,
    LoginPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule
  ]
})

export class AuthModule {}