import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TabsPage } from "./containers/tabs/tabs.page";
import { CapitalizePipe } from "./pipes/capital-letter/capital-letter.pipe";

@NgModule({
  declarations: [
    TabsPage,
    CapitalizePipe,

  ],
  exports: [
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CapitalizePipe
  ]
})

export class SharedModule { }