import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { TicketsPage } from "./containers/tickets/tickets.page";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketDetailsPage } from "./containers/ticket-details/ticket-details.page";
import { NewTicketPage } from "./containers/new-ticket/new-ticket.page";
import { SelectOfficesComponent } from "./components/select-offices/select-offices.component";
import { ProductsModalComponent } from "./components/products-modal/products-modal.component";
import { IonicSelectableModule } from "ionic-selectable";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";
import { TicketRejectComponent } from "./components/ticket-reject/ticket-reject.component";
import { ApprovalModalComponent } from "./components/approval-modal/approval-modal.component";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketsPage,
    TicketCardComponent,
    TicketRejectComponent,
    TicketDetailsPage,
    NewTicketPage,
    SelectOfficesComponent,
    ProductsModalComponent,
    ProductListComponent,
    TicketCardComponent,
    ApprovalModalComponent
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
