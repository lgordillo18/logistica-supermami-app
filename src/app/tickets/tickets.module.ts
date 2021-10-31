import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { TicketsPage } from "./containers/tickets/tickets.page";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketComponent } from "./components/ticket/ticket.component";
import { TicketDetailsComponent } from "./components/ticket-details/ticket-details.component";
import { TicketDetailsPage } from "./containers/ticket-details/ticket-details.page";
import { FiltersComponent } from '../shared/components/filters/filters.component';
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketsPage,
    TicketComponent,
    TicketDetailsPage,
    TicketDetailsComponent
    FiltersComponent,
    TicketCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    TicketsRoutingModule
  ]
})

export class TicketsModule { }
