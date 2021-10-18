import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TabsPage } from "./containers/tabs/tabs.page";

@NgModule({
  declarations: [
    TabsPage
  ],
  exports: [],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class SharedModule {}