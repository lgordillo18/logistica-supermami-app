import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailsPage } from './containers/ticket-details/ticket-details.page';
import { TicketsPage } from './containers/tickets/tickets.page';
const routes: Routes = [
    {
      path: '',
      component: TicketsPage
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
