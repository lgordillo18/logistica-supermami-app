import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
  @Input() ticketItem: any;
  @Input() hideDetailButton: boolean = false;
  @Input() card: string;
  @Output() detailButtonEvent = new EventEmitter<any>();
  public currentEmployeeRol = null;

  constructor() {}

  ngOnInit() {
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
  }

  openDetailsEvent(ticketId) {
    this.detailButtonEvent.emit(ticketId)
  }
}