import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsPage } from './containers/tickets/tickets.page';
const routes: Routes = [
    {
      path: '',
      component: TicketsPage
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
