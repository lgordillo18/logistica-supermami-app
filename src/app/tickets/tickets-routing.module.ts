import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailsPage } from './containers/ticket-details/ticket-details.page';
import { TicketsPage } from './containers/tickets/tickets.page';
import { NewTicketPage } from './containers/new-ticket/new-ticket.page';

const routes: Routes = [
    {
      path: '',
      component: TicketsPage
    },
    {
      path: 'new-ticket',
      component: NewTicketPage
    },
    {
      path: 'ticket-details',
      component: TicketDetailsPage
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
