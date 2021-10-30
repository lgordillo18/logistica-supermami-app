import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
  @Input() primaryText: string;
  @Input() secondaryText: string;
  @Input() tertiaryText: string;

  constructor() { }

  ngOnInit() {
  }
}