import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTicketPage } from './containers/new-ticket/new-ticket.page';
import { TicketsPage } from './containers/tickets/tickets.page';
const routes: Routes = [
  {
    path: '',
    component: TicketsPage
  },
  {
    path: 'new-ticket',
    component: NewTicketPage
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
