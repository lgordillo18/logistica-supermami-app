import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() primaryText: string;
  @Input() secondaryText: string;

  constructor() { }

  ngOnInit() {}

}
