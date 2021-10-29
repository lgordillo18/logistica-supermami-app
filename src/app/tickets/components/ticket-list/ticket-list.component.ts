import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  @Input() arrayList: any[];
  @Input() textConfig: any;

  constructor() { }

  ngOnInit() {

  }

  get primaryText() {
    return `item.${this.textConfig.primaryText}`;
  }

}
