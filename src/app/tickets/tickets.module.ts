import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { TicketsPage } from "./containers/tickets/tickets.page";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketComponent } from "./components/ticket/ticket.component";
import { FiltersComponent } from '../shared/components/filters/filters.component';
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";
import { TicketRejectComponent } from "./components/ticket-reject/ticket-reject.component";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketsPage,
    TicketComponent,
    TicketCardComponent,
    TicketRejectComponent,
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
