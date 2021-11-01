import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { TicketsPage } from "./containers/tickets/tickets.page";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketComponent } from "./components/ticket/ticket.component";
import { NewTicketPage } from "./containers/new-ticket/new-ticket.page";
import { SelectOfficesComponent } from "./components/select-offices/select-offices.component";
import { ProductsModalComponent } from "./components/products-modal/products-modal.component";
import { IonicSelectableModule } from "ionic-selectable";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FiltersComponent } from '../shared/components/filters/filters.component';
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketsPage,
    TicketComponent,
    NewTicketPage,
    SelectOfficesComponent,
    ProductsModalComponent,
    ProductListComponent,
    FiltersComponent,
    TicketCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TicketsRoutingModule,
    IonicSelectableModule
  ]
})

export class TicketsModule { }
