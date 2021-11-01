import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent {
  @Input() ticketItem: any;
  @Input() hideDetailButton: boolean = false;
  @Output() detailButtonEvent = new EventEmitter<any>();

  constructor() { }

  openDetailsEvent(ticketId) {
    this.detailButtonEvent.emit(ticketId)
  }
}