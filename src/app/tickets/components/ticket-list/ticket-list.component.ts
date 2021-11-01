import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  @Input() arrayList: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  openDetailPage(ticketId) {
    this.router.navigate(['/tickets/ticket-details', { ticketId }]);
  }
}
