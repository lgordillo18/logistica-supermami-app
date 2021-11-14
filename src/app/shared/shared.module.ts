import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FiltersComponent } from "./components/filters/filters.component";
import { TabsPage } from "./containers/tabs/tabs.page";
import { CapitalizePipe } from "./pipes/capital-letter/capital-letter.pipe";
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    TabsPage,
    CapitalizePipe,
    FiltersComponent
  ],
  exports: [
    CapitalizePipe,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule
  ],
  providers: [
    CapitalizePipe
  ]
})

export class SharedModule { }